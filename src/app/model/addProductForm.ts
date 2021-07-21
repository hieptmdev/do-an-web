export class AddProductForm {
  id:any|undefined;
  name: any | undefined;
  code: any | undefined;
  priceSell: any | undefined; // giá bán
  sale: any | undefined; // giảm giá
  image: any | undefined;
  productTypeId: any | undefined; // loại sản phẩm
  productTypeName: string | undefined;
  brandId: any | undefined;
  brandName: String | undefined;
  startPrice: any | undefined;
  endPrice: any | undefined;
  status: any | undefined;
  mieuTa: any | undefined;
  fileImg!: File;
  colorId: any;
}
