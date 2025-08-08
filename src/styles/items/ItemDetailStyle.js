import styled from "styled-components";
import { ItemsTag, palette } from "../commonStyles";

export const ProductInfoBox = styled.div`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid ${palette.gray200};
  padding-bottom: 40px;
`;

export const ProductTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductImg = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 16px;
  border: none;
  margin-right: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0px 10px;
`;

export const ProductSubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${palette.gray600};
  margin: 20px 0px;
`;

export const ProductTextArea = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  color: ${palette.gray600};
  margin: 0;
`;

export const ProductOwnerName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 10px 0px;
  color: ${palette.gray600};
`;

export const ProductDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.gray400};
  margin: 0;
`;

export const Heart = styled.div`
  border: 1px solid ${palette.gray200};
  border-radius: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  padding: 2px 10px;
  align-items: center;
`;

export const HeartCount = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.gray500};
  margin: 0;
`;
