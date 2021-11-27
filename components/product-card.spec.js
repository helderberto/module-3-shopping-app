import { render, screen } from '@testing-library/react';

import ProductCard from './product-card';

const product = {
  title: 'Watch',
  price: '22.00',
  image:
    'https://images.unsplash.com/photo-1622925566273-d7cfdcc34ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
};

describe('<ProductCard />', () => {
  it('should render ProductCard component', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(new RegExp(product.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: product.image,
    });
  });
});
