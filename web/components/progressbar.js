export default function ProgressBar({ width, color }) {
  return (
    <div class="relative pt-1">
      <div class={`overflow-hidden h-2 text-xs flex rounded bg-${color}-200`}>
        <div
          style={{ width: width }}
          class={`
         shadow-none
         flex flex-col
         text-center
         whitespace-nowrap
         text-white
         justify-center
         bg-${color}-400
       `}
        ></div>
      </div>
    </div>
  );
}
