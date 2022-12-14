import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 0 55px;
  // background-color: skyblue;

  @media screen and (max-width: 880px) {
    padding: 95px 0 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 113px 0 47px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 32px;

  @media screen and (max-width: 576px) {
    height: 22px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  margin-right: 16px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;

export const SocialImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    width: 22px;
    height: 22px;
  }
`;
