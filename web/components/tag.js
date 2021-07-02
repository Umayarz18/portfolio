export default function Tag({color, title}){
    return(
        <div className="rounded-full text-white mr-1 my-1 inline  w-max self-center shadow px-3 py-2 font-semibold text-sm" style={{backgroundColor: color}}>
            {title}
        </div>
    )
}