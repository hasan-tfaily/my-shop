export interface ProductsType {
  brand?: string;
  category?: string;
  description?: string;
  discountPercentage?: number;
  id?: number;
  images?: any[];
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title?: string;
}

export class Product implements ProductsType {
  private _brand?: string;
  private _category?: string;
  private _description?: string;
  private _discountPercentage?: number;
  private _id?: number;
  private _images?: any[];
  private _price?: number;
  private _rating?: number;
  private _stock?: number;
  private _thumbnail?: string;
  private _title?: string;

  constructor(data: ProductsType) {
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
}
