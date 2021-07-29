export default function ProgressBar({ width, color }) {
  return (
    <div className="circular">
            <div className="inner"></div>
            <div className="outer"></div>
            <div className="numb">
               0%
            </div>
            <div className="circle">
               <div className="dot">
                  <span></span>
               </div>
               <div className="bar left">
                  <div className="progress"></div>
               </div>
               <div className="bar right">
                  <div className="progress"></div>
               </div>
            </div>
         </div>
  );
}
