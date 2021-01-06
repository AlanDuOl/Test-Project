import { useEffect, useState } from 'react';
import axios from 'axios';

function Result2() {

    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get('api1/controller')
            .then(res => console.log(res.json()))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Result2</p>
        </div>
    )
}

export default Result2;