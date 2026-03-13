import { IUser } from "../modules/users/user.model";

export const mapUser = (user: IUser) => ({
  id: user._id.toString(),
  email: user.email,
  username: user.username,
});
