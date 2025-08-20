// src/app/page.tsx

import React from 'react';
import MarketSelector from '../components/MarketSelector';
import BalanceSheetHighlights from '../components/BalanceSheetHighlights';

const HomePage: React.FC = () => {
  // Example balance sheet data
  const balanceSheetData = {
    assets: 100000,
    liabilities: NaN, // Simulating a NaN value
    equity: 50000,
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <MarketSelector />
      <BalanceSheetHighlights data={balanceSheetData} />
    </div>
  );
};

export default HomePage;