import {doPostRequest} from "./backend";
import endpoints from "../constants/endpoints";

export const createComment = (parameters: Record<string, object>): void => {
    doPostRequest(endpoints.createComment, parameters)
};