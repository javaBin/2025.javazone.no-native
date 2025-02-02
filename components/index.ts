import React from 'react';
import Flag from '@/components/Flag';
import NotFoundComponent from '@/components/NotFoundComponent';
import SvgImage from '@/UI/SvgImage';
import CircleImage from '@/UI/CircleImage';
const HoldTheDate = React.lazy(() => import('@/components/HoldTheDate'));
const ScreenTemplate = React.lazy(() => import('@/components/ScreenTemplate'));
const VideoPlayer = React.lazy(() => import('@/components/VideoPlayer'));
const VerticalLinesRightLeft = React.lazy(() => import('@/components/VerticalLinesRightLeft'));
const Hero = React.lazy(() => import('@/components/Hero'));
const WelcomeSection = React.lazy(() => import('@/components/WelcomeSection'));

export {
  Flag,
  SvgImage,
  HoldTheDate,
  CircleImage,
  ScreenTemplate,
  VideoPlayer,
  VerticalLinesRightLeft,
  Hero,
  WelcomeSection,
  NotFoundComponent,
};
