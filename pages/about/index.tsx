import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Background from "../../public/images/background/default.svg";
import GithubIcon from "../../public/images/logo/github.svg";
import WaveImage from "../../public/images/waves/about_wave.svg";

const AboutPage = () => {
  return (
    <AboutOuter>
      <div style={{ position: "relative", height: "300px" }}>
        <Background />
        {/* <Image
          alt='Mountains'
          src={Background}
          layout='fill'
          objectFit='cover'
        /> */}
        <ProfileImage />
      </div>
      <IntroSection>
        <Introduce>Hello World :)</Introduce>
        <Name>김윤지</Name>
        <IconWrapper>
          <GithubIcon />
          <GithubIcon />
          {/* <Image src={GithubIcon} width='20' height='20' alt='github' />
          <Image src={GithubIcon} width='20' height='20' alt='github' />
          <Image src={GithubIcon} width='20' height='20' alt='github' />
          <Image src={GithubIcon} width='20' height='20' alt='github' />
          <Image src={GithubIcon} width='20' height='20' alt='github' />
          <Image src={GithubIcon} width='20' height='20' alt='github' /> */}
        </IconWrapper>
      </IntroSection>
      <InfoSection>
        <WaveWrapper />
      </InfoSection>
    </AboutOuter>
  );
};

export default AboutPage;

const AboutOuter = styled.main`
  height: calc(100%-256px);
`;

const ProfileImage = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: url("https://media.istockphoto.com/photos/portrait-of-young-woman-with-curly-hair-in-the-city-picture-id1218228957?k=20&m=1218228957&s=612x612&w=0&h=1ExWthh3l9yXX6IiW_c8uX1KkSo2-AXlRqPXbElvh6k=");
  background-size: cover;
  background-repeat: no-repeat;
  top: 220px;
  right: 0;
  left: 0;
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
  width: 204px;
  margin-top: 16px;
`;

const InfoSection = styled.div``;

const WaveWrapper = styled.div``;
