import { screen, render } from '@testing-library/react';

import Search from './search';

describe('<Search />', () => {
  it('should render Search component', () => {
    render(<Search />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
