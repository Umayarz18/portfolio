import React from "react";

type ProgressBarProps = {
  type: "bar" | "";
  width: number;
  label: string;
};
export const ProgressBar = ({ type, width, label }: ProgressBarProps) => {
  const normalizedRadius = 60 - 4 * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (width / 100) * circumference;

  if (type === "bar") {
    return (
      <div className="relative py-1">
        <div aria-label="progress meter" className={"progress-outer "}>
          <p
            style={{ width: `${width}%` }}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="progressbar"
            aria-label="Progress bar"
            aria-valuenow={width}
            aria-valuemax={100}
            aria-valuemin={0}
            className={`
          progress-inner
       `}
          >
            {width}%
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center overflow-hidden relative">
        <svg
          className="transform -rotate-90   
           rounded-full w-36 h-36 "
          aria-label="progress meter"
        >
          <circle
            r={normalizedRadius}
            stroke="currentColor"
            cx={50}
            cy={50}
            strokeWidth="10"
            role="img"
            aria-labelledby={`progressBar-${label}-${width}`}
            fill="transparent"
            className="text-indigo-200 transform translate-x-5 translate-y-5 "
          />

          <circle
            role="progressbar"
            id={`progressBar-${label}-${width}`}
            aria-label="Progress bar"
            aria-valuenow={width}
            aria-valuemax={100}
            aria-valuemin={0}
            r={normalizedRadius}
            cx={50}
            cy={50}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary dark:text-primary-dark  transform translate-x-5 translate-y-5 "
          />
        </svg>
        <span className="absolute text-3xl font-medium">{width}%</span>
      </div>
    );
  }
};
