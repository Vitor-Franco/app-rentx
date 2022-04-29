import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      description: "teste",
      name: "teste",
      daily_rate: 123.33,
      license_plate: "teste",
      fine_amount: 123.33,
      brand: "teste",
      category_id: "teste",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      description: "Car1",
      name: "teste",
      daily_rate: 123.33,
      license_plate: "teste",
      fine_amount: 123.33,
      brand: "teste",
      category_id: "teste",
    });

    await expect(
      createCarUseCase.execute({
        description: "Car2",
        name: "teste",
        daily_rate: 123.33,
        license_plate: "teste",
        fine_amount: 123.33,
        brand: "teste",
        category_id: "teste",
      })
    ).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      description: "Car Available",
      name: "teste",
      daily_rate: 123.33,
      license_plate: "teste",
      fine_amount: 123.33,
      brand: "teste",
      category_id: "teste",
    });

    expect(car.available).toBe(true);
  });
});
