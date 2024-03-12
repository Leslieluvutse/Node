const express =require ('express');

const app = express();
const studentRoute =require("./Routes/studentRoutes");
app.use('/api/student',studentRoute);
app.listen(process.env.port || 4000 , function (){
              console.log('Now listening for requests on:https:4000');
});

