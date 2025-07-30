import { useState } from 'react';
import '../styles/components/pagination.css';

export default function Pagination({ currentNum, setPageNum, totalCount }) {
  /**
   * 페이지 번호를 표시할 배열
   */
  const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5]);

  /**
   * 화살표 모양으로 다음 페이지로 이동할 때 이벤트
   * @param {event} e
   */
  const onClickMoveNext = (e) => {
    e.stopPropagation();
    setPageNum(currentNum + 1);

    if (!(currentNum % 5)) {
      if (totalCount - currentNum * 10 > 50) {
        setPageArr((prevState) => {
          return prevState.map((el) => el + 5);
        });
      } else {
        setPageArr((prevState) => {
          return Array.from(
            {
              length: (totalCount - currentNum * 10) % 5,
            },
            (_, idx) => prevState[idx] + 5
          );
        });
      }
    }
  };

  /**
   * 화살표 모양으로 이전 페이지로 이동할 때 이벤트
   * @param {event} e
   */
  const onClickMovePrev = (e) => {
    e.stopPropagation();
    setPageNum(currentNum - 1);

    if (currentNum % 5 === 1) {
      setPageArr(
        Array.from({ length: 5 }, (_, idx) => currentNum - 1 - (5 - (idx + 1)))
      );
    }
  };

  return (
    <>
      <div className="pgn-container">
        <ul
          className="pgn-ul"
          onClick={(e) => {
            if (e.target.value) setPageNum(e.target.value);
          }}
        >
          {currentNum !== 1 ? (
            <li className="pgn-prev-btn" onClick={onClickMovePrev}>
              &lt;
            </li>
          ) : (
            <li
              className="pgn-prev-btn pgn-disabled"
              onClick={(e) => e.stopPropagation()}
            >
              &lt;
            </li>
          )}
          {pageArr.map((pageNum) => {
            return (
              <li
                style={
                  pageNum === currentNum
                    ? { backgroundColor: '#2f80ed', color: 'white' }
                    : {}
                }
                key={pageNum}
                value={pageNum}
              >
                {pageNum}
              </li>
            );
          })}
          {pageArr.length < 5 ? (
            <li
              className="pgn-next-btn pgn-disabled"
              onClick={(e) => e.stopPropagation()}
            >
              &gt;
            </li>
          ) : (
            <li className="pgn-next-btn" onClick={onClickMoveNext}>
              &gt;
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
