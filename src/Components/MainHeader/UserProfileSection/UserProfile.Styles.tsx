import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.13rem;
`;

export const UserInfoContainer = styled.div`
  display: none;
  margin-top: 0;
  margin-left: 10px;
  flex-direction: column;
  gap: 3px;
  align-items: end;
`;

export const UserName = styled.span`
  color: #0D062D;
  text-align: right;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserAddress = styled.span`
  color: #787486;
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  margin-right: -0.8rem;
`;