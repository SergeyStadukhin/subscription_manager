import React from "react"
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
        {value:1, label:"RUB"},
        {value:2, label:"EUR"},
        {value:3, label:"USD"},
        {value:4, label:"RUB"},
        {value:5, label:"RUB"},
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
                <Select options={listCurrency}
                        className={modules.serviceName}
                        placeholder="Валюта подписки">
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