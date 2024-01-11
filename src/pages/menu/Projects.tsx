import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { ProjectsData } from "../../types/Projects";
import ProjectsService from "../../services/ProjectsService";



const columns: ColumnsType<ProjectsData> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "domain",
    render: (_, { domain }) => (
      <>
        <Tag color={"blue"} key={domain}>
          {domain.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Team Size",
    key: "teamSize",
    dataIndex: "teamSize",
  },
  {
    title: "Skill Level",
    key: "skillLevel",
    dataIndex: "skillLevel",
  },
  {
    title: "Complexity",
    key: "complexity",
    dataIndex: "complexity",
  },
];

const paginationConfig: TablePaginationConfig = {
  pageSize: 2,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsData[]>();

  useEffect(() => {
    ProjectsService.getProjects()
    .then((response: any) => {
      setProjects(response.data);
    })
  })
  return (
    <Table pagination={paginationConfig} columns={columns} dataSource={projects} />
  );
};

export default Projects;
