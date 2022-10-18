/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { SolidButton } from '../../../theme';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
import {
  Wrapper,
  Content,
  MainContentWrap,
  Title,
  Text,
  SkillTitle,
  TextContainer,
  SkillsContainer,
  Skills,
  Skill,
  SkillContent,
  SkillImg,
  SkillText,
  ActionContainer,
  Action,
  Select,
} from './styles';
import { useWeb3React } from '@web3-react/core';

const NftSaleContent = () => {
  const { chainId } = useWeb3React();

  return (
    <Wrapper>
      <Content>
        <MainContentWrap>
          <TextContainer>
            <Title>NFT-Sale</Title>
            <Text>
              Stake your SEAN up to 35 days to earn extra SEAN.ur SEAN up to 35
              days to earn extra SEays to earn extra SEto earn extra SEAN.ur
              SEAN up to 35 days extra SEAN.ur SEAN up to 35 days to earn extra
              SEays to earn extra SEto earn extra SEAN.ur SEA
            </Text>
          </TextContainer>
          <SkillsContainer>
            <SkillTitle>Сharacter skills</SkillTitle>
            <Skills>
              <Skill>
                <SkillContent>
                  <SkillImg height={'22px'} src={NFTSaleDamage} />
                  <SkillText>Damage</SkillText>
                </SkillContent>
              </Skill>
              <Skill>
                <SkillContent>
                  <SkillImg height={'22px'} src={NFTSaleSpeed} />
                  <SkillText>Speed</SkillText>
                </SkillContent>
              </Skill>
              <Skill>
                <SkillContent>
                  <SkillImg height={'18px'} src={NFTSaleHealth} />
                  <SkillText>Health</SkillText>
                </SkillContent>
              </Skill>
              <Skill>
                <SkillContent>
                  <SkillImg height={'20px'} src={NFTSaleArmor} />
                  <SkillText>Armor</SkillText>
                </SkillContent>
              </Skill>
            </Skills>
          </SkillsContainer>
        </MainContentWrap>
        <ActionContainer>
          <Action>
            <Select onChange={(e) => console.log(e.target.value)}>
              {chainId === 97 ? (
                <>
                  <option>BNB</option>
                  <option>BUSD</option>
                </>
              ) : (
                <>
                  <option>ETH</option>
                  <option>USDT</option>
                </>
              )}
            </Select>
          </Action>
          <Action>
            <SolidButton onClick={() => console.log('=> Mint')}>
              Mint
            </SolidButton>
          </Action>
        </ActionContainer>
      </Content>
    </Wrapper>
  );
};

export default NftSaleContent;
