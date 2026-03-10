export default function ({ value, lable }: { value: string; lable: string }) {
    return (
        <div className=" flex flex-col items-center">
            <div className="bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400">
                {value}
            </div>
            <span className=" text-xs uppercase tracking-widest text-slate-500 mt-2 font-sans">
                {lable}
            </span>
        </div>
    )
}