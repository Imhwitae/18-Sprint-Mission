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

export const InquiryTextArea = styled.textarea`
  background-color: ${palette.gray100};
  height: 104px;
  width: 100%;
  border: none;
  border-radius: 12px;
  resize: none;
  font-family: Pretendard-Reqular;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  &::placeholder {
    color: ${palette.gray400};
  }
`;

export const InquirySubmitButton = styled.button`
  width: 74px;
  height: 42px;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ isActive }) =>
    isActive ? `${palette.blue}` : `${palette.gray400}`};
  float: right;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? `#1967d6` : `${palette.gray400}`};
  }

  &:active {
    background-color: ${({ isActive }) =>
      isActive ? `#1251aa` : `${palette.gray400}`};
  }
`;
