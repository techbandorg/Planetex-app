import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { ReactComponent as BurgerTablet } from '../../assets/icons/burgerTablet.svg'
import { OutlineButton } from '../../theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 45px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 971px) {
    padding: 0 40px;
  }
`

export const Logo = styled(LogoIcon)`
  margin-bottom: 6px;
`

export const BurgerTabletIcon = styled(BurgerTablet)`
  display: none;
  cursor: pointer;
  margin-left: 25px;

  @media screen and (max-width: 880px) {
    display: block;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 971px) {
    gap: 20px;
  }

  @media screen and (max-width: 880px) {
    gap: 0;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 35px;
  
  @media screen and (max-width: 1005px) {
    gap: 20px;
  }

  @media screen and (max-width: 920px) {
    gap: 15px;
  }
  
  @media screen and (max-width: 880px) {
    display: none;
  }
`

export const RouterLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  color: #D4E5FF;
  
  &.active {
    color: #9E40B5;
  }
  
  &:hover,
  &:focus {
    color: #9E40B5;
  }
`

export const Link = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  color: #D4E5FF;

  &:hover {
    color: #9E40B5;
  }

  @media screen and (max-width: 920px) {
    font-size: 16px;
  }
`

export const ConnectButton = styled(OutlineButton)`
  padding: 13px 25px;

  @media screen and (max-width: 880px) {
    display: none;
  }
`
