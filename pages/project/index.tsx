import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Title from "../../components/Title";
import ProjectCard from "../../components/ProjectCard";

interface PostProps {
  projects: [{
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      cover_image: string;
    }
  }]
}

const ProjectPage = ({projects}: PostProps) => {
  return (
    <>
    <Title title="PROJECTS" />
    <div>{projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}</div>
    </>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("projects"));
  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    )
    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    }
  })
  
  return {
    props: {
      projects
    }
  }
}