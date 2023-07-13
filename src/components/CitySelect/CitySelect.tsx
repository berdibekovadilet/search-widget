import React, {FC, ChangeEvent} from 'react';
import {cities, City} from '../../data/cities';

interface CitySelectProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CitySelect: FC<CitySelectProps> = ({value, onChange}) => {
    const citiesByCountry: Record<string, City[]> = cities.reduce((acc: Record<string, City[]>, city) => {
        if (!acc[city.country]) {
            acc[city.country] = [];
        }
        acc[city.country].push(city);
        return acc;
    }, {});

    return (
        <select value={value} onChange={onChange}>
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
