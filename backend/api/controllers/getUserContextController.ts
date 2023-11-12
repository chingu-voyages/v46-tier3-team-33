import { Request, Response } from "express";

const getUserContextController = (req: Request, res: Response) => {
  if (!res.locals.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ user: res.locals.user });
};

export default getUserContextController;
