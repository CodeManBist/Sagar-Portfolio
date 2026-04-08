import { Clock, Shield, Layers } from "lucide-react";

const ProjectChallenge = () => {
  const challenges = [
    {
     icon: <Clock size={16} />,
     title: "Latency Bottlenecks:",
     desc: "Legacy APIs were taking >1500ms to fetch portfolio snapshots during peak trading hours.",
    },
    {
     icon: <Shield size={16} />,
     title: "Security Gaps:",
     desc: "Existing auth flow lacked the granular permissioning required for institutional sub-accounts.",
    },
    {
     icon: <Layers size={16} />,
     title: "Fragmentation:",
     desc: "Users had to manually reconcile data between three different internal dashboards.",
    },
  ]; 

  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[30px] font-semibold text-[#001C37] mb-4">
            The Challenge
          </h2>

          <p className="text-[#464555] text-[16px] leading-[26px] max-w-md">
            The client required a unified platform to replace fragmented legacy systems.
            The primary hurdle was synchronizing massive datasets across multiple international markets
            without compromising on sub-second UI responsiveness.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-4">

          {challenges.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 shadow-sm"
            >
              {/* ICON */}
              <div className="text-[#4F46E5] mt-1">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-[14px] text-[#001C37]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#464555] leading-[22px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectChallenge;