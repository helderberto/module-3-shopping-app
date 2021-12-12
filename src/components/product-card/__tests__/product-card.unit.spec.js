import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from '..';

const product = {
  title: 'Watch',
  price: '22.00',
  image:
    'https://images.unsplash.com/photo-1622925566273-d7cfdcc34ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
};

const addToCart = jest.fn();

const renderProductCard = () => render(<ProductCard product={product} addToCart={addToCart} />);

describe('<ProductCard />', () => {
  it('should render ProductCard component', () => {
    renderProductCard();

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderProductCard();

    expect(screen.getByText(new RegExp(product.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: product.image,
    });
  });

  it('should call addToCart() when button is clicked', async () => {
    renderProductCard();

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
