import http from "../http-common";
import { IdeasFormDataType } from "../pages/menu/Ideas";
import { IdeasResultData } from "../types/Ideas";

const generateIdeas = (data: IdeasFormDataType) => {
    return http.post<IdeasResultData>("/ideas", JSON.stringify(data));
};

const IdeasService = {
    generateIdeas
};

export default IdeasService;