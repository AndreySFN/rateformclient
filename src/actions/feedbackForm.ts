import {doPostRequest} from "./backend";
import endpoints from "../constants/endpoints";

export const createComment = (name: string, employerName: string, comment: string, rate: number): void => {
    doPostRequest(endpoints.createComment, {name, employerName, comment, rate})
};