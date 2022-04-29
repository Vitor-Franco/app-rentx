import { instanceToInstance } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDto({
    avatar,
    driver_license,
    email,
    name,
    id,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      avatar,
      avatar_url,
      driver_license,
      email,
      name,
      id,
    });

    return user;
  }
}

export { UserMap };
