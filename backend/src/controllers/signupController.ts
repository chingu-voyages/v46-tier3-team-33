import { NextFunction, Request, Response } from "express"
import { Farmer } from "../models/farmer";
import bcrypt from 'bcrypt';

const emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const emailCheck = (req: Request, res: Response, next: NextFunction) => {
  if (!emailRegexp.test(req.body.email)){
    return res.status(400).send('Invalid email')
  }
  next();
}

const passwordCheck = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.password) {
    return res.status(400).send('Invalid password')
  }
  next();
}

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
}

const signup = (req: Request, res: Response) => {
  encryptPassword(req.body.password).then(
    (password: string) => {
      const farmer = new Farmer()
      farmer.email = req.body.email
      farmer.password = password
      farmer.save()
      res.status(200).send(farmer.toJSON());
    }
  );
  
}

export { signup, emailCheck, passwordCheck };