import { Search, TrendingUp, Briefcase, Calendar } from "lucide-react";

export default function Explore() {
  const trends = [
    { tag: "#SDGProject", count: "2.1k posts" },
    { tag: "#BatchC2025", count: "1.8k posts" },
    { tag: "#NYSCJobs", count: "900 posts" },
  ];

  const jobs = [
    { title: "Data Intern at FinEdge", location: "Remote" },
    { title: "Web Developer (NYSC)", location: "Abuja" },
  ];

  const events = [
    { title: "TechNYSC Meetup", date: "Oct 28" },
    { title: "Corps Hackathon", date: "Nov 5" },
  ];

  return (
    <div className="text-white">
      {/* Search */}
      <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mb-6">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          placeholder="Search posts, jobs, or events..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Trending Topics */}
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

      {/* Featured Jobs */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <Briefcase size={18} /> Featured Jobs
        </h2>
        <div className="space-y-2">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-3"
            >
              <p className="font-medium">{job.title}</p>
              <p className="text-gray-400 text-sm">{job.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
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
