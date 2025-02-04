import React from 'react';
import Flag from '@/components/Flag';
import NotFoundComponent from '@/components/NotFoundComponent';
const HoldTheDate = React.lazy(() => import('@/components/HoldTheDate'));
const ScreenTemplate = React.lazy(() => import('@/components/ScreenTemplate'));
const VideoPlayer = React.lazy(() => import('@/components/VideoPlayer'));
const VerticalLinesRightLeft = React.lazy(() => import('@/components/VerticalLinesRightLeft'));
import Hero from '@/components/Hero';
//const Hero = React.lazy(() => import('@/components/Hero'));
const WelcomeSection = React.lazy(() => import('@/components/WelcomeSection'));

export {
  Flag,
  HoldTheDate,
  ScreenTemplate,
  VideoPlayer,
  VerticalLinesRightLeft,
  Hero,
  WelcomeSection,
  NotFoundComponent,
};
