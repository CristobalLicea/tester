import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config({ path:'./config/config.env' });

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongo DB Connected: ${connection.connection.host}`)
};

module.exports = connectDB;