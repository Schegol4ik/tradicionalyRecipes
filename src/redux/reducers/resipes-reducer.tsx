import {InitialStateRecipeType} from "../../types/Types";
import {photoRecipes} from "../../assets/photoRecipes";
import {ADD_COMMENT, ADD_RATING} from "../actions/recipes-action";
import {AnyAction} from "redux";

let initialState = {
    categories_menu: [
        {
            categories_name: 'Закуски',
            slug: '/appetizers',
            descriptionCategories: 'Закуска — небольшое по объёму преимущественно холодное блюдо первой подачи из различных продуктов, обычно с пикантным вкусом и особым привлекательным оформлением, чтобы возбудить аппетит перед основными блюдами. К повседневному столу обычно подают один-два вида закусок, для праздничных обедов характерно большее разнообразие. Праздничный ужин может целиком состоять из закусок. '
        },
        {
            categories_name: 'Салаты',
            slug: '/salads',
            descriptionCategories: 'Салат - это именно то блюдо, которое способно повседневный обед или ужин сделать праздничным и не похожим на тот, что был вчера. Овощные салаты, салаты с мясом, грибами, морепродуктами и фруктовые, теплые салаты и салаты-коктейли - рецептов так много, что все их не удастся попробовать, наверное, за целую жизнь!'
        },
        {
            categories_name: 'Супы',
            slug: '/soups',
            descriptionCategories: 'Суп – жидкое блюдо, первое блюдо. Многие разновидности супов получили самостоятельные наименования, некоторые сохранили в своем названии слово «суп». '
        },
        {
            categories_name: 'Вторые блюда',
            slug: '/secondCourses',
            descriptionCategories: 'Второе блюдо — основное блюдо, подаваемое во время приёма пищи, состоящего из нескольких блюд. Как правило, оно следует за антре. Главное блюдо обычно самое тяжёлое, горячее и самое сложное блюдо в меню. Основными ингредиентами являются мясо или рыба.'
        },
        {
            categories_name: 'Выпечка',
            slug: '/bakery',
            descriptionCategories: 'Выпечка – это хлебобулочные и кондитерские изделия, которые готовятся методом выпекания, и кроме того сам процесс. Наверное, н одно торжество не обходится без праздничного торта или пирога. Выпечка очень популярна, не смотря на то, что одновременно очень калорийна. В категорию выпечки включается огромный ассортимент продукции.'
        },
        {
            categories_name: 'Десерты',
            slug: '/desserts',
            descriptionCategories: 'Когда мы слышим слово «десерт», мы воображаем нечто очень аппетитное и сладкое. На самом деле, десерт – это более широкое понятие, происходящее от древне-французского desservir (убирать со стола). Десертом может быть все, что подается после основного блюда: сыр, фрукты, ягоды, орехи, соки. Правда, непонятно, считать ли десертом жевательную резинку. История десертов насчитывает тысячи лет. Традиционно, к десертам относятся торты, пироги, пирожные, печенье, конфеты, мороженое, пастила, варенье, шоколад, ликеры и множество сладостей восточных и европейских национальных кухонь.'
        },
        {
            categories_name: 'Напитки',
            slug: '/beverages',
            descriptionCategories: 'Напитки являются одним из наиболее важных элементов культуры питания. '
        },
        {
            categories_name: 'Соусы',
            slug: '/sauces',
            descriptionCategories: 'Соусы — это ароматические и вкусовые приправы, дополняющие блюдо. Они могут усиливать или ослаблять вкус продукта.'
        },
        {
            categories_name: 'Заготовки',
            slug: '/blanks',
            descriptionCategories: 'Заготовки – это основной источник питания или \'хорошее подспорье\' '
        }
    ],
    recipe: [
        {
            id: 1,
            foodType: 'Закуска',
            slug: 'appetizers',
            name: 'Бутерброд с печенью трески и красной икрой',
            aboutTheRecipes: 'Готовим самые вкусные и красивые праздничные бутерброды с красной икрой, печенью трески и свежим огурцом по очень простому и оригинальному рецепту',
            photoRecipe: photoRecipes.id_1.mainPhoto,
            cookingTime: {h: '0', m: '15'},
            bonAppetit: 'Вкусные бутерброды готовы, приятного аппетита',
            ingredients: [
                {
                    ingredientName: 'Батон или багет',
                    amount: '5-6 ломтиков',
                },
                {
                    ingredientName: 'Красная икра',
                    amount: '2 ст.л',
                },
                {
                    ingredientName: 'Печень трески',
                    amount: '150 г',
                },
                {
                    ingredientName: 'Огурцы свежие',
                    amount: '1 шт',
                },
                {
                    ingredientName: 'Соль, перец',
                    amount: 'по вкусу',
                },
                {
                    ingredientName: 'Зелень',
                    amount: 'для подачи',
                },
            ],
            steps: [
                {
                    photoStep: photoRecipes.id_1.step_1,
                    step: ' Выбрать вкусный белый батон или багет. Нарезать багет кусочками, не сильно толстыми.',
                    stepNumber: 1
                },
                {
                    photoStep: photoRecipes.id_1.step_2,
                    step: 'Печень трески открыть, слить масло и переложить ее в тарелку. Размять печень вилкой.',
                    stepNumber: 2
                },
                {
                    photoStep: photoRecipes.id_1.step_3,
                    step: 'Ломтики багета переложить в горячую сковороду, затем обжарить с обеих сторон по несколько секунд. По желанию можно подсушить багет в духовке.',
                    stepNumber: 3
                },
                {
                    photoStep: photoRecipes.id_1.step_4,
                    step: 'Смазать багет размятой печенью трески.',
                    stepNumber: 4
                },
                {
                    photoStep: photoRecipes.id_1.step_5,
                    step: 'Поверх трески уложить по несколько пластин свежего огурца. Предварительно огурец вымыть и просушить.',
                    stepNumber: 5
                },
                {
                    photoStep: photoRecipes.id_1.step_6,
                    step: 'Разложить на каждый бутерброд красную икру. Украсить приготовленные бутерброды зеленью и подавать к столу – очень вкусно, проверьте, не пожалеете!',
                    stepNumber: 6
                },
            ],
        },
        {
            id: 2,
            foodType: 'Закуска',
            name: 'Закуска из лаваша',
            slug: 'appetizers',
            aboutTheRecipes: 'Вообще лаваш - это шикарная основа, в которую можно завернуть все, что угодно, и получить буквально за несколько минут рулет из лаваша, который может стать вкусной закуской. Начинка - это уже на сколько хватит фантазии. Я предлагаю самый простой вариант - с крабовыми палочками и сыром. :)',
            photoRecipe: photoRecipes.id_2.mainPhoto,
            cookingTime: {h: '0', m: '50'},
            bonAppetit: 'Вместо крабовых палочек можно использовать копчености или колбасу, добавить свежий или соленый огурец. Приятного аппетита!',
            ingredients: [
                {
                    ingredientName: 'Лаваш тонкий',
                    amount: '2 шт.',
                },
                {
                    ingredientName: 'Яйца',
                    amount: '3 шт.',
                },
                {
                    ingredientName: 'Крабовые палочки',
                    amount: '200 г',
                },
                {
                    ingredientName: 'Сыр российский',
                    amount: '100 г.',
                },
                {
                    ingredientName: 'Сыр плавленый',
                    amount: '200 г.',
                },
                {
                    ingredientName: 'Чеснок',
                    amount: '3-4 зубчика',
                },
                {
                    ingredientName: 'Зелень (петрушка, укроп, зеленый лук)',
                    amount: 'по вкусу',
                },
                {
                    ingredientName: 'Перец черный молотый',
                    amount: 'по вкусу',
                },
                {
                    ingredientName: 'Майонез',
                    amount: '',
                },
            ],
            steps: [
                {
                    photoStep: photoRecipes.id_2.step_1,
                    step: 'Яйца отварить. Сыр и яйца натереть на крупной терке. Чеснок натереть на мелкой терке. Зелень и крабовые палочки мелко порубить. Все перемешать и заправить майонезом.',
                    stepNumber: 1
                },
                {
                    photoStep: photoRecipes.id_2.step_2,
                    step: 'На столе разложить один из пластов лаваша. Тщательно промазать всю его поверхность половиной начинки.',
                    stepNumber: 2
                },
                {
                    photoStep: photoRecipes.id_2.step_3,
                    step: 'Далее укладываете второй лист лаваша.',
                    stepNumber: 3
                },
                {
                    photoStep: photoRecipes.id_2.step_4,
                    step: 'И промазываете второй половиной начинки.',
                    stepNumber: 4
                },
                {
                    photoStep: photoRecipes.id_2.step_5,
                    step: 'Теперь лаваши аккуратно сворачиваете в рулет.',
                    stepNumber: 5
                },
                {
                    photoStep: photoRecipes.id_2.step_6,
                    step: 'Можно обмотать его пищевой пленкой или фольгой.',
                    stepNumber: 6
                },
                {
                    photoStep: photoRecipes.id_2.step_7,
                    step: 'Убрать закуску в холодильник на 2-3 часа. Перед подачей на стол нарезать на кусочки толщиной 3-4 см.',
                    stepNumber: 7
                },
            ],
        },
    ],
    comments: [
        {
            id: 1,
            idPerson: 1,
            name: 'Виктор',
            email: 'vik@m.ru',
            text: 'Круто вкусно супер-пупер!'
        },
        {
            id: 1,
            idPerson: 2,
            name: 'Вова',
            email: 'vov@m.ru',
            text: 'Обворожительно!'
        }
    ],
    ratings: [
        {
            id: 1,
            numberOfRatings: 5
        },
        {
            id:1,
            numberOfRatings: 5
        },
       /* {
            id: 2,
            numberOfRatings: 0
        }*/
    ]
}

export const recipesReducer = (state: InitialStateRecipeType = initialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_COMMENT: {
            return {...state, comments: [...state.comments, action.payload]}
        }
        case ADD_RATING: {
            return {...state, ratings: [...state.ratings, action.payload]}
        }
        default:
            return state
    }
}