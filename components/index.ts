import React from 'react';
import Flag from '@/components/Flag';
import NotFoundComponent from '@/components/NotFoundComponent';
import VideoPlayer from '@/components/VideoPlayer';
import VerticalLinesRightLeft from '@/components/VerticalLinesRightLeft';
import Hero from '@/components/Hero';
import WelcomeSection from '@/components/WelcomeSection';
import Footer from '@/components/Footer';
import BulletListItem from '@/components/BulletListItem';
import PartnerBanner from "@/components/PartnerBanner";
import LanguagePicker from "@/components/LanguagePicker";
import ProgramCard from '@/components/ProgramCard';
// @ts-ignore
import PapyrusMenu, {animationDuration} from '@/components/PapyrusMenu';
const HoldTheDate = React.lazy(() => import('@/components/HoldTheDate'));
const ScreenTemplate = React.lazy(() => import('@/components/ScreenTemplate'));

export {
  Flag,
  HoldTheDate,
  ScreenTemplate,
  VideoPlayer,
  VerticalLinesRightLeft,
  Hero,
  WelcomeSection,
  NotFoundComponent,
  Footer,
  BulletListItem,
  PartnerBanner,
  LanguagePicker,
  PapyrusMenu,
  animationDuration,
  ProgramCard
};
