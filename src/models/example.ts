import { prop, getModelForClass, DocumentType, modelOptions } from '@typegoose/typegoose';
import { getTypegooseOptions } from "./db-config/model-options";

@modelOptions(getTypegooseOptions("example"))
class Example implements any /*Here goes your resource type */ {
    @prop()
    name: string;
}

const ExampleModel = getModelForClass(Example);

export type IExampleModel = typeof ExampleModel;
export type IExampleInstance = DocumentType<Example>;


export default ExampleModel;