export interface City {
    id: number;
    name: string;
    country: string;
}

export const cities: City[] = [
    {
        id: 1,
        name: 'Москва',
        country: 'Россия'
    },
    {
        id: 2,
        name: 'Санкт-Петербург',
        country: 'Россия'
    },
    {
        id: 3,
        name: 'Новосибирск',
        country: 'Россия'
    },
    {
        id: 4,
        name: 'Киев',
        country: 'Украина'
    },
    {
        id: 5,
        name: 'Одесса',
        country: 'Украина'
    },
    {
        id: 6,
        name: 'Минск',
        country: 'Беларусь'
    },
];
