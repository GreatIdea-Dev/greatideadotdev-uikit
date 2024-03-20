/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

interface IColorList {
  [key: string]: string;
}

export default function CursorSpotlightText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [baseColor, setBaseColor] = useState('#22d3ee');
  const [highlightColor, setHighlightColor] = useState('#67e8f9');
  const [mounted, setMounted] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const classes = 'mouseEffect' + ' ' + className;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const highlightColors: IColorList[] = [
    { Red: '#f87171' },
    { Orange: '#fb923c' },
    { Amber: '#fbbf24' },
    { Yellow: '#facc15' },
    { Lime: '#a3e635' },
    { Green: '#4ade80' },
    { Emerald: '#34d399' },
    { Teal: '#2dd4bf' },
    { Cyan: '#22d3ee' },
    { Sky: '#38bdf8' },
    { Blue: '#60a5fa' },
    { Indigo: '#818cf8' },
    { Violet: '#a78bfa' },
    { Purple: '#c084fc' },
    { Fuchsia: '#e879f9' },
    { Pink: '#f472b6' },
    { Rose: '#fb7185' },
  ];
  const baseColors: IColorList[] = [
    { Red: '#ef4444' },
    { Orange: '#f97316' },
    { Amber: '#f59e0b' },
    { Yellow: '#eab308' },
    { Lime: '#84cc16' },
    { Green: '#22c55e' },
    { Emerald: '#10b981' },
    { Teal: '#14b8a6' },
    { Cyan: '#06b6d4' },
    { Sky: '#0ea5e9' },
    { Blue: '#3b82f6' },
    { Indigo: '#6366f1' },
    { Violet: '#8b5cf6' },
    { Purple: '#a855f7' },
    { Fuchsia: '#d946ef' },
    { Pink: '#ec4899' },
    { Rose: '#f43f5e' },
  ];

  useEffect(() => {
    if (mounted && resolvedTheme) {
      let newBaseColor = '#22d3ee';
      baseColors.map((color) => {
        if (resolvedTheme.includes(Object.keys(color)[0])) {
          newBaseColor = Object.values(color)[0];
        }
      });

      let newHighlightColor = '#67e8f9';
      highlightColors.map((color) => {
        if (resolvedTheme.includes(Object.keys(color)[0])) {
          newHighlightColor = Object.values(color)[0];
        }
      });
      setBaseColor(newBaseColor);
      setHighlightColor(newHighlightColor);
    }
    if (!mounted && resolvedTheme) {
      setMounted(true);
    }
  }, [resolvedTheme, mounted]);

  const style = {
    '--positionx': `${position.x}px`,
    '--positiony': `${position.y}px`,
    '--baseColor': baseColor,
    '--highlightColor': highlightColor,
  } as React.CSSProperties;
  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={'mouseEffect'}
    >
      {children}
    </p>
  );
}
