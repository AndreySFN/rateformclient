import {EMPTY_STRING} from "../constants/common";

export const isEmpty = (actual: object | Array<any> | string): boolean => {
    return actual === {} || actual === [] || actual === null || actual === undefined || actual === EMPTY_STRING;
}

export const isEmptyArray = (actual: Array<any>) => {
    return isEmpty(actual) || actual.length === 0;
}