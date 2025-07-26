import '../styles/components/dropDownList.css';
import { useEffect, useState } from 'react';

export default function DropdownList() {
  /**
   * 드롭다운 리스트 메뉴
   */
  const orderList = [
    { name: '최신순', value: 'recent' },
    { name: '좋아요순', value: 'favorite' },
  ];

  const [order, setOrder] = useState(orderList[0].name);

  /**
   * 드롭다운 리스트의 열림/닫힘 상태
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * 드롭다운 리스트 열림/닫힘 이벤트
   */
  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickChangeOrder = (value) => {
    setOrder(value);
    onClickOpen();
  };

  useEffect(() => {
    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      <div className="dropdown-container">
        <button type="button" className="dropdown-btn" onClick={onClickOpen}>
          {orderList && order}
        </button>
        {isOpen && (
          <div className="dropdown-box">
            {orderList &&
              orderList.map((menu) => {
                return (
                  <li
                    key={menu.name}
                    className="dropdown-li"
                    onClick={() => onClickChangeOrder(menu.name)}
                  >
                    {menu.name}
                  </li>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}
