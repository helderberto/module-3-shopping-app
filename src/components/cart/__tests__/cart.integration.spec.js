import { render, screen } from '@testing-library/react';

import Cart from '..';

describe('<Cart />', () => {
  it('should render Cart', () => {
    render(<Cart />);

    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });
});
