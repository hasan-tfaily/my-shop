export interface ModelType<ID = string> {
  id: string;
}

export class Model<ID = string> {
  private _id?: ID;

  constructor(id?: ID) {
    this._id = id;
  }

  public get id(): ID | undefined {
    return this._id;
  }

  public toBackendJson(): any {
    return { id: this.id };
  }
}
