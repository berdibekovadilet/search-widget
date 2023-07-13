import React, {FC, ChangeEvent} from 'react';
import {cities, City} from '../../data/cities';
import styles from "./CitySelect.module.css"

interface CitySelectProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
}


export const CitySelect: FC<CitySelectProps> = ({value, onChange, placeholder}) => {
    const citiesByCountry: Record<string, City[]> = cities.reduce((acc: Record<string, City[]>, city) => {
        if (!acc[city.country]) {
            acc[city.country] = [];
        }
        acc[city.country].push(city);
        return acc;
    }, {});

    return (
        <select value={value} onChange={onChange} className={styles.wrapper}>
            <option value="" disabled>{placeholder}</option>
            {Object.entries(citiesByCountry).map(([country, cities]) => (
                <optgroup key={country} label={country}>
                    {cities.map((city) => (
                        <option key={city.id} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>

    );
};
