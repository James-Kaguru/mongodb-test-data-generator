import {model, Schema} from "mongoose";
import {faker} from "@faker-js/faker";

export interface UserModel {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    dob: string;
    phone: string;
    gender: string;
    avatar: string;
    is_activated: boolean;
    created_at: string;
}

const schema = new Schema<UserModel>(
    {
        name: String,
        email: String,
        password: String,
        role: String,
        dob: String,
        phone: String,
        gender: String,
        avatar: String,
        is_activated: Boolean,
    },
    {
        timestamps: true,
        collection: "users"
    },
);

const User = model<UserModel>('User', schema);

export const testUser: UserModel = {
    avatar: faker.name.firstName(),
    created_at: faker.name.firstName(),
    dob: faker.name.firstName(),
    email: faker.name.firstName(),
    gender: faker.name.firstName(),
    is_activated: true,
    name: faker.name.firstName(),
    password: faker.name.firstName(),
    phone: faker.name.firstName(),
    role: faker.name.firstName()
}
export default async () => {
    for (let i = 0; i < 5; i++) {
        await User.create(testUser)
    }
}
