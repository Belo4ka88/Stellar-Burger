import { useState } from 'react';
import style from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  const [currentPage, setCurrentPage] = useState('constructor');

  return (
    <header className={style.header}>
      <nav className={`${style.header__nav} pt-4 pb-4`}>
        <div className={style.header__element}>
          <div className={`${style.header__link} pt-4 pb-4 pl-5 pr-5`}>
            <BurgerIcon type={currentPage === 'constructor' ? 'primary' : 'secondary'} />
            <p className={`${currentPage === 'constructor' ? style.header__text : style.header__text_inactive} text text_type_main-default ml-2`}>
              Конструктор
            </p>
          </div>
          <div className={`${style.header__link} pt-4 pb-4 pl-5 pr-5`}>
            <ListIcon type={currentPage === 'feed' ? 'primary' : 'secondary'} />
            <p className={`${currentPage === 'feed' ? style.header__text : style.header__text_inactive} text text_type_main-default ml-2`}>
              Лента заказов
            </p>
          </div>
        </div>
        <Logo />
        <div className={`${style.header__link} pt-4 pb-4 pl-5 pr-5`}>
          <ProfileIcon type={currentPage === 'lk' ? 'primary' : 'secondary'} />
          <p className={`${currentPage === 'lk' ? style.header__text : style.header__text_inactive} text text_type_main-default ml-2`}>
            Личный кабинет
          </p>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
