import React from "react";
import { Link } from "react-router-dom";
import { Container, ButtonUbademy } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSectionElements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  headLine,
  lightTextDesc,
  description,
  buttonLabel,
  img,
  alt,
  start,
  to,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to={to} style={{ textDecoration: "none" }}>
                  <ButtonUbademy variant="contained">
                    {buttonLabel}
                  </ButtonUbademy>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
