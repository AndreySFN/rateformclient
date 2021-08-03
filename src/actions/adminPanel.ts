import {Dispatch} from "react";
import {CommentsDto} from "../types/dto";
import {doGetRequest} from "./backend";
import endpoints from "../constants/endpoints";


export const getComments = (setter: Dispatch<Array<CommentsDto>>): void => {
    doGetRequest(endpoints.getComments)
        .then(res => res.json()).then(comments => setter(comments))
};