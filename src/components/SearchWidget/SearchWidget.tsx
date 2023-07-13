import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import {CitySelect} from "../CitySelect";
import "react-datepicker/dist/react-datepicker.css";
import {ru} from 'date-fns/locale';
import styles from "./SearchWidget.module.css"

interface SearchWidgetProps {
    onSearch: (from: string, to: string, startDate: Date, endDate: Date | null) => void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({onSearch}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [onlyStartDate, setOnlyStartDate] = useState(false);

    const handleFromChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTo(event.target.value);
    };

    const handleSearch = () => {
        if (!from || !to || !startDate || (!onlyStartDate && !endDate)) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        onSearch(from, to, startDate, endDate);
    };

    return (
        <div className={styles.container}>
            <CitySelect value={from} onChange={handleFromChange} placeholder="Откуда"/>
            <CitySelect value={to} onChange={handleToChange} placeholder="Куда"/>

            <div className={styles.startDateWrapper}>
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} selectsStart
                            startDate={startDate} endDate={endDate} minDate={new Date()}
                            placeholderText="Начало"
                            locale={ru}
                            dateFormat="dd.MM.yyyy"
                            className={styles.wrapper}/>

                <div>
                    <input type="checkbox" checked={onlyStartDate}
                           onChange={() => setOnlyStartDate(!onlyStartDate)}/>
                    <span>Без конечной даты</span>
                </div>
            </div>
            {!onlyStartDate && <DatePicker selected={endDate}
                                           onChange={(date: Date) => setEndDate(date)} selectsEnd
                                           startDate={startDate}
                                           endDate={endDate}
                                           minDate={new Date()}
                                           placeholderText="Конец"
                                           locale={ru}
                                           dateFormat="dd.MM.yyyy"
                                           className={styles.wrapper}/>}

            <button onClick={handleSearch} className={styles.searchButton}>Найти</button>
        </div>
    );
};
