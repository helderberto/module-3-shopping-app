import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartItem from '..';

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

  it('should display 1 as initial quantity', () => {
    renderCartItem();

    expect(screen.getByTestId('quantity').textContent).toBe('1');
  });

  it('should increase quantity by 1 when second button is clicked', () => {
    renderCartItem();

    const button = screen.getByTestId('increase');

    userEvent.click(button);

    expect(screen.getByTestId('quantity').textContent).toBe('2');
  });

  it('should decrease quantity by 1 when first button is clicked', () => {
    renderCartItem();

    const buttonDecrease = screen.getByTestId('decrease');
    const buttonIncrease = screen.getByTestId('increase');
    const quantity = screen.getByTestId('quantity');

    userEvent.click(buttonIncrease);
    expect(quantity.textContent).toBe('2');

    userEvent.click(buttonDecrease);
    expect(quantity.textContent).toBe('1');
  });

  it('should not go below zero in the quantity', () => {
    renderCartItem();

    const buttonDecrease = screen.getByTestId('decrease');
    const quantity = screen.getByTestId('quantity');

    expect(quantity.textContent).toBe('1');

    userEvent.click(buttonDecrease);
    userEvent.click(buttonDecrease);

    expect(quantity.textContent).toBe('0');
  });
});
