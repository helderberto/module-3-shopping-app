import { render, screen } from '@testing-library/react';

import ServerErrorMessage from '..';

describe('<ServerErrorMessage />', () => {
  it('should render component without error message', () => {
    render(<ServerErrorMessage error={false} />);

    expect(screen.queryByTestId('server-error')).toBeNull();
  });

  it('should render component with server error message', () => {
    render(<ServerErrorMessage error />);

    expect(screen.getByText(/down/i)).toBeInTheDocument();
  });
});
