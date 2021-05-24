import { Response, Request } from "express";
import { Product } from "../model";
import { getStorage, saveStorage } from "../common/function";

interface ReponseType {
  success: boolean;
  data: any;
}

export default class ProductServices {
  static async get(
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
      const payload: any = await Product.find({});
      
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
      const payload = await Product.findOne({ _id });

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
      const { name, imageArr, description, price } = req.body;

      const payload = await Product.create({
        name,
        imageArr,
        description,
        price,
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
      const payload = await Product.insertMany(productArr);
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

      const payload = await Product.findOneAndUpdate(
        { _id },
        {
          name,
          imageArr,
          price,
          description,
        }
      )
      console.log(payload)
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
      const payload = await Product.findOneAndDelete({ _id: req.params.id });

      return res.json({ success: true, data: payload });
    } catch (error) {
      return res.status(500);
    }
  }
}
