import { createContext, useEffect, useState } from "react";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_GEO } = getEnvVariables();

export const InfoContext = createContext();

const InfoProvider = (props) => {
  const [button, setButton] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(button === true) return
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(VITE_API_GEO);
        // console.log({response})
        if (!response.ok) {
          // console.log('entra acá')
          setTime(new Date());
          return;
        }
        const data = await response.json();
        const currentDateTime = new Date(data.datetime);
        setTime(currentDateTime);
      } catch (error) {
        setTime(new Date());
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [button]);




  return (
    <InfoContext.Provider
      value={{
        isLoading,
        time,
        button, 
        setButton
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;