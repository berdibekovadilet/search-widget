import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CitySelect} from "../CitySelect";

interface SearchWidgetProps {
    onSearch: (from: string, to: string, startDate: Date, endDate: Date | null) => void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({onSearch}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
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
        <div>
            <CitySelect value={from} onChange={handleFromChange}/>
            <CitySelect value={to} onChange={handleToChange}/>

            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} selectsStart
                        startDate={startDate} endDate={endDate} minDate={new Date()}/>

            <input type="checkbox" checked={onlyStartDate} onChange={() => setOnlyStartDate(!onlyStartDate)}/>

            {!onlyStartDate && <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} selectsEnd
                                           startDate={startDate} endDate={endDate} minDate={new Date()}/>}

            <button onClick={handleSearch}>Найти</button>
        </div>
    );
};
