import React from 'react';
import {
  Content,
  Wrapper,
  TextContainer,
  Title,
  Text,
  Img,
  MobileContent,
  MobileContainer,
} from './styles';
import { HeroProps } from '../../constants/types';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';

const HeroSection = ({ title, text, img, isNFT = false }: HeroProps) => {
  const { isMobile } = useCheckIsMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <MobileContent>
          <Title>{title}</Title>
          <MobileContainer >
            <Img src={img} isNFT={isNFT}/>
            <Text>{text}</Text>
          </MobileContainer>
        </MobileContent>
      ) : (
        <Content>
          <Img src={img} isNFT={isNFT}/>
          <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContainer>
        </Content>
      )}
    </Wrapper>
  );
};

export default HeroSection;
