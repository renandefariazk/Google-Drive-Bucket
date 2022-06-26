import express from "express";
import homeRoute from "./routes/homeRoute";
 
const port = process.env.PORT || 8000;

const app = express();


app.use("/", homeRoute);

app.listen(port, () =>{
  console.log(`Iniciado Port ${port}`);
});