import dotenv from 'dotenv';
dotenv.config()

import {MongooseConfig} from "../config";
import {connect} from "mongoose";
import createTestData from "./services/createTestData";

const  bootstrap = async() => {
    try {
        await connect(MongooseConfig.dbUri as string).then(() => console.log("connected"))
        await createTestData().then(() => console.log("done"))
    } catch (e) {
        console.log(e)
    }

}

bootstrap().then()