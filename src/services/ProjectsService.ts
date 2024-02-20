import httpAuth from "../http-auth";
import { LatestProjectsData, ProjectDetailData, ProjectsData, RegisterProjectData } from "../types/Projects";

const getProjects = () => {
    return httpAuth.get<ProjectsData[]>("/projects");
}

const createProject = (data: RegisterProjectData) => {
    console.log(data);
    return httpAuth.post<RegisterProjectData>('/projects', data);
}

const getLatestProjects = () => {
    return httpAuth.get<LatestProjectsData[]>("/projects/latest");
}

const getPopularProjects = () => {
    return httpAuth.get<LatestProjectsData[]>("/projects/popular")
}

const getDetail = (id: string) => {
    return httpAuth.get<ProjectDetailData[]>(`/projects/${id}`);
}

const deleteProject = (id: string) => {
    return httpAuth.delete<any>(`/projects/${id}`);
}

const recommend = (id: string) => {
    return httpAuth.get<any>(`/scripts/recommend/${id}`);
}

const favorite = (id: string) => {
    return httpAuth.post<null>(`/projects/favorite/${id}`);
}

const ProjectsService = {
    getProjects,
    createProject,
    getLatestProjects,
    getPopularProjects,
    getDetail,
    deleteProject,
    recommend,
    favorite
};

export default ProjectsService;