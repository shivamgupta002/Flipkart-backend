import mongoose from "mongoose";

const Connection = async (USERNAME, PASSWORD) => {
  //--------------------- This url is for mongodb Cloud -------------------------
  // const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@e-commerce.nvezefc.mongodb.net/?retryWrites=true&w=majority`;
  //########################################################################
  // This is for local mongodb
    const URL = "mongodb://localhost:27017/flipKart";

  try {
    await mongoose.connect(URL);
    console.log("DataBase Connected successfully");
  } catch (e) {
    console.log("Error while Connecting DataBase due to ", e.message);
  }
};

export default Connection;
