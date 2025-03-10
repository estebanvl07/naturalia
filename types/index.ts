export type ProductType = {
  id: number;
  name: string;
  price: {
    unity: number;
    two_unity: number;
    three_unity: number;
  };
  images: string[];
  rate: number;
  category: string;
  reviews: number;
  isNew: boolean;
  description: string;
  discount: number;
  detail: {
    ingredients: string;
    content: string;
    presentation: string;
  };
  use_mode: string[];
  cautions: string[];
  questions: Question[];
};

type Question = {
  quest: string;
  response: string;
};
