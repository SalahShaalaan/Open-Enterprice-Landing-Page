import Card from "@/app/_components/Card";
import Image from "next/image";

export default function InvestorCard({ investor }) {
  return (
    <Card className="w-full h-full border-4 border-black rounded-lg transition-all duration-300 hover:shadow-[15px_15px_0_#71A894] cursor-pointer">
      <div className="content flex flex-col p-6">
        <div className="flex items-center space-x-4 tracing-wide">
          <Image src={investor.avatar} alt={investor.name} width={72} height={72} quality={100} placeholder="blur" />
          <div className="space-y-2">
            <h4 className="font-[700] text-2xl tracking-widest">{investor.name}</h4>
            <p className="text-gray-500 text-base tracking-wide">Pre-seed angel investor</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
            Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.          </p>
          <div className="flex gap-40 mt-10">
            <div>
              <span className="uppercase text-gray-600 text-base tracking-tighter">Commit</span>
              <p className="font-[600] text-black tracking-widest text-2xl">10,000 DAI</p>
            </div>
            <div>
              <span className="uppercase text-gray-600 text-base tracking-tighter">Shares</span>
              <p className="font-[600] text-black tracking-widest text-2xl">20</p>
            </div>
          </div>
          <button className="bg-black w-full py-3 mt-8 text-white tracking-widest rounded-lg text-xl">Go to vote</button>
        </div>
      </div>
    </Card>
  );
}