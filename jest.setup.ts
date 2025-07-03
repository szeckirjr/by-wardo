import '@testing-library/jest-dom';

jest.mock('next/font/local', () => {
  return () => ({ className: 'mock-font' });
});
