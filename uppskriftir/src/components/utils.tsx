export type Meals = {
  idMeal: number;
  strMeal: string;
  strInstructions: string;

  strCategory: string;
  strArea: string;
  strIngredients: string;
  strMeasures: string;
  strImageSource: string;
};

export type Joke = {
  attachments: string;
  fallback: string;
  footer: string;
  text: string;

  response_type: string;
  username: string;
};




/*
API:
"featured" úr ákveðnum staf (sýnir margar uppskriftir)
o https://www.themealdb.com/api/json/v1/1/search.php?f=a
o Dæmi un staf a
• Sækja lista eftir staf (gefur 10-30 niðurstöður):
o https://www.themealdb.com/api/json/v1/1/search.php?f=a
• Sækja alla flokka:
o https://www.themealdb.com/api/json/v1/1/categories.php
• Sækja eftir flokki (category):
o https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
• Sækja eftir upprunalandi (area):
o https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
• Sækja upplýsingar um uppskrift eftir ID:
o https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
• Svipaðar uppskriftir
o https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
o Sækja uppskirfti úr sama flokki til að birta sem svipaðar uppskriftir
• Leita eftir nafni eða hráefni:
o https://www.themealdb.com/api/json/v1/1/search.php?s={query}
        */

