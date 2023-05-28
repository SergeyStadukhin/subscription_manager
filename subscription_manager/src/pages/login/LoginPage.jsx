import React from "react";
import modules from '../../style/login.module.scss'

const LoginPage = () => {

    return(
        <div className={modules.backGroundLogin}>
            <div className={modules.loginWrapper}>
                <h2 className={modules.headerLabel}>Авторизация</h2>
                <input className={modules.inputBox} placeholder="Логин" />
                <input className={modules.inputBox} placeholder="Пароль" type="password"/>
                <button className={modules.buttonBox}>Войти</button>
                <span>Нет учётной записи?
                    <a href=''>Регистрация</a>
                </span>
            </div>
        </div>
    )
}

export default LoginPage;