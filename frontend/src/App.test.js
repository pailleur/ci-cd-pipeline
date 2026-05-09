import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading text', () => {
  render(<App />);
  // Change /learn react/i to /Loading.../i
  const linkElement = screen.getByText(/Loading.../i); 
  expect(linkElement).toBeInTheDocument();
});