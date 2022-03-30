

export const useRandomRecipe = (number: number) => {
        let randomNumber: number = Math.floor(Math.random() * number)

        return randomNumber
}