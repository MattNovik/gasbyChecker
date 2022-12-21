import './index.scss';
import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CustomForm = ({ classname, id }) => {
  const formik = useFormik({
    initialValues: {
      theme: '',
      email: '',
      agreeament: true,
    },
    /* validateOnChange: false, */
    validationSchema: Yup.object().shape({
      theme: Yup.string().required('Заполните это поле'),
      email: Yup.string().email('Введите email').required('Заполните это поле'),
      agreeament: Yup.bool().oneOf([true], ''),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className={classname ? 'custom-form ' + classname : 'custom-form'}
      onSubmit={formik.handleSubmit}
      id={id ? id : 'form'}
    >
      <div className="custom-form__inputs-wrapper">
        <input
          type="text"
          name="theme"
          className={
            formik.errors.theme
              ? 'custom-form__input error'
              : 'custom-form__input'
          }
          value={formik.values.theme}
          onChange={formik.handleChange}
          placeholder="ТЕМА"
        />
        <input
          type="text"
          name="email"
          className={
            formik.errors.email
              ? 'custom-form__input error'
              : 'custom-form__input'
          }
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={'ВАШ E-MAIL'}
        />
        <button type="submit" className="custom-form__button">
          Рассчитать
        </button>
      </div>
      <input
        name="agreeament"
        defaultChecked={formik.values.agreeament}
        onChange={formik.handleChange}
        className={
          formik.errors.agreeament
            ? 'custom-form__input-agreeament visibility-hidden error'
            : 'custom-form__input-agreeament visibility-hidden'
        }
        id={classname ? 'agreeament' + classname : 'agreeament'}
        type="checkbox"
      />
      <label htmlFor={classname ? 'agreeament' + classname : 'agreeament'}>
        Нажимая кнопку "Узнать стоимость", вы соглашаетесь с{' '}
        <a href="#some">политикой конфиденциальности</a>
      </label>
    </form>
  );
};

export default CustomForm;
