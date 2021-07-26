import React, {useContext, useState} from 'react';

const ServiceIdContext = React.createContext();

export const useServiceId = () => {
  return useContext(ServiceIdContext)
};

export const ServiceProvider =({id,children}) => {
  const [serviceId, setServiceId] = useState(id);
  const setId = (id) => setServiceId(id);
  return (
    <ServiceIdContext.Provider value={{id : serviceId, setId}}>
      {children}
    </ServiceIdContext.Provider>
  )
};
