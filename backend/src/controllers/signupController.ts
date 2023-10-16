import { Request, Response } from "express"
import { Farmer } from "../models/farmer";

const emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


const signup = (req: Request, res: Response) => {
  if (!emailRegexp.test(req.body.email)){
    return res.status(400).send('Invalid email')
  }
  const farmer = new Farmer()
  farmer.email = req.body.email
  farmer.password = req.body.password
  farmer.save()
  res.status(200).send(farmer.toJSON());
}

export { signup };