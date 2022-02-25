import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '..';

const doSearch = jest.fn();

describe('<Search />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a form', () => {
    render(<Search doSearch={doSearch} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should render a input equals to search', () => {
    render(<Search doSearch={doSearch} />);

    expect(screen.getByRole('searchbox')).toHaveProperty('type', 'search');
  });

  it('should call doSearch() when form is submitted', () => {
    render(<Search doSearch={doSearch} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(doSearch).toHaveBeenCalledTimes(1);
  });

  it('should call doSearch() with the user input', () => {
    render(<Search doSearch={doSearch} />);

    const inputText = 'any_text';
    const form = screen.getByRole('form');
    const input = screen.getByRole('searchbox');

    userEvent.type(input, inputText);
    fireEvent.submit(form);

    expect(doSearch).toHaveBeenCalledWith(inputText);
  });

  it('should call doSearch when search input is cleared', () => {
    render(<Search doSearch={doSearch} />);

    const inputText = 'any_text';
    const form = screen.getByRole('form');
    const input = screen.getByRole('searchbox');

    userEvent.type(input, inputText);
    userEvent.clear(input);

    expect(doSearch).toHaveBeenCalledTimes(1);
    expect(doSearch).toHaveBeenCalledWith('');
  });
});
