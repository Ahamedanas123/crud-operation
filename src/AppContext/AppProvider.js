import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getuserdetails = async () => {
      try {
        const response = await fetch(
          "https://6457b9e40c15cb14820f825c.mockapi.io/data",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setUser(data);
        if (!data) {
          console.log("no data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getuserdetails();
  }, []);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
