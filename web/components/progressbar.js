export default function ProgressBar({ width, color }) {
  return (
    <div className="relative py-1">
      <div
        role="progress"
        className={`overflow-hidden min-h-full text-xs flex rounded bg-purple-100`}
      >
        <div
          style={{ width: width }}
          className={`
         flex flex-col
         text-center
         whitespace-nowrap
         text-white
         justify-center
         font-bold
         bg-primary
       `}
        >
          {width}
        </div>
      </div>
    </div>
  );
}
