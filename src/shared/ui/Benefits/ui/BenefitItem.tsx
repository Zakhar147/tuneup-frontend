import React from 'react';

import { CheckMark } from '@shared/assets/Components/CheckMark';
import { Typography } from '@shared/ui/Typography';

interface BenefitItemProps {
  text: string;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <li className="flex items-center gap-[20px]">
    <CheckMark className="w-[40px] flex-shrink-0" />
    <Typography as="span" className="text-[20px]">
      {text}
    </Typography>
  </li>
);