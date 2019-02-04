
let basket;
const myBasket = localStorage.getItem('basket');
if (myBasket === null) basket = [];
else basket = JSON.parse(myBasket);

const initState = {
    user: { first_name: "", last_name: "", email: "", isAdmin: false, password: "" },
    basket: basket,
    categories: [],
    products: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_CATEGORIES':
        return {...state, categories: action.data};

        case 'GET_PROD_BY_CAT_ID':
        return {...state, products: action.data};

        case 'ADD_TO_BASKET':
        let tmpBasket = state.basket.slice();
        const product = action.product;
        const quantityToAdd = action.quantityToAdd
        let matchFound = false;
        if (tmpBasket.length===0) {
            product.quantity += quantityToAdd
            tmpBasket.push(product);
            return {...state, basket:[...state.basket, ...tmpBasket]} 
        }
        tmpBasket.forEach(basketProduct => {
        if(basketProduct.id === product.id) { 
            basketProduct.quantity += quantityToAdd;
            matchFound = true;
            return;
        }
        })
        if(matchFound) {
            return {...state, basket: tmpBasket}
        }
        product.quantity += quantityToAdd
        return {...state, basket:[...state.basket, product]} 

        case 'CLEAR_BASKET':
        return {...state, basket: []}

        
        case 'DELETE_FROM_BASKET':
        return {...state, basket: state.basket.filter(el => el.id !== action.id)}
        // let tmpDelBasket = state.basket.slice();
     
        // let inx = -1;
        // tmpDelBasket.forEach(basketProductEl => {
        //     if (basketProductEl.id === action.id)
        //     inx = tmpDelBasket.indexOf(basketProductEl)
        //     return inx;
        // })
        // tmpDelBasket.splice(inx,1);
        // return {...state, basket: tmpDelBasket};

        case 'CHANGE_PRODUCT_QTY_IN_BASKET':
        let tmpChngBasket = state.basket.slice();
        tmpChngBasket.forEach(basketProductEl => {
            if (basketProductEl.id === action.id)
            basketProductEl.quantity += action.qty;
        })
        return {...state, basket: tmpChngBasket};


        case "USER_LOGGED_IN":
            return { ...state, user: action.user }



        default:
            return state;

    }
}

export default rootReducer;

