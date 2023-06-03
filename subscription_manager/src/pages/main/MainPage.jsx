import React from "react";
import modules from '../../style/main.module.scss'
import Select from 'react-select'

const MainPage = () => {
    const optionsList = [
        {value:"Boosty", label: "Boosty"},
        {value:"Twitch", label: "Twitch"}
    ]
    return(
        <div>
            <header>
                <ul>
                    <li>1</li>
                </ul>
            </header>
            <main>
                <div className={modules.addService}>
                <Select options={optionsList} 
                        placeholder="Наименование сервиса">
                </Select>
                </div>
                <div className={modules.listServices}>

                </div>
            </main>
            <footer>
                тут футер
            </footer>
        </div>
    )
}

export default MainPage;