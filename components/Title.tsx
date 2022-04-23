import styled from "styled-components";
import Image from "next/image";
import HeaderImg from "../public/images/icon/headerImg.svg";

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <PostMain>
      <PostImg>
      <Image src={HeaderImg} width={400} alt="" />
      </PostImg>
      <PostH1>{title}</PostH1>
    </PostMain>
  );
}

export default Title;

const PostMain = styled.div`
  position: relative;
  padding-top: 56px;
`;
const PostImg = styled.div`
  width: 100%;
  margin: 24px 0;
`;
const PostH1 = styled.h1`
  position: absolute;
  top: 88px;
  left: 16px;

  font-family: MonumentExtended, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
`;