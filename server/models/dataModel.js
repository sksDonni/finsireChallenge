import mongoose from "mongoose"
const Schema = mongoose.Schema

const dataSchema = new Schema({
  data: {
   type: [Number],
   required: true 
  },
});

export default mongoose.model("data", dataSchema);
