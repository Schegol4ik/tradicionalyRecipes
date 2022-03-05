export type IngredientsType = {
    ingredientName: string
    amount: string
}

export type StepsType = {
    photoStep: string
    step: string
    stepNumber: number
}
export type CookingTimeType = {
    h: string
    m: string
}

export type RecipeType = {
    id: number
    foodType: string
    name: string
    aboutTheRecipes: string
    slug: string
    photoRecipe: string
    bonAppetit: string
    cookingTime: CookingTimeType
    ingredients: Array<IngredientsType>
    steps: Array<StepsType>
}

export type CommentType = {
    id: number
    idPerson: number
    name: string
    email: string
    text: string
}

export type RatingType = {
    id: number
    numberOfRatings: number
}

export type CategoryType = {
    categories_name: string
    slug: string
    descriptionCategories: string
}

export type InitialStateRecipeType = {
    categories_menu: Array<CategoryType>
    recipe: Array<RecipeType>
    comments: Array<CommentType>
    ratings: Array<RatingType>
}


