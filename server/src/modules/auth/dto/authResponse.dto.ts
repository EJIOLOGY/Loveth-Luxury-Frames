import { UserResponseDTO } from "../../users/dto/userResponse.dto";

export interface AuthResponseDTO {
  token: string;
  user: UserResponseDTO;
}
