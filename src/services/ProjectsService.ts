import httpCommon from "../http-common";
import { ProjectsData } from "../types/Projects";

const getProjects = () => {
    return httpCommon.get<ProjectsData[]>("/projects");
}

const ProjectsService = {
    getProjects
};

export default ProjectsService;