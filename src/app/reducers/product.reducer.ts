import { Action } from '@ngrx/store'
import { Product } from './../models/product.model'
import * as ProductActions from '../actions/product.actions'

// Section 1
const initialState: Product[] = [{
    name: 'Initial Product',
    url: 'http://google.com',
    price: 2000
}];

// Section 2
export function reducer(state: Product[] = initialState, action: ProductActions.Actions) {

    // Section 3
    switch(action.type) {
        case ProductActions.ADD_PRODUCT:
            return [...state, action.payload];
        case ProductActions.GET_ALL_PRODUCTS:
            return {
                ...state
            };
        case ProductActions.GET_ALL_PRODUCTS_SUCCESS: {
            console.log('payload', action.payload)
            return {
                ...state,
                products: action.payload
            }
        }
        case ProductActions.GET_ALL_PRODUCTS_FAILED: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}