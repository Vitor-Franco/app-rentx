import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("list cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "AUDI",
      category_id: "22b764e0-ccef-470e-be49-bbf87348e7f9",
      daily_rate: 440.0,
      description: "Carro com espaço",
      fine_amount: 22.2,
      license_plate: "CCC-3333",
      name: "Audi A1",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_test",
      category_id: "22b764e0-ccef-470e-be49-bbf87348e7f9",
      daily_rate: 440.0,
      description: "Carro com espaço",
      fine_amount: 22.2,
      license_plate: "CCC-3333",
      name: "Audi A1",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_test",
      category_id: "22b764e0-ccef-470e-be49-bbf87348e7f9",
      daily_rate: 440.0,
      description: "Carro com espaço",
      fine_amount: 22.2,
      license_plate: "CCC-3333",
      name: "Audi Com Nome Igual",
    });

    const cars = await listCarsUseCase.execute({
      name: "Audi Com Nome Igual",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_test",
      category_id: "22b764e0-ccef-470e-be49-bbf87348e7f9",
      daily_rate: 440.0,
      description: "Carro com espaço",
      fine_amount: 22.2,
      license_plate: "CCC-3333",
      name: "Audi A1",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "22b764e0-ccef-470e-be49-bbf87348e7f9",
    });

    expect(cars).toEqual([car]);
  });
});
