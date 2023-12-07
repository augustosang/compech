import { styled } from "styled-components";

export const UserInfos = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 6px;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border: 3px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
  }
`;

export const Info = styled.div`
  border: 3px solid #03bfcb;
  border-radius: 6px;
  padding: 18px;
  max-width: 400px;
  width: 350px;
`;