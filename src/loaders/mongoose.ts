import {connect} from "mongoose";
import {MongooseConfig} from "../../config";

export class MongooseClient {
    public async connect() {
        await connect(MongooseConfig.dbUri as string);
    }
}