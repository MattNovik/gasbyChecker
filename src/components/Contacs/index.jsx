import './index.scss';
import * as React from 'react';
import Tg from '../../assets/svg/tg.svg';
import Ok from '../../assets/svg/ok.svg';
import Vk from '../../assets/svg/vk.svg';
import Phone from '../../assets/svg/phone.svg';
import Email from '../../assets/svg/email.svg';

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <div className="contacts__wrapper-tel-email">
          <p className="contacts__title">Контакты:</p>
          <a href="tel:+7812409-31-63" className="contacts__tel">
            <Phone /> +7 (812) 409-31-63
          </a>
          <a href="mailto:studservis@yandex.ru" className="contacts__email">
            <Email /> studservis@yandex.ru
          </a>
        </div>
        <div className="contacts__wrapper-addres">
          <p className="contacts__title">
            Работаем по будням с 10:00 до 20:00 по Мск
          </p>
          <a href="#adress" className="contacts__addres">
            ООО&nbsp;"Студсервис", ИНН&nbsp;7820312056, ОГРН&nbsp;1077847598795
            от 21 сентября 2007 г
          </a>
          <a href="#pol" className="contacts__politic">
            Политика конфиденциальности
          </a>
        </div>
        <div className="contacts__socials">
          <p className="contacts__title">Мы в соцсетях:</p>
          <ul className="contacts__social-list">
            <li className="contcats__social-item tg">
              <a href="#tg">
                <Tg />
              </a>
            </li>
            <li className="contcats__social-item ok">
              <a href="#ok">
                <Ok />
              </a>
            </li>
            <li className="contcats__social-item vk">
              <a href="#vk">
                <Vk />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
