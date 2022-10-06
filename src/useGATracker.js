import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ReactGA from 'react-ga4';

  const useGATracker = () => {
      const location = useLocation();
      const [initalized, setInitialized] = useState(false);

      useEffect(() => {
          if (!window.location.href.includes("localhost")) {
              ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
              setInitialized(true);
          }
      }, []);

      useEffect(() => {
          if (initalized) {
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search});
          }
      }, [initalized, location]);
  };

  export default useGATracker;