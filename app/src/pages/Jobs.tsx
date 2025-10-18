import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer (NYSC)",
      company: "TechLabs Nigeria",
      location: "Lagos",
      type: "Hybrid",
      posted: "2 days ago",
      company_des: "This is a tech company specialize in providing solution to banking industries and other financial services"
    },
    {
      title: "Data Analyst Intern",
      company: "FinEdge Analytics",
      location: "Abuja",
      type: "Remote",
      posted: "5 days ago",
      company_des: "This is a tech company specialize in providing solution to banking industries and other financial services"
    },
    {
      title: "Data Analyst Intern",
      company: "FinEdge Analytics",
      location: "Abuja",
      type: "Remote",
      posted: "5 days ago",
      company_des: "This is a tech company specialize in providing solution to banking industries and other financial services"
    },
    {
      title: "Data Analyst Intern",
      company: "FinEdge Analytics",
      location: "Abuja",
      type: "Remote",
      posted: "5 days ago",
      company_des: "This is a tech company specialize in providing solution to banking industries and other financial services"
    },
    {
      title: "Data Analyst Intern",
      company: "FinEdge Analytics",
      location: "Abuja",
      type: "Remote",
      posted: "5 days ago",
      company_des: "This is a tech company specialize in providing solution to banking industries and other financial services"
    },
  ];

  return (
    <div className="mt-10 mx-auto max-w-[600px] text-white flex flex-col justify-center p-4">
      <h1 className="text-2xl font-bold flex justify-center mb-6">Job Opportunities</h1>

      <div className="space-y-8">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="border border-gray-800 bg-gray-900 rounded-xl p-5 "
          >
            <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{job.company}</p>

            <div className="flex items-center text-gray-400 gap-4 text-sm">
              <span className="flex items-center gap-1"><MapPin size={15}/> {job.location}</span>
              <span className="flex items-center gap-1"><Briefcase size={15}/> {job.type}</span>
              <span className="flex items-center gap-1"><Clock size={15}/> {job.posted}</span>
            </div>

            <p className="text-sm text-gray-400 pt-4">{job.company_des}</p>

        
              <Button className="mt-8 w-24 bg-blue-600">Apply</Button>
            
           

            
          </div>
        ))}
      </div>
    </div>
  );
}
