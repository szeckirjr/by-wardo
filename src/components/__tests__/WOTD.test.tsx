import { render, screen } from '@testing-library/react';
import WOTD from '../WOTD';

describe('WOTD', () => {
  it('renders archive link with open status', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-02'));
    render(<WOTD />);
    expect(screen.getByText('See Archive open')).toBeInTheDocument();
    expect(screen.getByText('January 02, 2020')).toBeInTheDocument();
    jest.useRealTimers();
  });
});
