import { useEffect, useState } from 'react';
import { getCamperById } from '../lib/api';

export default function useCamperById(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCamper = async () => {
      try {
        setIsLoading(true);
        const camperData = await getCamperById(id);
        setData(camperData);
      } catch (error) {
        console.error('Error fetching camper data:', error);
        setError('Error fetching camper data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCamper();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
