import mongoose from "mongoose";
const Connection=async(URL)=>{
try{
    mongoose.set('strictQuery', false);
await mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
console.log("db connected")
}
catch(error){
    console.log(error.message);
}

}
export default Connection;