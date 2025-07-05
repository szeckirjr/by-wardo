import '@testing-library/jest-dom';

jest.mock('next/font/local', () => {
  return () => ({ className: 'mock-font' });
});

jest.mock('lottie-react', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: React.forwardRef((_props, ref) => {
      React.useImperativeHandle(ref, () => ({
        play: jest.fn(),
        stop: jest.fn(),
        pause: jest.fn(),
        setSpeed: jest.fn(),
        goToAndStop: jest.fn(),
        goToAndPlay: jest.fn(),
        setDirection: jest.fn(),
        playSegments: jest.fn(),
        setSubframe: jest.fn(),
        getDuration: jest.fn(),
        destroy: jest.fn(),
        animationContainerRef: { current: null },
        animationLoaded: true,
        animationItem: undefined,
      }));
      return React.createElement('div', { 'data-testid': 'lottie' });
    }),
  };
});
