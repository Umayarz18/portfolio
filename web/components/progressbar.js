export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div
        aria-label="progress meter"
        className={`progress-outer `}
      >
        <p
          style={{ width: `${width}%` }}
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
}
