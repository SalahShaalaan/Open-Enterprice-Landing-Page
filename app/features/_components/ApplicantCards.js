import Card from "@/app/_components/Card";
import Image from "next/image";
import avatar from "@/public/avatars/member8.png";

export default function ApplicantCard({ applicants }) {
  return (
    <div className="grid grid-cols-1 md-800:grid-cols-12 md-900:grid-cols-12 gap-4 pt-8 ">
      <Card className="w-full mb-4 border-4 border-black col-span-12 rounded-lg shadow-[0_10px_0_#71A894] transition-all duration-300 hover:shadow-none cursor-pointer ">
        <div className="p-6">
          <div className="flex justify-between tracking-widest">
            <h1 className="text-lg font-[700]">Write a how-to on Open Enterprise</h1>
            <button className="bg-[#71A894] text-white px-3 rounded-3xl uppercase">Share</button>
          </div>
          <p className="mt-6 leading-relaxed tracking-wider">Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.</p>
        </div>
      </Card>

      <Card className="bg-[#F3F0EA] w-full h-full p-6 rounded-lg cursor-pointer border-4 border-black col-span-12 md-800:col-span-7 md-900:col-span-7">
        <h1 className="font-bold text-[30px] tracking-widest">3 applicants</h1>
        <div className="card-content flex flex-col space-y-6 mt-6">
          {applicants.map((applicant, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image src={applicant.avatar} alt={applicant.name} width={40} height={40} quality={100} />
                <h4 className="font-[700] tracking-widest">{applicant.name}</h4>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#F5C64F" viewBox="0 0 24 24" className="size-6 mr-3">
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <p className="font-[600]">4.5</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="border-4 border-[#71A894] flex flex-col items-center p-4 rounded-lg transform translate-y-4 col-span-12 md-800:col-span-5 md-900:col-span-5">
        <div className="text-center mb-4">
          <Image src={avatar} alt="Random Person" width={72} height={72} quality={100} className="mx-auto rounded-full" />
          <h3 className="font-bold mt-2 tracking-wider">Alex Rose</h3>
          <p className="text-sm text-gray-600">UX Writer</p>
        </div>
        <div className="w-full mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm tracking-widest font-[600]">4 Commits</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#F5C64F" viewBox="0 0 24 24" className="w-[24px] h-[24px] mr-2">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <span className="text-sm font-bold">4.5</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-xl tracking-widest">View Profile</button>
        </div>
      </Card>
    </div>
  );
}