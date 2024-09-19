

export default function ContributeCard({ title, desc, aut, date }) {
  return (
    <div className="p-4 shadow-md rounded-xl flex flex-col h-full">

      <h1 className="font-[700] tracking-wider mb-2">
        {title}
      </h1>
      <p className="leading-relaxed flex-grow">{desc}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="bg-primaryBgColor text-white rounded-xl p-2">{aut}</span>
        <span className="tracking-widest font-[600]">{date}</span>
      </div>
    </div>
  )
}