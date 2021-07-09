export class AddProductForm {
  name: string | undefined;
  code: any | undefined;
  priceSell: any | undefined; // giá bán
  sale: any | undefined; // giảm giá
  image: any | undefined;
  productTypeId: any | undefined; // loại sản phẩm
  productTypeName: string | undefined; // ở đây đặt tên giống vs tên ở bên ent + tên biến giá trị của đối tượng này: productType + Name, thì modelmapper nó phân truy cập sâu vào bên trong đối tượng lấy giá trị tướng ứng
  brandId: any | undefined;
  brandName: String | undefined;
  startPrice: any | undefined;
  endPrice: any | undefined;
  status: any | undefined;
  mieuTa: string | undefined;
  fileImg!: File;
  colorId: any;
}
