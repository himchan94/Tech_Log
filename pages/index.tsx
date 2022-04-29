import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import Title from "../components/Title";

const Home: NextPage = () => {
  return (
    <Title title="HOME" />
  );
};


export default Home;

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join("posts"));
//   const posts = files.map((filename) => {
//     const slug = filename.replace(".md", "");
//     const markdownWithMeta = fs.readFileSync(
//       path.join("posts", filename),
//       "utf-8"
//     )
//     const {data: frontmatter} = matter(markdownWithMeta);

//     return {
//       slug,
//       frontmatter,
//     }
//   })
//   console.log(posts);
//   return {
//     props: {
//       posts
//     }
//   }
// }