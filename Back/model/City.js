import mongoose from "mongoose";

const { Schema, model, SchemaTypes } = mongoose;

const CitySchema = new Schema({
  Universities: {
    
  }
 });



const CityStructure = model("CityStructure", CitySchema);

export default CityStructure;
