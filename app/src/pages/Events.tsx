import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    {
      title: "TechNYSC Meetup 2025",
      date: "Oct 28, 2025",
      time: "10:00 AM",
      location: "Yaba, Lagos",
      description:
        "A networking event for serving corps members in tech — featuring speakers from top Nigerian startups.",
    },
    {
      title: "Green Corps Volunteer Drive",
      date: "Nov 5, 2025",
      time: "9:00 AM",
      location: "Abuja City Park",
      description:
        "Join other corps members in an environmental sustainability drive organized by NYSC Abuja.",
    },
    {
      title: "Green Corps Volunteer Drive",
      date: "Nov 5, 2025",
      time: "9:00 AM",
      location: "Abuja City Park",
      description:
        "Join other corps members in an environmental sustainability drive organized by NYSC Abuja.",
    },
    {
      title: "Green Corps Volunteer Drive",
      date: "Nov 5, 2025",
      time: "9:00 AM",
      location: "Abuja City Park",
      description:
        "Join other corps members in an environmental sustainability drive organized by NYSC Abuja.",
    },
    {
      title: "Green Corps Volunteer Drive",
      date: "Nov 5, 2025",
      time: "9:00 AM",
      location: "Abuja City Park",
      description:
        "Join other corps members in an environmental sustainability drive organized by NYSC Abuja.",
    },
  ];

  return (
    <div className="mt-10 mx-auto max-w-[600px] text-white flex flex-col justify-center p-4">
      <h1 className="text-2xl font-bold flex justify-center mb-6">Upcoming Events</h1>

      <div className="space-y-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="border border-gray-800 bg-gray-900  rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-2">{event.title}</h2>

            <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-2">
              <span className="flex items-center gap-1"><Calendar size={15}/> {event.date}</span>
              <span className="flex items-center gap-1"><Clock size={15}/> {event.time}</span>
              <span className="flex items-center gap-1"><MapPin size={15}/> {event.location}</span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>

             <Button className="mt-8 w-24 bg-blue-600">Register</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
