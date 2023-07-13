import React from 'react';
import styles from "./SearchResultsModal.module.css"

interface SearchResultsModalProps {
    searchResults: { from: string, to: string, startDate: Date, endDate: Date | null };
    onClose: () => void;
}

export const SearchResultsModal: React.FC<SearchResultsModalProps> = ({searchResults, onClose}) => {
    const formattedStartDate = searchResults.startDate.toLocaleDateString();
    const formattedEndDate = searchResults.endDate ? searchResults.endDate.toLocaleDateString() : 'Только начальная дата';

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>Результаты поиска:</h2>
                <p>Откуда: {searchResults.from}</p>
                <p>Куда: {searchResults.to}</p>
                <p>Дата начала: {formattedStartDate}</p>
                <p>Дата окончания: {formattedEndDate}</p>
            </div>
        </div>
    );
};
