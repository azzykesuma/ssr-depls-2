

function Button({label, onClick, className, ...props}: {label: string, onClick: () => void, className?:string}){
  return (
    <button className={`${className} px-2.5 sm:px-5 bg-primaryBcg rounded-[5px] sm:rounded-lg border-none py-1 sm:py-2 no-underline flex items-center justify-center text-black font-extrabold text-sm sm:text-lg`} onClick={onClick} {...props}>{label}</button>
  )
}

export default Button