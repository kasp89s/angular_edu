export class Product{
  constructor(
    public id?: number, // id? означает что параметр не обязателен
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number
  ) {
  }
}
