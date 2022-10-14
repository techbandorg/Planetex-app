import styled from 'styled-components';
import { SolidButton } from '../../../theme';
import arrow from '../../../assets/icons/selector.svg'


export const Wrapper = styled.div`
  clip-path: polygon(8% 0,100% 0,100% 100%,0 100%,0 12%);
  border: 1px solid #372458;
  
  //position: relative;
  //color: white;
  //background-repeat: no-repeat;
  //background-image: linear-gradient(white, white), linear-gradient(white, white), linear-gradient(white, white), linear-gradient(white, white), linear-gradient(to bottom left, transparent calc(50% - 1px), white calc(50% - 1px), white calc(50% + 1px), transparent calc(50% + 1px)), linear-gradient(transparent, transparent), linear-gradient(transparent, transparent);
  //background-size: 2px 100%, 2px 100%, 100% 2px, 100% 2px, 25px 25px, 100% 100%, 100% 100%;
  //background-position: 0% 0%, 100% 25px, -25px 0%, 0px 100%, 100% 0%, -25px 0%, 100% 25px;
  //
  //&:after {
  //  content: "";
  //  position: absolute;
  //  left: 0;
  //  bottom: 0;
  //  right: 0;
  //  top: 0;
  //  z-index: -1;
  //  opacity: 0.5;
  //  background-repeat: no-repeat;
  //  background-image: linear-gradient(white, white), linear-gradient(white, white), linear-gradient(white, white), linear-gradient(white, white), linear-gradient(to bottom left, transparent calc(50% - 1px), white calc(50% - 1px), white calc(50% + 1px), black calc(50% + 1px)), linear-gradient(black, black), linear-gradient(black, black);
  //  background-size: 2px 100%, 2px 100%, 100% 2px, 100% 2px, 25px 25px, 100% 100%, 100% 100%;
  //  background-position: 0% 0%, 100% 25px, -25px 0%, 0px 100%, 100% 0%, -25px 0%, 100% 25px;
  //}
`

export const Content = styled.div`
  padding: 75px 120px 80px 120px;
  background: linear-gradient(98.66deg, rgba(31, 53, 255, 0.29) 2.6%, rgba(31, 53, 255, 0) 26.21%, rgba(31, 53, 255, 0.0116456) 73.39%, rgba(31, 53, 255, 0.24) 100%);
  backdrop-filter: blur(3.5px);

  @media screen and (max-width: 880px) {
    padding: 45px 45px 55px 95px;
  }
  
  @media screen and (max-width: 768px) {
    padding: 45px 55px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 23px 40px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin-bottom: 35px;
  
  @media screen and (max-width: 880px) {
    gap: 70px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #D4E5FF;

  @media screen and (max-width: 1100px) {
    font-size: 35px;
    line-height: 35px;
  }

  @media screen and (max-width: 992px) {
    font-size: 30px;
  }
`

export const Tag = styled.div`
  background: linear-gradient(90deg, #73248F 0%, rgba(22, 153, 201, 0.53) 64.18%, rgba(9, 21, 89, 0.968648) 92.22%, #040643 100%);
  backdrop-filter: blur(3.5px);
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #D4E5FF;
  padding: 10px 27px;

  @media screen and (max-width: 1100px) {
    font-size: 16px;
    padding: 10px 15px;
  }
  
  @media screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 17px;
    padding: 9px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #BDCCEA;
  margin-bottom: 50px;
  
  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
    align-items: flex-end;
    

    > * {
      &:first-child {
        order: 2
      }
    }
  }
`

export const Input = styled.input`
  background-color: #06080C;
  border: 1px solid #372458;
  border-radius: 66px;
  color: #BDCCEA;
  padding: 13px 24px;
  outline: none;
  flex: 0.7;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const Select = styled.select`
  border: 1px solid #372458;
  border-radius: 66px;
  padding: 13px 45px 13px 22px;
  color: #762ACE;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  outline: none;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: 1.1em auto, 100%;
  background-color: #06080C;
`
export const Button = styled(SolidButton)``
