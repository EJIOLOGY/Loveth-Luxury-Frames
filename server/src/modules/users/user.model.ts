import mongoose, {
  Schema,
  Document,
  HydratedDocument,
  type Model,
} from "mongoose";

export interface IUser extends Document {
  username: string;
  id?: string;
  email: string;
  password: string;
  role?: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please Input your username"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true },
);

export type UserDocument = HydratedDocument<IUser>;

export const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
