import styled from 'styled-components';
import { palette } from '../styles/commonStyles';
import { DeleteButton } from './ImgInput';

const ItmesTag = styled.div`
  width: 110px;
  height: 36px;
  border: none;
  background-color: ${palette.gray100};
  font-size: 16px;
  border-radius: 999px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
`;

const ItemsTagDeleteButton = styled(DeleteButton)`
  position: relative;
  z-index: 0;
  transform: none;
`;

/**
 * 태그 컴포넌트
 * @returns
 */
const HashTag = ({ children }) => {
  return (
    <>
      <div style={{ margin: '10px 0px' }}>
        <ItmesTag>
          {children}
          <ItemsTagDeleteButton></ItemsTagDeleteButton>
        </ItmesTag>
      </div>
    </>
  );
};

export default HashTag;
