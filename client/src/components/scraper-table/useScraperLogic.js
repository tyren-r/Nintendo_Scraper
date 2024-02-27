import { useState, useEffect } from "react";
import axios from "axios";

const useScraperLogic = () => {
    const [games, setGames] = useState([]);

    useEffect( () => {
        getData()
    }, []);

    const getData = async () => {
       await axios.get('http://localhost:4000/')
            .then(async function (response) {
                console.log('here')
                console.log(response)
                await setGames(response.data)
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return {games,getData};

}
export default useScraperLogic;