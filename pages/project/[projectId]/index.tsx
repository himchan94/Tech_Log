import React from "react";
import Img from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "styled-components";
import Title from "../../../components/Title";

interface ProjectProps {
  params: {
    projectId: string;
  }
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    cover_image: string;
  }
}

const ProjectDetails = ({
  frontmatter: {title, date, cover_image},
  content,
}: ProjectProps) => {
  return (
    <>
    <Title title="PROJECTS" />
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <Date>{date}</Date>
      <ArticleContents>
        {content}
      </ArticleContents>
    </ArticleContainer>
    </>
  );
};

export default ProjectDetails;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map(filename => ({
    params: {
      projectId: filename.replace(".md","")
    }
  }))
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: {projectId}}: ProjectProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", projectId + ".md"),
    "utf-8"
  );
  const {data: frontmatter, content} = matter(markdownWithMeta);
 console.log(content)
  return {
    props: {
      frontmatter,
      projectId,
      content,
    }
  }
}

const ArticleContainer = styled.article`
  margin: 0 16px;
`;
const ArticleTitle = styled.h2`
font-family: SpoqaHanSansNeo, sans-serif;
font-weight: 700;
font-size: 24px;
line-height: 30px;
display: flex;
align-items: flex-end;
color: #041516;
`;
const Date = styled.span`
font-family: SpoqaHanSansNeo, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

display: flex;
align-items: flex-end;
margin-bottom: 24px;

color: #9DA5B0;
`;
const ArticleContents = styled.div`
  line-height: 26px;
  img {
    width: 50%;
  }
`;