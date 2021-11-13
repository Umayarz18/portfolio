export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div role="progress" className={`progress-outer bg-${color}-200`}>
        <div
          style={{ width: width }}
          className={`
          progress-inner bg-${color}-400
       `}
        >
          {width}
        </div>
      </div>
    </div>
  );
}
