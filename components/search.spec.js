import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './search';

const doSearch = jest.fn();

describe('<Search />', () => {
  it('should render a form', () => {
    render(<Search doSearch={doSearch} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should call doSearch() when form is submitted', () => {
    render(<Search doSearch={doSearch} />);

    const input = screen.getByRole('searchbox');
    userEvent.type(input, '{enter}');

    expect(doSearch).toHaveBeenCalledTimes(1);
  });
});
