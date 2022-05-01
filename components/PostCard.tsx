import styled from "styled-components";
import Link from "next/link";

interface PostProps {
  post: {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  }
  };
  
}

export default function PostCard({post}: PostProps) {
  return (
    <Link href={`/post/${post.slug}`}>
    <PostCardContainer>
      <PostCardTitle>{post.frontmatter.title}</PostCardTitle>
      <PostCardContent>
        {post.frontmatter.excerpt}
      </PostCardContent>
    </PostCardContainer>
    </Link>
  );
}

const PostCardContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 141px;
  padding: 24px 16px;
  background-color: #FFF;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
`;
const PostCardTitle = styled.h2`
  margin: 10px 0 8px;

  font-family: SpoqaHanSansNeo, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
`;
const PostCardContent = styled.span`
  display: block;

  font-family: SpoqaHanSansNeo, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #2F3B51;
`;