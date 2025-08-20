import { render, screen } from '@testing-library/react';
import BalanceSheetHighlights from '../components/BalanceSheetHighlights';

describe('BalanceSheetHighlights Component', () => {
  it('should display a message when NaN values are present', () => {
    const data = { assets: 100000, liabilities: NaN, equity: 50000 };
    render(<BalanceSheetHighlights data={data} />);
    expect(screen.getByText(/Data is incomplete due to NaN values./i)).toBeInTheDocument();
    expect(screen.getByText(/Please check alternative sources or methods to retrieve the data./i)).toBeInTheDocument();
  });

  it('should display balance sheet data when no NaN values are present', () => {
    const data = { assets: 100000, liabilities: 50000, equity: 50000 };
    render(<BalanceSheetHighlights data={data} />);
    expect(screen.getByText(/Balance Sheet Highlights/i)).toBeInTheDocument();
    expect(screen.getByText(/assets: 100000/i)).toBeInTheDocument();
    expect(screen.getByText(/liabilities: 50000/i)).toBeInTheDocument();
    expect(screen.getByText(/equity: 50000/i)).toBeInTheDocument();
  });
});
