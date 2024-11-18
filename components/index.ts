import React from 'react';
import Flag from '@/components/Flag';
import SvgImage from '@/components/SvgImage';
import CircleImage from '@/components/CircleImage';
const HoldTheDate = React.lazy(() => import('@/components/HoldTheDate'));
const ScreenTemplate = React.lazy(() => import('@/components/ScreenTemplate'));

export {
    Flag,
    SvgImage,
    HoldTheDate,
    CircleImage,
    ScreenTemplate,
};