const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery',false)
       
        await mongoose.connect('mongodb+srv://PrachiArote:Tmi3hrdksUsEkjEK@cluster0.dlmtl.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0',process.env.MONGO_URL);
        console.log('db connected');
    }catch(error){
        console.log('Db connection error',error);
    }
}

module.exports= db;

