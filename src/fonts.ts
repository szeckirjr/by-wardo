import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../public/fonts/Noto_Sans/NotoSans-VariableFont.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Noto_Sans/NotoSans-Italic-VariableFont.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
});

export const vidaloka = localFont({
  src: '../public/fonts/Vidaloka.ttf',
  weight: '400',
  style: 'normal',
});
