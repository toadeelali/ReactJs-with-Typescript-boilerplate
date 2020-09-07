import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IRouts, Routs } from './types';
import { findRoutByURL } from './history';

interface ILocationDetails {
  location: any;
  data: IRouts;
}

const initialValue: ILocationDetails = {
  location: {},
  data: {
    link: Routs.MAIN.link,
  },
};

export default function useLocationDetails(): any {
  const location = useLocation();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    setData({ location, data: findRoutByURL(location.pathname) });
  }, [location]);

  return data;
}
