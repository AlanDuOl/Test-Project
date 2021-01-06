import { useEffect, useState } from 'react';
import axios from 'axios';

function Result2() {

    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get('http://localhost:80/api_1/WeatherForecast')
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Result2</p>
        </div>
    )
}

export default Result2;