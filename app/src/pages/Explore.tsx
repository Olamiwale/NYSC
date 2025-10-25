import { Search, TrendingUp, Briefcase, Calendar } from "lucide-react";

export default function Explore() {
  const trends = [
    { tag: "#SDGProject", count: "2.1k posts" },
    { tag: "#BatchC2025", count: "1.8k posts" },
    { tag: "#NYSCJobs", count: "900 posts" },
    { tag: "#SDGProject", count: "2.1k posts" },
    { tag: "#BatchC2025", count: "1.8k posts" },
    { tag: "#NYSCJobs", count: "900 posts" },
  ];

  const jobs = [
    { title: "Data Intern at FinEdge", location: "Remote" },
    { title: "Web Developer (NYSC)", location: "Abuja" },
    { title: "Data Intern at FinEdge", location: "Remote" },
    { title: "Web Developer (NYSC)", location: "Abuja" },
    { title: "Data Intern at FinEdge", location: "Remote" },
    { title: "Web Developer (NYSC)", location: "Abuja" },
  ];

  const events = [
    { title: "TechNYSC Meetup", date: "Oct 28" },
    { title: "Corps Hackathon", date: "Nov 5" },
    { title: "TechNYSC Meetup", date: "Oct 28" },
    { title: "Corps Hackathon", date: "Nov 5" },
    { title: "TechNYSC Meetup", date: "Oct 28" },
    { title: "Corps Hackathon", date: "Nov 5" },
  ];

  return (
    <div className="mt-10 mx-auto max-w-[600px] text-white flex flex-col justify-center p-4">
   

   <div className="bg-black fixed top-0 w-full p-8"></div>
      <div className="sticky top-5 mb-8 flex items-center gap-4 border-gray-700 border p-3 w-full rounded-xl mb-5">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          placeholder="Search posts, jobs, or events..."
          className="w-full focus:outline-none focus:ring-0"
        />
      </div>

     
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <TrendingUp size={18} /> Trending
        </h2>
        <div className="space-y-2">
          {trends.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-3 flex justify-between"
            >
              <p>{t.tag}</p>
              <span className="text-gray-400 text-sm">{t.count}</span>
            </div>
          ))}
        </div>
      </section>


      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Briefcase size={18} /> Featured Jobs
        </h2>
        <div className="space-y-2">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-3" >
              <p className="font-medium">{job.title}</p>
              <p className="text-gray-400 text-sm">{job.location}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section>
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Calendar size={18} /> Upcoming Events
        </h2>
        <div className="space-y-2">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-3"
            >
              <p className="font-medium">{event.title}</p>
              <p className="text-gray-400 text-sm">{event.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
