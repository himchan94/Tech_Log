import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Title from "../../../components/Title";
import styled from "styled-components";

interface PostProps {
  params: {
    postId: string;
  };
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  }
}

const PostDetail = ({
  frontmatter: {title, date, excerpt},
  content,
}: PostProps) => {
  return (
    <>
    <Title title="POSTS" />
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <Date>{date}</Date>
      <ArticleContents>
        {content}
      </ArticleContents>
    </ArticleContainer>
    <style jsx>{`
      pre {
        margin-bottom: 16px;
      }
      img {
        width: 50%;
      }
    `}</style>
    </>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map(filename => ({
    params: {
      postId: filename.replace(".md","")
    }
  }))

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({params: {postId}}: PostProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", postId + ".md"),
    "utf-8"
  );
  const {data: frontmatter, content} = matter(markdownWithMeta);
 console.log(content)
  return {
    props: {
      frontmatter,
      postId,
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

color: #9DA5B0;
`;
const ArticleContents = styled.div`
  img {
    width: 50%;
  }
`;