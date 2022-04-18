import styled from "styled-components";

export default function PostCard() {
  return (
    <PostCardContainer>
      <PostCardTitle>자바스크립트 입문기: 오픈그래프 설정</PostCardTitle>
      <PostCardContent>
        JS를 시작하고 오픈그래프에 대해 처음 알았다. 플랫폼을 쓸 때는 이미지 
        삽입만 하면 됐었는데 직접 이미지 등을 설정해 보닌 아 이렇게...
      </PostCardContent>
    </PostCardContainer>
  );
}

const PostCardContainer = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 141px;
  padding: 24px 16px;
  background-color: whitesmoke;
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