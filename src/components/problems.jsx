import { Users, Bell, Contact } from "lucide-react";

function Problems() {
  const problems = [
    {
      title: "Contacts slipping away",
      desc: "Without a clear system, new visitors and first-timers can easily be forgotten. Harvest helps you record and track everyone who walks through your doors.",
      icon: <Contact className="text-green-700 w-8 h-8" />,
    },
    {
      title: "Follow-ups getting missed",
      desc: "Busy ministry schedules often mean missed opportunities. Harvest keeps your team consistent with gentle reminders and organized follow-up plans.",
      icon: <Users className="text-green-700 w-8 h-8" />,
    },
    {
      title: "No timely reminders",
      desc: "Important moments for connection matter. Harvest ensures your follow-up team is always on time with alerts and task scheduling that works — even offline.",
      icon: <Bell className="text-green-700 w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Why choose <span className="text-green-300">Harvest App?</span>
        </h2>
        <p className="text-lg text-green-100 mb-14 max-w-2xl mx-auto leading-relaxed">
          Many churches face the same challenges when it comes to keeping track of
          new believers and staying connected. Harvest App was built to help you
          close those gaps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white text-green-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;
