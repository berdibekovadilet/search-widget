import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface City {
    id: number;
    name: string;
}

interface SearchWidgetProps {
    cities: City[];
    onSearch: (from: string, to: string, startDate: Date, endDate: Date | null) => void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({cities, onSearch}) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [onlyStartDate, setOnlyStartDate] = useState(false);

    const handleSearch = () => {
        if (!from || !to || !startDate || (!onlyStartDate && !endDate)) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        onSearch(from, to, startDate, endDate);
    };

    const filteredCities = (city: string) => {
        return cities.filter((c) => c.name.toLowerCase().includes(city.toLowerCase()));
    };

    return (
        <div>
            <input list="from-cities" value={from} onChange={e => setFrom(e.target.value)} placeholder="Откуда"/>
            <datalist id="from-cities">
                {filteredCities(from).map((city) => (
                    <option key={city.id} value={city.name}/>
                ))}
            </datalist>

            <input list="to-cities" value={to} onChange={e => setTo(e.target.value)} placeholder="Куда"/>
            <datalist id="to-cities">
                {filteredCities(to).map((city) => (
                    <option key={city.id} value={city.name}/>
                ))}
            </datalist>

            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} selectsStart
                        startDate={startDate} endDate={endDate} minDate={new Date()}/>

            <input type="checkbox" checked={onlyStartDate} onChange={() => setOnlyStartDate(!onlyStartDate)}/>

            {!onlyStartDate && <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} selectsEnd
                                           startDate={startDate} endDate={endDate} minDate={new Date()}/>}

            <button onClick={handleSearch}>Найти</button>
        </div>
    );
};

