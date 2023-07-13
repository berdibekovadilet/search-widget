import React from 'react';
import {SearchWidget} from "./components/SearchWidget";
import './App.css';

function App() {
    const cities = [
        {id: 1, name: 'Москва'},
        {id: 2, name: 'Санкт-Петербург'},
        {id: 3, name: 'Новосибирск'},
    ];

    const handleSearch = (from: string, to: string, startDate: Date, endDate: Date | null) => {
        console.log({from, to, startDate, endDate});
    };
    return (
        <div className="App">
            <SearchWidget cities={cities} onSearch={handleSearch}/>
        </div>
    );
}

export default App;
