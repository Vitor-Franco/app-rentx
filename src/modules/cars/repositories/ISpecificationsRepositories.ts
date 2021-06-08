import { Specification } from "../model/Specification";

export interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsRepositoryDTO);
  findByName(name: string): Specification;
}

export { ISpecificationsRepository };
