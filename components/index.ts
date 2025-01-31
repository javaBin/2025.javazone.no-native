import React from 'react';
import Flag from '@/components/Flag';
import NotFoundComponent from '@/components/NotFoundComponent';

const HoldTheDate = React.lazy(() => import('@/components/HoldTheDate'));
const ScreenTemplate = React.lazy(() => import('@/components/ScreenTemplate'));
const VideoPlayer = React.lazy(() => import('@/components/VideoPlayer'));
const VerticalLinesRightLeft = React.lazy(() => import('@/components/VerticalLinesRightLeft'));

export {
    Flag,
    HoldTheDate,
    ScreenTemplate,
    VideoPlayer,
    NotFoundComponent,
    VerticalLinesRightLeft
};
