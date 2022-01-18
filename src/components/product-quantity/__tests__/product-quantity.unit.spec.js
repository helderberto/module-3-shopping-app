import { render, screen } from '@testing-library/react';

import ProductQuantity from '..';

describe('<ProductQuantity />', () => {
  it('should render singular message when has only 1 product', () => {
    render(<ProductQuantity products={[{ title: 'Test' }]} />);

    expect(screen.getByText(/1 Product$/i)).toBeInTheDocument();
  });

  it('should render plural message when have products', () => {
    render(<ProductQuantity products={[{ title: 'Test 01' }, { title: 'Test 02' }]} />);

    expect(screen.getByText(/2 Products/i)).toBeInTheDocument();
  });
});
