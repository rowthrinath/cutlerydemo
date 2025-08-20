// src/components/BalanceSheetHighlights.tsx

'use client';

import React from 'react';

interface BalanceSheetProps {
  data: Record<string, any>;
}

const BalanceSheetHighlights: React.FC<BalanceSheetProps> = ({ data }) => {
  const hasNaNValues = Object.values(data).some(value => isNaN(value));

  return (
    <div>
      {hasNaNValues ? (
        <div>
          <p>Data is incomplete due to NaN values.</p>
          <p>Please check alternative sources or methods to retrieve the data.</p>
        </div>
      ) : (
        <div>
          <h2>Balance Sheet Highlights</h2>
          {/* Render balance sheet data */}
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BalanceSheetHighlights;