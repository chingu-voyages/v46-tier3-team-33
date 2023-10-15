import { Request, Response } from "express"

const signup = (req: Request, res: Response) => {
  res.send('working');
}

export { signup };