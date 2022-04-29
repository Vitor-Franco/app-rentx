interface IUserResponseDTO {
  avatar: string;
  driver_license: string;
  email: string;
  name: string;
  id: string;
  avatar_url(): string;
}

export { IUserResponseDTO };
