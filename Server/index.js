import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { adminRouter } from "./Routes/adminRoute.js";

const app = express()

  app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT' ],
    credentials: true
  }));
  app.use(cookieParser());
  app.use(express.json());
  app.use('/auth', adminRouter)
  app.listen(3000, () => {
    console.log("Server is running")
 });