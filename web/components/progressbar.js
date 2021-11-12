export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div
        role="progress"
        className={`overflow-hidden min-h-full text-xs flex rounded bg-${color}-200`}
      >
        <div
          style={{ width: width }}
          className={`
         shadow-none
         flex flex-col
         text-center
         whitespace-nowrap
         text-white
         justify-center
         font-bold
         bg-${color}-400
       `}
        >
          {width}
        </div>
      </div>
    </div>
  );
}
