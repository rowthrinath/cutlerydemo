import { render, screen } from '@testing-library/react';
import MarketSelector from '../components/MarketSelector';

describe('MarketSelector Component', () => {
  it('should display the default market when location services are disabled', () => {
    render(<MarketSelector />);
    expect(screen.getByText(/Selected Market: Default Market/i)).toBeInTheDocument();
  });

  it('should display the market based on location when location is determined', () => {
    // Mock geolocation API
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(success({ coords: { latitude: 51.1, longitude: 45.3 } }))
      )
    };
    global.navigator.geolocation = mockGeolocation;

    render(<MarketSelector />);
    expect(screen.getByText(/Selected Market: Market based on location/i)).toBeInTheDocument();
  });
});
