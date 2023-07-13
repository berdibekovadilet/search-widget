import React, {useState} from 'react';
import {SearchWidget, SearchResultsModal} from "./components";
import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchResults, setSearchResults] = useState<{
        from: string,
        to: string,
        startDate: Date,
        endDate: Date | null
    } | null>(null);

    const handleSearch = (from: string, to: string, startDate: Date, endDate: Date | null) => {
        setSearchResults({from, to, startDate, endDate});
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="App">
            <SearchWidget onSearch={handleSearch}/>
            {isModalOpen && searchResults && <SearchResultsModal searchResults={searchResults} onClose={closeModal}/>}
        </div>
    );
}

export default App;
