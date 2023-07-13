import React from 'react';
import {SearchWidget} from "./components/SearchWidget";
import './App.css';

function App() {

    const handleSearch = (from: string, to: string, startDate: Date, endDate: Date | null) => {
        console.log({from, to, startDate, endDate});
    };
    return (
        <div className="App">
            <SearchWidget onSearch={handleSearch}/>
        </div>
    );
}

export default App;
