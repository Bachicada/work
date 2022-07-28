export type CurrencyType = {
  label: string;
  symbol: string;
};

export type ProductPricesType = {
  amount: string;
  currency: CurrencyType;
};

export type ItemCardProps = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [string];
  brand: string;
  prices: [ProductPricesType];
};
export type AttributesItemsType = {
  //[key: string]: string;
  value: string;
  displayValue: string;
};

export type ProductAttributesType = {
  id: string;
  name: string;
  type: string;
  items: [AttributesItemsType];
};

export type ProductInfoType = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [string];
  description: string;
  attributes: [ProductAttributesType];
  prices: [ProductPricesType];
  brand: string;
};
export type ProductDataType = { product: ProductInfoType };
