import { render, screen } from '@testing-library/react';

import CartItem from './cart-item';

const product = {
  title: 'any_product',
  price: 20.0,
  image:
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
};

const renderCartItem = () => render(<CartItem product={product} />);

describe('<CartItem />', () => {
  it('should render CartItem component', () => {
    renderCartItem();

    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderCartItem();

    expect(screen.getByText(new RegExp(product.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveProperty('src', product.image);
    expect(screen.getByRole('img')).toHaveProperty('alt', product.title);
  });
});
