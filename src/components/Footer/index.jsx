import './index.scss';
import * as React from 'react';
import Visa from '../../assets/svg/visa.svg';
import MasterCard from '../../assets/svg/ms.svg';
import Mir from '../../assets/svg/mir.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__copyright">
          © 2004 — 2023 Студсервис Все права защищены
        </span>
        <div className="footer__payment-wrapper">
          <span className="footer__payment-text">Мы принимаем:</span>
          <ul className="footer__payment-list">
            <li className="footer__payment__item">
              <Visa />
            </li>
            <li className="footer__payment__item">
              <MasterCard />
            </li>
            <li className="footer__payment__item">
              <MasterCard />
            </li>
            <li className="footer__payment__item">
              <Mir />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
