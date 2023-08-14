var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/mydb";

const connectDb=async()=>{
    console.log("starting")
    let client=new MongoClient(url,{ useNewUrlParser: true ,useUnifiedTopology:true})
     await client.connect();
     console.log("Db connected")
}

module.exports = connectDb;