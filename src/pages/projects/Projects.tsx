import React, { useEffect, useState } from "react";
import { ProjectsData } from "../../types/Projects";
import ProjectsService from "../../services/ProjectsService";
import RegisterProject from "./RegisterProject";
import { DomainData } from "../../types/Ideas";
import DomainService from "../../services/DomainService";
import { Button, Flex, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import DeleteProject from "./DeleteProject";


const colors: string[] = ["blue", "red", "green", "teal", "purple"];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsData[]>();
  const [domains, setDomains] = useState<DomainData[]>();
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const [deleteProject, setDeleteProject] = useState<ProjectsData>();

  useEffect(() => {
    ProjectsService.getProjectsForUsers()
      .then((response: any) => {
        setProjects(response.data);
      });

    DomainService.getAllDomains()
      .then((response: any) => {
        setDomains(response.data);
      });
  }, []);

  const refreshList = () => {
    ProjectsService.getProjects()
      .then((response: any) => {
        setProjects(response.data);
      });

    onRegisterClose();
  };

  const openDeleteProject = (data: ProjectsData) => {
    setDeleteProject(data);
    onDeleteOpen();
  };


  return (
    <div>
      <Button className="project-register-btn" colorScheme="teal" onClick={onRegisterOpen}>Register</Button>
      <br />
      <TableContainer mt={5}>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Duration</Th>
              <Th>Team Size</Th>
              <Th>Skill Level</Th>
              <Th>Complexity</Th>
              <Th>Domain</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects?.map((item, index) => {
              return (
                <>
                  <Tr key={index}>
                    <Td>{item.title}</Td>
                    <Td>{item.duration} month(s)</Td>
                    <Td>{item.teamSize}</Td>
                    <Td>{item.skillLevel}</Td>
                    <Td>{item.complexity}</Td>
                    <Td>
                      <Tag size="md" key={index} variant='outline' colorScheme={colors[Math.floor(Math.random() * colors.length)]}>
                        {item.domain}
                      </Tag>
                    </Td>
                    <Td>
                      <Flex justifyContent={"space-between"}>
                        <Link to={`/projects/${item.id}`}>
                          <ViewIcon color={"teal"} />
                        </Link>
                        <EditIcon color={"blue"} />
                        <DeleteIcon color={"red.400"} onClick={() => openDeleteProject(item)} />
                      </Flex>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <RegisterProject isOpen={isRegisterOpen} onClose={refreshList} domains={domains} />
      {deleteProject &&
        <DeleteProject isOpen={isDeleteOpen} id={deleteProject.id} title={deleteProject.title} onClose={onDeleteClose} />
      }
    </div>
  );
};

export default Projects;
