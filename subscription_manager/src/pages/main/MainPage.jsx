import React from "react";
import modules from '../../style/main.module.scss'
import Select from 'react-select'

const MainPage = () => {
    const optionsList = [
        {value:"Boosty", label: "Boosty"},
        {value:"Twitch", label: "Twitch"}
    ]

    const listServices = [
        {id: 1, value: "Boosty", description: "Айхо", price: 200, currency: "RUB"}
    ]

    const listCurrency = [
        {id:1, value:"RUB"},
        {id:1, value:"RUB"},
        {id:1, value:"RUB"},
        {id:1, value:"RUB"},
        {id:1, value:"RUB"},
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
                        className={modules.serviceName}
                        placeholder="Наименование сервиса">
                </Select>
                </div>
                <div className={modules.listServices}>
                    {listServices.map((item)=>(
                        <div>{item.value}-{item.description}-{item.price}-{item.currency}</div>
                    ))}
                </div>
            </main>
            <footer>
                тут футер
            </footer>
        </div>
    )
}

export default MainPage;