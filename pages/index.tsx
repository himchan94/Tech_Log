import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";

const Title = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Home: NextPage = () => {
  return (
    <HomeOuter>
      <Title>Home</Title>
    </HomeOuter>
  );
};

export default Home;

const HomeOuter = styled.main`
  height: calc(100%-256px);
`;

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
