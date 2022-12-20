import './index.scss';
import * as React from 'react';

const Menu = ({ data }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {data && data.length
          ? data.map((item, index) => (
              <li className="menu__item" key={index}>
                <a href="#top" className="menu__link">
                  {item.name}
                </a>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Menu;
