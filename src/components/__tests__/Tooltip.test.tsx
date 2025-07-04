import { render, screen } from '@testing-library/react';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  it('renders arrow variants', () => {
    const { rerender } = render(
      <Tooltip element={<span>Info</span>}>Child</Tooltip>
    );
    expect(screen.getByText('Child')).toHaveClass('underline');
    expect(screen.queryByTestId('left-arrow')).not.toBeInTheDocument();

    rerender(
      <Tooltip leftArrow element={<span>Info</span>}>
        Child
      </Tooltip>
    );
    expect(screen.getByTestId('left-arrow')).toBeInTheDocument();
  });
});
