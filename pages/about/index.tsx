import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Background from "../../public/images/background/default.svg";
import GithubIcon from "../../public/images/logo/github.svg";
import WaveImage from "../../public/images/waves/about_wave.svg";
import Tag from "../../components/tag/Tag";

const AboutPage = () => {
  return (
    <AboutOuter>
      <BackgroundImage>{/* <ProfileImage /> */}</BackgroundImage>
      <IntroSection>
        <Introduce>Hello World :)</Introduce>
        <Name>김윤지</Name>
        <IconWrapper>
          <Image src={GithubIcon} width="20" height="20" alt="github" />
          <Image src={GithubIcon} width="20" height="20" alt="github" />
          <Image src={GithubIcon} width="20" height="20" alt="github" />
          <Image src={GithubIcon} width="20" height="20" alt="github" />
          <Image src={GithubIcon} width="20" height="20" alt="github" />
          <Image src={GithubIcon} width="20" height="20" alt="github" />
        </IconWrapper>
      </IntroSection>
      <InfoWrapper>
        <SubTitle>Hello World</SubTitle>
        <Typhography>
          프론트엔드 개발자를 꿈꾸는 김윤지입니다. <br />
          개방적이고, 즐거운 경험을 만들어가길 원합니다
        </Typhography>
      </InfoWrapper>
      <InfoWrapper>
        <SubTitle>Skills</SubTitle>
        <Tag tagName="#javascript" />
      </InfoWrapper>
    </AboutOuter>
  );
};

export default AboutPage;

const AboutOuter = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100%-256px);
`;

const BackgroundImage = styled.div`
  position: relative;
  height: 300px;
  background-image: url("images/background/default.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProfileImage = styled.div`
  position: absolute;
  top: 220px;
  right: 0;
  left: 0;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: url("https://media.istockphoto.com/photos/portrait-of-young-woman-with-curly-hair-in-the-city-picture-id1218228957?k=20&m=1218228957&s=612x612&w=0&h=1ExWthh3l9yXX6IiW_c8uX1KkSo2-AXlRqPXbElvh6k=");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
`;

const Introduce = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;

const Name = styled.h1`
  margin-top: 5px;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 204px;
  margin-top: 16px;
`;

const InfoWrapper = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;

const WaveContainer = styled.div`
  height: 35px;
`;

const Wave = styled.img.attrs({
  src: "images/waves/about_wave.svg",
})`
  width: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div``;

const SubTitle = styled.h2`
  font-family: MonumentExtended;
  font-size: 16px;
  font-weight: 900;
  line-height: 20px;
`;

const Typhography = styled.p`
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
`;
