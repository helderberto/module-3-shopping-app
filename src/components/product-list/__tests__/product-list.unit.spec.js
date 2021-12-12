import { render, screen } from '@testing-library/react';

import ProductList from '..';

const products = [
  {
    id: 'any_id01',
    title: 'Watch',
    price: '22.00',
    image:
      'https://images.unsplash.com/photo-1622925566273-d7cfdcc34ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
  },
  {
    id: 'any_id02',
    title: 'Watch',
    price: '22.00',
    image:
      'https://images.unsplash.com/photo-1622925566273-d7cfdcc34ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
  },
];

describe('<ProductList />', () => {
  it('should render empty products', () => {
    render(<ProductList />);

    expect(screen.getByTestId('no-products')).toBeInTheDocument();
  });

  it('should render products list', () => {
    render(<ProductList products={products} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
  });
});
