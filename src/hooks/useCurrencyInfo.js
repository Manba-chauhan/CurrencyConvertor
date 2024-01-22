import React, { useState } from 'react';
import { useEffect } from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    // custom hook is returning an array and not an object as in the case of useState or useEffect
    // This is because we want to use array destructuring when using this custom hook

    // We can also return an object from a custom hook

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(response => response.json())
            .then((response) => setData(response[currency]))
        console.log(data);

    }, [currency]);
    console.log(data);
    return data;
};

export default useCurrencyInfo;
