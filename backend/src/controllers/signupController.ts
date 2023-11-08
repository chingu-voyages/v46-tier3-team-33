import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import bcrypt from "bcrypt";

const emailRegexp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const emailCheck = (req: Request, res: Response, next: NextFunction) => {
  if (!emailRegexp.test(req.body.email)) {
    return res.status(400).send("Invalid email");
  }
  next();
};

const passwordCheck = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.password) {
    return res.status(400).send("Invalid password");
  }
  next();
};

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

const signup = async (req: Request, res: Response) => {
  try {
    const password = await encryptPassword(req.body.password);

    const user = new UserModel({
      email: req.body.email,
      password,
      isFarmer: req.body.farmer,
    });

    await user.save();
    res.status(200).send(user.toJSON());
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};

export { signup, emailCheck, passwordCheck };
