import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { setAutoFreeze } from 'immer';
import userEvent from '@testing-library/user-event';
import { useCartStore } from '../../../../store/cart';

import CartItem from '..';

setAutoFreeze(false);

const product = {
  title: 'any_product',
  price: 20.0,
  image:
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
};

const renderCartItem = () => render(<CartItem product={product} />);

describe('<CartItem />', () => {
  let result;

  beforeEach(() => {
    result = renderHook(() => useCartStore()).result;
  });

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

  it('should call remove() when remove button is clicked', () => {
    const spy = jest.spyOn(result.current.actions, 'remove');

    renderCartItem();

    const button = screen.getByRole('button', { name: /remove/i });

    userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });

  it('should call increase() when increase button is clicked', () => {
    const spy = jest.spyOn(result.current.actions, 'increase');

    renderCartItem();

    const button = screen.getByTestId('increase');

    userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });

  it('should call decreasse() when decrease button is clicked', () => {
    const spy = jest.spyOn(result.current.actions, 'decrease');

    renderCartItem();

    const button = screen.getByTestId('decrease');

    userEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(product);
  });
});
