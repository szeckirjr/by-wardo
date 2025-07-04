import { render } from '@testing-library/react';
import CalendarIcon from '../icons/CalendarIcon';

describe('CalendarIcon', () => {
  it('forwards color prop to svg', () => {
    const { container } = render(<CalendarIcon color="red" />);
    expect(container.querySelector('svg')).toHaveAttribute('stroke', 'red');
    expect(container.querySelector('svg')).toHaveAttribute('fill', 'red');
  });
});
