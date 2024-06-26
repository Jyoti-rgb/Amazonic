import express from "express";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
  })
);

export default userRouter;
