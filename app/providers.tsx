// app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  const themeList = [
    'lightRed',
    'lightOrange',
    'lightAmber',
    'lightYellow',
    'lightLime',
    'lightGreen',
    'lightEmerald',
    'lightTeal',
    'lightCyan',
    'lightSky',
    'lightBlue',
    'lightIndigo',
    'lightViolet',
    'lightPurple',
    'lightFuchsia',
    'lightPink',
    'lightRose',
    'darkNeutralRed',
    'darkNeutralOrange',
    'darkNeutralAmber',
    'darkNeutralYellow',
    'darkNeutralLime',
    'darkNeutralGreen',
    'darkNeutralEmerald',
    'darkNeutralTeal',
    'darkNeutralCyan',
    'darkNeutralSky',
    'darkNeutralBlue',
    'darkNeutralIndigo',
    'darkNeutralViolet',
    'darkNeutralPurple',
    'darkNeutralFuchsia',
    'darkNeutralPink',
    'darkNeutralRose',
    'darkSlateRed',
    'darkSlateOrange',
    'darkSlateAmber',
    'darkSlateYellow',
    'darkSlateLime',
    'darkSlateGreen',
    'darkSlateEmerald',
    'darkSlateTeal',
    'darkSlateCyan',
    'darkSlateSky',
    'darkSlateBlue',
    'darkSlateIndigo',
    'darkSlateViolet',
    'darkSlatePurple',
    'darkSlateFuchsia',
    'darkSlatePink',
    'darkSlateRose',
    'darkGrayRed',
    'darkGrayOrange',
    'darkGrayAmber',
    'darkGrayYellow',
    'darkGrayLime',
    'darkGrayGreen',
    'darkGrayEmerald',
    'darkGrayTeal',
    'darkGrayCyan',
    'darkGraySky',
    'darkGrayBlue',
    'darkGrayIndigo',
    'darkGrayViolet',
    'darkGrayPurple',
    'darkGrayFuchsia',
    'darkGrayPink',
    'darkGrayRose',
    'darkZincRed',
    'darkZincOrange',
    'darkZincAmber',
    'darkZincYellow',
    'darkZincLime',
    'darkZincGreen',
    'darkZincEmerald',
    'darkZincTeal',
    'darkZincCyan',
    'darkZincSky',
    'darkZincBlue',
    'darkZincIndigo',
    'darkZincViolet',
    'darkZincPurple',
    'darkZincFuchsia',
    'darkZincPink',
    'darkZincRose',
    'darkStoneRed',
    'darkStoneOrange',
    'darkStoneAmber',
    'darkStoneYellow',
    'darkStoneLime',
    'darkStoneGreen',
    'darkStoneEmerald',
    'darkStoneTeal',
    'darkStoneCyan',
    'darkStoneSky',
    'darkStoneBlue',
    'darkStoneIndigo',
    'darkStoneViolet',
    'darkStonePurple',
    'darkStoneFuchsia',
    'darkStonePink',
    'darkStoneRose',
  ];

  const randomTheme = themeList[Math.floor(Math.random() * themeList.length)];
  return (
    <ThemeProvider
      themes={themeList}
      attribute='data-theme'
      defaultTheme={randomTheme}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
