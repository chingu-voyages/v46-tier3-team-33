import { Request, Response } from "express"
import { Farmer } from "../models/farmer";

const signup = (req: Request, res: Response) => {
  const farmer = new Farmer()
  farmer.email = req.body.email
  farmer.password = req.body.password
  farmer.save()
  res.send(farmer.toJSON());
}

export { signup };