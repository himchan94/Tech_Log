import styled from "styled-components";

export default function ProjectCard() {
  return (
    <ProjectCardContainer>
      <ProjectImg>

      </ProjectImg>
      <div>
        <ProjectTitle>올라에듀</ProjectTitle>
      </div>
    </ProjectCardContainer>
  );
}

const ProjectCardContainer = styled.section`
  box-sizing: border-box;
  width: 343px;
  height: 232px;
  border-radius: 4px;
  background-color: #FFF;
  box-shadow: 8px 8px 6px -2px rgba(172, 181, 203, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.06);
  padding: 5px 7px;
  margin: 8px 8px 16px;
`;
const ProjectImg = styled.div`
  width: 329px;
  height: 147px;
  background-color: whitesmoke;
`;
const ProjectTitle = styled.h2`
  font-family: SpoqaHanSansNeo, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
`;