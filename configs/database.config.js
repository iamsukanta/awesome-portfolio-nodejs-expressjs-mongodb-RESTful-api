require('dotenv').config()
module.exports = {
    // url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mx0f4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    //For mongodb cloud connection
    url: process.env.NODE_ENV === 'development'?`mongodb://localhost/${process.env.DB_NAME}`: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=admin`  
}