import http from "../http-common";
import { IdeasFormDataType } from "../pages/menu/Ideas";

const generateIdeas = (data: IdeasFormDataType) => {
    return http.post<IdeasFormDataType>("/ideas", JSON.stringify(data));
};

const IdeasService = {
    generateIdeas
};

export default IdeasService;