import styled from 'styled-components';
import ImgInput from '../../components/ImgInput';
import { palette } from '../../styles/commonStyles';
import HashTag from '../../components/HashTag';

const ItemContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-bottom: 20px;
`;

const ItemTitleBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const ItemImgBox = styled(ItemTitleBox)`
  justify-content: start;
  margin: 0 auto;
`;

/**
 * 페이지 타이틀
 * sub 옵션으로 서브 타이트롤 변환
 */
const PageTitle = styled.h1`
  font-size: ${({ sub }) => (sub ? `18px` : `20px`)};
  font-weight: 700;
`;

/**
 * 등록 버튼
 */
const SubmitButton = styled.button`
  width: 74px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background-color: #9ca3af;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

/**
 * 상품 정보 입력 input
 */
const TextInput = styled.input`
  height: ${({ wide }) => (wide ? `282px` : `56px`)};
  border: none;
  border-radius: 12px;
  background-color: ${palette.gray100};
  padding: 20px;
  font-size: 16px;
  color: ${palette.gray400};
  position: relative;

  ${({ wide }) =>
    wide ? `&::placeholder {position: absolute; top: 20px;}` : ``}
`;

export default function AddItems() {
  return (
    <>
      <div>
        <form>
          <ItemTitleBox>
            <PageTitle>상품 등록하기</PageTitle>
            <SubmitButton>등록</SubmitButton>
          </ItemTitleBox>

          <ItemContainer>
            <PageTitle sub="true">상품 이미지</PageTitle>
            <ItemImgBox>
              <ImgInput />
            </ItemImgBox>
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">상품명</PageTitle>
            <TextInput placeholder="상품명을 입력해주세요" />
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">상품 소개</PageTitle>
            <TextInput wide="true" placeholder="상품 소개를 입력해주세요" />
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">판매 가격</PageTitle>
            <TextInput placeholder="판매 가격을 입력해주세요" />
          </ItemContainer>

          <ItemContainer>
            <PageTitle sub="true">태그</PageTitle>
            <TextInput placeholder="태그를 입력해주세요" />
            <div style={{ display: 'flex' }}>
              <HashTag>#티셔츠</HashTag>
              <HashTag>#티셔츠</HashTag>
            </div>
          </ItemContainer>
        </form>
      </div>
    </>
  );
}
