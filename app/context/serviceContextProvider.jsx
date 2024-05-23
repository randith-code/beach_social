"use client";
import { useState, useContext } from "react";
import ServiceContext from "./ServiceContext";

export const useService = () => {
  return useContext(ServiceContext);
};

const ServiceContextProvider = (props) => {
  const [services, setServices] = useState([]);

  const setServiceArray = (services) => {
    setServices(services);
  };

  const value = {
    services: services,
    setServices: setServiceArray,
  };

  return (
    <ServiceContext.Provider value={value}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
