export default function ProgressBar({ width }) {
  return (
    <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
      <div className="w-full h-full bg-purple-200 absolute"></div>
      {width ? (
        <div
          className="h-full bg-blue-500 absolute"
          style={{ width: width }}
        ></div>
      ) : (
        <div
          className="h-full bg-blue-500 absolute"
          style={{ width: "50%" }}
        ></div>
      )}
    </div>
  );
}
