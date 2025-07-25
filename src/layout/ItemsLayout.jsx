import { Outlet } from 'react-router';
import Header from './Header';
import Items from '../pages/items/Items';

export default function ItemsLayout() {
  const menus = ['자유게시판', '중고마켓'];

  return (
    <>
      <Header menus={menus} />
      <main>
        <Items />
      </main>
    </>
  );
}
