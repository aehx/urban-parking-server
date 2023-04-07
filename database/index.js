const mongoose = require('mongoose');
const connection = process.env.CONNECTION_STRING;

mongoose.connect(connection,{connectTimeoutMS:2000}).then(()=>console.log("Database connected")).catch((e)=>{console.error(e)})