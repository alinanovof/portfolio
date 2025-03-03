import React, { useState } from "react";
import { FadeIn } from "../../animations";
import Modal from "../Modal/Modal";
import {
  ProjectsSection,
  SectionHeader,
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TagsContainer,
  Tag,
  CompanyInfo,
  CompanyName,
  ProjectDate,
  DetailsButton,
  CompanyLink,
} from "./Projects.styled";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  companyName: string;
  companyUrl: string;
  date: string;
  tags: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openProjectDetails = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    // Optionally clear selectedProject after modal animation completes
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "Enterprise Visualization Systems",
      description:
        "Developed React components for data visualization dashboards using Grafana and 3D geospatial interfaces with CesiumJS.",
      detailedDescription:
        "At Mprest, I developed React components for enterprise applications, integrating Grafana dashboards for real-time monitoring and implementing interactive 3D mapping interfaces with CesiumJS. My work focused on crafting maintainable code, optimizing performance, and creating intuitive user experiences for complex data visualization needs.",
      image: "/images/grafana-min.png",
      companyName: "Mprest",
      companyUrl: "https://mprest.com",
      date: "2024-2025",
      tags: [
        "React",
        "TypeScript",
        "Grafana",
        "CesiumJS",
        "Data Visualization",
      ],
      category: "frontend",
    },
    {
      id: 2,
      title: "E-commerce Browser Extension",
      description:
        "Contributed to development and maintenance of user-friendly website and browser extension.",
      detailedDescription:
        "Played a key role in developing a cross-browser extension that helped users find the best deals while shopping online. The extension could detect product pages, compare prices across multiple retailers, and apply available coupons automatically. Also implemented robust error handling and performance monitoring to ensure reliability.",
      image: "/images/karma.jpeg",
      companyName: "Karma",
      companyUrl: "https://karmanow.com",
      date: "2022-2024",
      tags: ["React", "JavaScript", "Browser Extensions", "E-commerce"],
      category: "frontend",
    },
    {
      id: 3,
      title: "Transit Cashback Platform",
      description:
        "Developed a full-stack cashback platform for mass transit using React, Node.js and AWS services.",
      detailedDescription:
        "Built a complete cashback platform for mass transit applications at Enroute. Architected and developed the React frontend with responsive design for all devices, while also implementing the backend with Node.js and Express. Created RESTful microservices for user authentication, transaction processing, and reward calculations. Utilized AWS services including Lambda, S3, and DynamoDB for a scalable infrastructure.",
      image: "/images/enroute.png",
      companyName: "Enroute",
      companyUrl: "https://hopon.enroute.tech",
      date: "2021-2022",
      tags: ["React", "Redux", "Node.js", "Express", "AWS", "Full Stack"],
      category: "fullstack",
    },
    {
      id: 4,
      title: "Bootcamp Mentorship",
      description:
        "Mentored students in a full stack bootcamp, providing technical guidance and code reviews.",
      detailedDescription:
        "Worked as a mentor at IITC bootcamp, where I guided students through building their first full-stack applications. Provided technical assistance, conducted code reviews, and helped students troubleshoot issues. Shared best practices for React development and helped students prepare for technical interviews.",
      image: "/images/iitc.png",
      companyName: "IITC",
      companyUrl: "https://iitc.co.il",
      date: "2024",
      tags: ["Mentoring", "Education", "Code Reviews", "Technical Leadership"],
      category: "other",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionHeader>
          <h2>Professional Work</h2>
          <p>Selected projects from my professional experience</p>
        </SectionHeader>

        <FilterContainer>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </FilterButton>
          <FilterButton
            active={filter === "fullstack"}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </FilterButton>
          <FilterButton
            active={filter === "other"}
            onClick={() => setFilter("other")}
          >
            Other
          </FilterButton>
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <FadeIn key={project.id} delay={`${0.1 * project.id}s`}>
              <ProjectCard>
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <CompanyInfo>
                    <CompanyName
                      href={project.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.companyName}
                    </CompanyName>
                    <ProjectDate>{project.date}</ProjectDate>
                  </CompanyInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TagsContainer>
                    {project.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  <DetailsButton onClick={() => openProjectDetails(project)}>
                    View Details
                  </DetailsButton>
                </ProjectContent>
              </ProjectCard>
            </FadeIn>
          ))}
        </ProjectsGrid>

        <Modal isOpen={isModalOpen} onClose={closeProjectDetails}>
          {selectedProject && (
            <>
              <h3>{selectedProject.title}</h3>
              <h4>
                <CompanyLink
                  href={selectedProject.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  {selectedProject.companyName}
                </CompanyLink>{" "}
                • {selectedProject.date}
              </h4>
              <p>{selectedProject.detailedDescription}</p>
              <div>
                <h5>Technologies:</h5>
                <TagsContainer>
                  {selectedProject.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </div>
            </>
          )}
        </Modal>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
