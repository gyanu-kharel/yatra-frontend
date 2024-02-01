import React, { useEffect, useState } from "react";
import { ProjectsData } from "../../types/Projects";
import ProjectsService from "../../services/ProjectsService";
import RegisterProject from "./RegisterProject";
import { DomainData } from "../../types/Ideas";
import DomainService from "../../services/DomainService";
import { Button, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";


const colors: string[] = ["blue", "red", "green", "teal", "purple"];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsData[]>();
  const [domains, setDomains] = useState<DomainData[]>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    ProjectsService.getProjects()
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

    onClose();
  }


  return (
    <div>
      <Button className="project-register-btn" colorScheme="teal" onClick={onOpen}>Register</Button>
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
            </Tr>
          </Thead>
          <Tbody>
            {projects?.map((item, index) => {
              return (
                <Tr key={index} style={{ cursor: "pointer" }}>
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
                </Tr>
              );
            })};
          </Tbody>
        </Table>
      </TableContainer>
      <RegisterProject isOpen={isOpen} onClose={refreshList} domains={domains} />
    </div>
  );
};

export default Projects;
