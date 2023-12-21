import http from "../http-common";
import { DomainData } from "../types/Domain";

const getAllDomains = () => {
    return http.get<DomainData[]>("/domains");
};

const DomainService = {
    getAllDomains
};

export default DomainService;


