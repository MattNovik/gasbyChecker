import './index.scss';
import * as React from 'react';
import Logo from '../../assets/svg/logo.svg';
import Arrow from '../../assets/svg/arrow.svg';
import Menu from '../Menu';
import { MENU_LIST } from '../../data/data';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Menu data={MENU_LIST} />
        <div className="header__enters">
          <button className="header__enter" type="button">
            Вход
          </button>
          <button className="header__reg-button" type="button">
            Регистрация
            <Arrow />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
