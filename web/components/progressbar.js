export default function ProgressBar({ width }) {
  return (
    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
      <div class="w-full h-full bg-purple-200 absolute"></div>
      {width ? (
        <div
          class="h-full bg-blue-500 absolute"
          style={{ width: width }}
        ></div>
      ) : (
        <div
          class="h-full bg-blue-500 absolute"
          style={{ width: "50%" }}
        ></div>
      )}
    </div>
  );
}
