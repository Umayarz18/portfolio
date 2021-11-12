export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div role="progress" className={`progress-outer`}>
        <div
          style={{ width: width }}
          className={`
          progress-inner
       `}
        >
          {width}
        </div>
      </div>
    </div>
  );
}
