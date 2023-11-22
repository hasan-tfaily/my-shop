import { Product, ProductsType } from "./products";

export interface CartProductsType extends ProductsType {
  count?: number;
}

export class CartProduct implements CartProductsType {
  private _count?: number;
  protected _brand?: string;
  protected _category?: string;
  protected _description?: string;
  protected _discountPercentage?: number;
  protected _id?: number;
  protected _images?: any[];
  protected _price?: number;
  protected _rating?: number;
  protected _stock?: number;
  protected _thumbnail?: string;
  protected _title?: string;

  constructor(data: CartProductsType) {
    this._id = data.id;
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._discountPercentage = data.discountPercentage;
    this._rating = data.rating;
    this._stock = data.stock;
    this._brand = data.brand;
    this._category = data.category;
    this._thumbnail = data.thumbnail;
    this._images = data.images;
    this._count = data?.count;
  }

  get brand(): string | undefined {
    return this._brand;
  }

  get category(): string | undefined {
    return this._category;
  }

  get description(): string | undefined {
    return this._description;
  }

  get discountPercentage(): number | undefined {
    return this._discountPercentage;
  }

  get id(): number | undefined {
    return this._id;
  }

  get images(): any[] | undefined {
    return this._images;
  }

  get price(): number | undefined {
    return this._price;
  }

  get rating(): number | undefined {
    return this._rating;
  }

  get stock(): number | undefined {
    return this._stock;
  }

  get thumbnail(): string | undefined {
    return this._thumbnail;
  }

  get title(): string | undefined {
    return this._title;
  }
  get count() {
    return this._count;
  }
}
