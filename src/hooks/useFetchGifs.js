import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [listGifs, setlistGifs] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    const getListGifs = async () => {
      const obtainGifs = await getGifs(category);
      setlistGifs(obtainGifs);
      setIsLoading(false)
    };
  
    useEffect(() => {
      getListGifs();
    }, []);
  

    return{
        listGifs,isLoading
    }

}
