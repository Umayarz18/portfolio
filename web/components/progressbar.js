export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div role="progressbar"
        aria-label="progress meter"
        aria-valuemax="100"
        aria-valuemin="0"
        className={`progress-outer bg-${color}-200`}
      >
        <p
          style={{ width: width }}
          role="progressbar"
          aria-label={`progress is at ${width}%`}
          aria-valuenow={width}
          className={`
          progress-inner bg-${color}-400
       `}
        >
          {width}
        </p>
      </div>
    </div>
  );
}
