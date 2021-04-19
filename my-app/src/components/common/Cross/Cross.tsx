import React, { FC } from 'react';

import { CrossWrapper, CrossIconItem } from './Cross.style';

export const Cross: FC = () => (
  <CrossWrapper>
    {Array.from({ length: 2 }).map((_, i) => (
      <CrossIconItem key={i} />
    ))}
  </CrossWrapper>
);
