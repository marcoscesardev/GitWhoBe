// react
import React, { useState } from 'react';

// third-party
import axios from 'axios';
import { Formik } from 'formik';
import classNames from 'classnames';

export default function HomePage() {
  const [user, setUser] = useState(null);

  return (
    <div className="home-page puff-in-center">
      <div className="home-page__form">
        <div className="home-page__title">
          <h1>GitWhoBe</h1>
          <span>Descubra informações de usuários do GitHub</span>
        </div>

        <Formik
          initialValues={{ username: '' }}
          validate={values => {
            const errors = {};

            if (!values.username) {
              errors.username = 'Obrigatório';
            } else if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}[a-z\d]$/i.test(values.username)) {
              errors.username = `Pode conter apenas caracteres alfanuméricos ou hífens únicos e não
                pode começar ou terminar com um hífen.`;
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
            axios
              .get(`/users/${values.username}`)
              .then(({ data }) => {
                setSubmitting(false);
                setUser(data);
                resetForm();
              })
              .catch(error => {
                setSubmitting(false)
                if (error.response === 404) {
                  setFieldError(
                    'username',
                    'Este usuário não existe!'
                  );
                } else {
                  setFieldError(
                    'username',
                    'Ocorreu um erro na requisição'
                  );
                }
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="">
              <div className="home-page__form-group">
                <div className="home-page__icon">@</div>
                <input
                  className={classNames('home-page__input', {
                    'home-page__input--error': errors.username,
                  })}
                  type="username"
                  name="username"
                  placeholder="Usuário"
                  onChange={handleChange}
                  value={values.username}/>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={classNames('btn', {
                    'btn--disabled': isSubmitting,
                  })}
                >
                  BUSCAR
                </button>
              </div>

              <div className="home-page__message--error">
                {errors.username && touched.username && errors.username}
              </div>

            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
