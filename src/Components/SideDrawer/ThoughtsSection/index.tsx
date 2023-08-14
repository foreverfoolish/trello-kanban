import styled from 'styled-components';
import { LampOn } from '../../Common/icons/Lamp';

const ThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.4rem; 
`;

const Lamp = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  width: 66px;
  height: 66px;
  z-index: 99;
`;

const InnerEllipse = styled.span`
  position: absolute;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  background-color: #f5e530;
  filter: blur(17px);
`;

const ThoughtsText = styled.div`
  margin-top: -33px;
  padding: 37px 1rem 15px 1rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3;
  border-radius: 0.75rem;
`;

const Title = styled.span`
  font-size: small;
  font-weight: 500;
  color: #000;
`;

const Description = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: grey;
  padding: 0.8rem 0rem;
  text-align: center;
`;

const TextButton = styled.button`
  background-color: #fff;
  padding: 0.5rem 1.312rem;
  color: black;
  font-size: small;
  font-weight: 500;
  width: 95%;
  border-radius: 0.25rem;
`;

const ThoughtsSection = () => {
  return (
    <ThoughtsContainer>
      <Lamp>
        <InnerEllipse />
        <LampOn />
      </Lamp>
      <ThoughtsText>
        <Title>Thoughts Time</Title>
        <Description>
          We don't have any notice for you, till then you can share your
          thoughts with your peers.
        </Description>
        <TextButton>Write a message</TextButton>
      </ThoughtsText>
    </ThoughtsContainer>
  );
}

export default ThoughtsSection