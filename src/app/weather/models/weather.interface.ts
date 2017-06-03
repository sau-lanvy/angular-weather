export interface IOWeather {
    id: number;
    name: string;
    main: {
        temp: number;
        pressure: string;
        humidity: string;
        temp_min: string;
        temp_max: string;
    };
    wind: {
        speed: string;
        deg: string;
    };
    clouds: {
        all: string;
    };
    weather: IWeather[];
};

export interface IWeather {
    id: string;
    main: string;
    description: string;
    icon: string;
};