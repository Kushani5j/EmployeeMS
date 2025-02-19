import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { adminRouter } from "./Routes/adminRoute.js";
import { employeeRouter } from "./Routes/employeeRoute.js";

const app = express()

  app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT' ,'DELETE' ],
    credentials: true
  }));
  app.use(cookieParser());
  app.use(express.json());
  app.use('/auth', adminRouter)
  app.use('/employee', employeeRouter)
  app.use(express.static('Public'))
  app.listen(3000, () => {
    console.log("Server is running")
 });