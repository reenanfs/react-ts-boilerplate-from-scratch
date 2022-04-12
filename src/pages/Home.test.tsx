import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders app text', (): void => {
  render(<Home />);
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});
