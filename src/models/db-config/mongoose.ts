import { mongoose } from "@typegoose/typegoose";
import { __CONFIG__ } from "CONFIG";

const MongoDBConnection = mongoose.createConnection(
    `mongodb://localhost/${__CONFIG__.dbName}`,
    {
        ignoreUndefined: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);
export default MongoDBConnection;