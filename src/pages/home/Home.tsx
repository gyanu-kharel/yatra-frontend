import { Flex, Heading, Stack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { LatestProjectsData } from "../../types/Projects";
import ProjectsService from "../../services/ProjectsService";

const Home = () => {
    const [latesProjects, setLatestProjects] = useState<LatestProjectsData[]>([]);
    const [popularProjects, setPopularProjects] = useState<LatestProjectsData[]>([]);

    useEffect(() => {
        ProjectsService.getLatestProjects()
            .then((response: any) => {
                setLatestProjects(response.data);
            });

        ProjectsService.getPopularProjects()
            .then((response: any) => {
                setPopularProjects(response.data);
            });
    }, [])

    return (
        <>
            <Stack mt={5}>
                <Heading size={"lg"}>Latest</Heading> <hr />
                <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                    {latesProjects.map((item, index) => {
                        return <ProjectCard {...item} key={index} />
                    })}
                </Flex>
            </Stack>
            <Stack mt={5}>
                <Heading size={"lg"}>Popular</Heading> <hr />
                <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                    {popularProjects.map((item, index) => {
                        return <ProjectCard {...item} key={index} />
                    })}
                </Flex>
            </Stack>
        </>
    );
};

export default Home;