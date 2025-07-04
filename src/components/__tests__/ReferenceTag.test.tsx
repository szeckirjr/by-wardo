import { render, screen } from '@testing-library/react';
import ReferenceTag from '../ReferenceTag';

jest.mock('../Tooltip', () => ({ __esModule: true, default: (props: any) => <span>{props.children}{props.element}</span> }));

describe('ReferenceTag', () => {
  it('renders link with number and text', () => {
    render(
      <ReferenceTag
        number={1}
        reference={{ title: 'T', author: 'A', publisher: 'P', href: '/h' }}
      />
    );
    const link = screen.getByText('1');
    expect(link).toHaveAttribute('href', '/h');
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
