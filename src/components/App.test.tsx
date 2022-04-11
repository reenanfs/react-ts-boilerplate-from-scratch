import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
