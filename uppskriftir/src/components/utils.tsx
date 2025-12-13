export type Meals = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strIngredients: string;
  strMeasures: string;
};

export type Joke = {
  attachments: string;
  fallback: string;
  footer: string;
  text: string;

  response_type: string;
  username: string;
};
