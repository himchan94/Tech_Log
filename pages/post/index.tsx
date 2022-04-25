import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "../../components/PostCard";
import Title from "../../components/Title";

interface PostProps {
  posts: [
    {
      slug: string;
      frontmatter: {
        title: string;
        date: string;
        excerpt: string;
      };
    }
  ];
}

const PostPage = ({ posts }: PostProps) => {
  return (
    <>
      <Title title='POSTS' />
      <div>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostPage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
