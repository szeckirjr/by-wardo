import { render, screen } from '@testing-library/react';
import FoundInBook from '../FoundInBook';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img src={props.src} alt={props.alt} />,
}));

describe('FoundInBook', () => {
  it('shows book info and excerpt', () => {
    const reference = {
      book: { title: 'Title', author: 'Auth', cover: '/img.png' },
      excerpt: <>Quote</>,
    };
    render(<FoundInBook reference={reference} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Auth')).toBeInTheDocument();
    expect(screen.getByText(/Quote/)).toBeInTheDocument();
  });
});
