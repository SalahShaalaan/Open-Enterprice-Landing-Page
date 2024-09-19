import Card from "@/app/_components/Card";
import Image from "next/image";

export default function MemberCard({ members }) {
  return (
    <Card className="w-full h-full p-6 rounded-lg shadow-[15px_15px_0_#71A894] transition-all duration-300 hover:shadow-none cursor-pointer border-4 border-black">
      <h1 className="font-bold text-[30px]">Members</h1>
      <div className="card-content flex flex-col space-y-6 mt-6">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Image src={member.avatar} alt={member.name} width={72} height={72} quality={100} placeholder="blur" />
            <div>
              <h4 className="font-[700]">{member.name}</h4>
              <p className="text-gray-500">{member.shares}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}