"use client";
import Image from "next/image";
import Member1 from "../public/images/member1.png";
import Member2 from "../public/images/member2.png";
import Member3 from "../public/images/member3.png";
import Member4 from "../public/images/member4.png";

export default function ExpertsSection() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: Member1,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      image: Member2,
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Project Manager",
      image: Member3,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Specialist",
      image: Member4,
    },
  ];

  return (
    <div id="team" className="bg-black text-white py-20">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-8">Meet Our Experts</h2>
        <p className="max-w-4xl mx-auto text-lg mb-16">
          While vulnerability can help build trust, it's not the only way. Trust also grows through reliability, clear
          communication, and consistent actions, allowing team members to feel secure without needing to expose personal
          vulnerabilities.
        </p>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-rose-400">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
