import { render, fireEvent } from '@testing-library/react';
import Form from './index.jsx';

test('Form submission calls handleApiCall with correct data', () => {
  const handleApiCall = jest.fn();
  const { getByLabelText, getByText } = render(<Form handleApiCall={handleApiCall} />);

  fireEvent.change(getByLabelText(/url/i), { target: { value: 'https://example.com' } });
  fireEvent.click(getByText(/get/i));
  fireEvent.click(getByText(/go/i));

  expect(handleApiCall).toHaveBeenCalledWith({ url: 'https://example.com', method: 'GET' });
});
