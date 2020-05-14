// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from './../models/product.model';

// Section 2
export const GET_ALL_PRODUCTS  = '[Product] GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS  = '[Product] GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILED  = '[Product] GET_ALL_PRODUCTS_FAILED';


export const ADD_PRODUCT       = '[Product] ADD_PRODUCT';
export const REMOVE_PRODUCT    = '[Product] REMOVE_PRODUCT';

// Section 3
export class GetAllProducts implements Action {
    readonly type = GET_ALL_PRODUCTS;
}

// Section 3
export class GetAllProductsSuccess implements Action {
    readonly type = GET_ALL_PRODUCTS_SUCCESS;

    constructor(public payload: Product[]) {}
}

// Section 3
export class GetAllProductsFail implements Action {
    readonly type = GET_ALL_PRODUCTS_FAILED;

    constructor(public error: string) {}
}

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;

    constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
    readonly type = REMOVE_PRODUCT;

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddProduct | RemoveProduct | GetAllProducts | GetAllProductsSuccess| GetAllProductsFail;