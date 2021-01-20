import { useEffect, useState } from 'react';
import axios from 'axios';

function Result2() {

    const [result, setResult] = useState([]);

    // useEffect(() => {
    //     axios.get('api_2weatherforecast')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.error(err));
    // }, [])

    let request = () => {
        axios.get('api_2weatherforecast')
            .then(res => setResult(res.data))
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            <p>Result2</p>
            <button type="button" onClick={request}>Request 2</button>
            {result.map((val, index) => (
                    <div key={index} className="info">
                        <div className="element">
                            <span>date</span>
                            <span>{val.date}</span>
                        </div>
                        <div className="element">
                            <span>TemperatureC</span>
                            <span>{val.temperatureC}</span>
                        </div>
                        <div className="element">
                            <span>TemperatureF</span>
                            <span>{val.temperatureF}</span>
                        </div>
                        <div className="element">
                            <span>Summary</span>
                            <span>{val.summary}</span>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Result2;