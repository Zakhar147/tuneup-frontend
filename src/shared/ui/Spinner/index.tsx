// src/shared/ui/Spinner/Spinner.tsx
import React from 'react';
import { BeatLoader } from 'react-spinners';

interface SpinnerProps {
  loading?: boolean;
  size?: number;
  colorClass?: string;
}

const   Spinner: React.FC<SpinnerProps> = ({
  loading = true,
  size = 15,
  colorClass = "bg-light-bgColor dark:bg-dark-bgColor"
}) => (
  <div
    className={`
      fixed inset-0
      flex items-center justify-center
      z-9999
      ${colorClass}
    `}
  >
    <BeatLoader color="#E95420" loading={loading} size={size} />
  </div>
);

export default Spinner;
