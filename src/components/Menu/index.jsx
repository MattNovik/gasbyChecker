import './index.scss';
import * as React from 'react';
import Arrow from '../../assets/svg/arrow.svg';
import Close from '../../assets/svg/close.svg';

const Menu = ({ data, menuRef, handleClose }) => {
  return (
    <nav className="menu" ref={menuRef}>
      <button
        className="menu__close"
        type="button"
        onClick={() => handleClose()}
      >
        <Close />
      </button>
      <ul className="menu__list">
        {data && data.length
          ? data.map((item, index) => (
              <li className="menu__item" key={index}>
                <a
                  href={item.to}
                  className="menu__link"
                  onClick={() => handleClose()}
                >
                  {item.name}
                </a>
              </li>
            ))
          : null}
      </ul>
      <div className="menu__enters">
        <button className="menu__enter" type="button">
          Вход
        </button>
        <button className="menu__reg-button" type="button">
          Регистрация
          <Arrow />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
