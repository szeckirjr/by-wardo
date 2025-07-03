import '@testing-library/jest-dom';

jest.mock('next/font/google', () => {
  return {
    Inter: () => ({ className: 'mock-font' }),
    Vidaloka: () => ({ className: 'mock-font' }),
  };
});
