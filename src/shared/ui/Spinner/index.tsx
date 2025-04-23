// src/shared/ui/Spinner/Spinner.tsx
import React from 'react';
import { BeatLoader } from 'react-spinners';

interface SpinnerProps {
  loading?: boolean;
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  loading = true,
  size = 15,
}) => (
  <div
    className="
      fixed inset-0
      flex items-center justify-center
      bg-light-bgColor dark:bg-dark-bgColor
      z-9999
    "
  >
    <BeatLoader color="#E95420" loading={loading} size={size} />
  </div>
);

export default Spinner;
