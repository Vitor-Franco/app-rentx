import { createClient } from "redis";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { NextFunction, Response, Request } from "express";
import { AppError } from "@shared/errors/AppError";

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const redisClient = createClient({
      legacyMode: true,
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    });

    await redisClient.connect();

    const limiter = new RateLimiterRedis({
      storeClient: redisClient,
      keyPrefix: "middleware",
      points: 10, // 10 requests
      duration: 5, // per 1 second by IP
    });

    await limiter.consume(request.ip);

    return next();
  } catch (e) {
    throw new AppError("Too many requests", 429);
  }
}
