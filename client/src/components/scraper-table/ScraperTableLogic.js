import { useState, useEffect } from "react";
import axios from "axios";

const ScraperTableLogic = () => {
    const [games, setGames] = useState([]);

    useEffect( () => {
        getData()
    }, []);

    const getData = async () => {
       await axios.get('http://localhost:4000/')
            .then(async function (response) {
                console.log(response)
               await setGames(response.data)
            })
            .catch(function (error) {
                alert(error);
            });
    }

    return {games,getData};

}
export default ScraperTableLogic;