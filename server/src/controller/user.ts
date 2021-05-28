import { Response, Request } from "express";
import { User } from "../model";
import { getStorage, saveStorage } from "../common/function";

interface ReponseType {
  success: boolean;
  data: any;
}

export default class UserServices {
  static async get(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const payload: any = await User.find({});

      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }

  static async getById(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const _id: string = req.params.id;
      const payload = await User.findOne({ _id });
      // const payload = await getStorage(_id);
      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }

  static async post(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const { username, password, cart, ordered } = req.body;

      const payload = await User.create({
        username,
        password,
        cart,
        ordered
      });
      saveStorage(payload._id, JSON.stringify(payload));
      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }

  static async postMany(req: Request, res: Response) {
    try {
      const productArr = req.body;
      const payload = await User.insertMany(productArr);
      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ message: "something wrong, can not add" });
    }
  }

  static async put(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const _id = req.params.id;
      const { name, imageArr, price, description } = req.body;

      const payload = await User.findOneAndUpdate(
        { _id },
        {
          name,
          imageArr,
          price,
          description,
        }
      );
      console.log(payload);
      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }

  static async delete(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const payload = await User.findOneAndDelete({ _id: req.params.id });

      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }
}
