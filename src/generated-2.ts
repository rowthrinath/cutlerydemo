// src/components/MarketSelector.tsx

'use client';

import React, { useEffect, useState } from 'react';

const MarketSelector: React.FC = () => {
  const [market, setMarket] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Simulate market selection based on location
          // In a real app, you might call an API to get the market
          if (latitude && longitude) {
            setMarket('Market based on location');
          }
        },
        (error) => {
          console.error('Error getting location', error);
          setMarket('Default Market');
        }
      );
    } else {
      setMarket('Default Market');
    }
  }, []);

  return <div>Selected Market: {market}</div>;
};

export default MarketSelector;