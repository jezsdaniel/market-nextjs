import { StaticImageData } from "next/image";

export interface IProductMock {
  isNew: boolean;
  image: string | StaticImageData;
  price: number;
  discountPrice?: number;
}