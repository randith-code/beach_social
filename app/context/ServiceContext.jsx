import React from "react";

const ServiceContext = React.createContext({
  services: [],
  setServices: (services) => {},
});

export default ServiceContext;
