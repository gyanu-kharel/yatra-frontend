import httpCommon from "../http-common";
import { LatestProjectsData, ProjectDetailData, ProjectsData, RegisterProjectData } from "../types/Projects";

const getProjects = () => {
    return httpCommon.get<ProjectsData[]>("/projects");
}

const createProject = (data: RegisterProjectData) => {
    console.log(data);
    return httpCommon.post<RegisterProjectData>('/projects', data);
}

const getLatestProjects = () => {
    return httpCommon.get<LatestProjectsData[]>("/projects/latest");
}

const getDetail = (id: string) => {
    return httpCommon.get<ProjectDetailData[]>(`/projects/${id}`);
}

const ProjectsService = {
    getProjects,
    createProject,
    getLatestProjects,
    getDetail
};

export default ProjectsService;