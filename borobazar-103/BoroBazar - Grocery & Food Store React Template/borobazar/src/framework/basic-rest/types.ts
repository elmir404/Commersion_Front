import { QueryKey } from 'react-query';

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  id: number | string;
  baseCategoryId?: number | string;
  inPower:boolean;
  note:string;
  // slug: string;
  // details?: string;
  // image?: Attachment;
  // icon?: string;
  subCategories?: [Category];
  // products?: Product[];
  // productCount?: number;
  [key: string]: unknown;

};
export type Collection = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  [key: string]: unknown;
};
export type Dietary = {
  id: number | string;
  name: string;
  slug: string;
  [key: string]: unknown;
};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};
export type Product = {
  id: number | string;
  name: string;
  
  
  model:string;
 
  producer: string;
  unitPrice: number;
  
  inPower:boolean;
  categoryId:number;
  note:string;
  email:string;
  phone:string;
  city:string;
 
  showDate:Date;
  
  [key: string]: unknown;
  // sale_price?: number;
  // min_price?: number;
  // max_price?: number;
  // image: Attachment;
  // sku?: string;
  // gallery?: Attachment[];
  // category?: Category;
  // tag?: Tag[];
  // meta?: any[];
  // brand?: Brand;
  // description?: string;
  // variations?: object;
  
};
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};

export type ShopsQueryOptionsType = {
  text?: string;
  shop?: Shop;
  status?: string;
  limit?: number;
};

export type Shop = {
  id: string | number;
  owner_id: string | number;
  owner_name: string;
  address: string;
  phone: string;
  website: string;
  ratings: string;
  name: string;
  slug: string;
  description: string;
  cover_image: Attachment;
  logo: Attachment;
  socialShare: any;
  created_at: string;
  updated_at: string;
};
export type Search = {
 name?:string;
 note?:string;
 barcode?:string;
 markTpeId?:number;
 model?:string;
 measureTypeId?:number;
 producer?:string;
 minUnitPrice?:number;
 maxUnitPrice?:number;
 showStatusId?:number;
 inPower?:boolean;
 categoryId?:number;
 categoryName?:string;
 categoryInPower?:boolean;
 categoryNote?:string;
 baseCategoryId?:number;
 minShowDate?:Date;
 maxShowDate?:Date;

};