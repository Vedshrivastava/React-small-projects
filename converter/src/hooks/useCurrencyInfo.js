import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.6.12/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        //in object format therfore we change it in json format.
        .then((res) => setData((res[currency])))
        //this second then means only selected currency whole array to fetch. As the array had other alues outside it so inorder ro ignore them.
        //but the way sata is an object having values not array therefore {} in useState.
    }, [currency])

    return data;

}

export default useCurrencyInfo;
