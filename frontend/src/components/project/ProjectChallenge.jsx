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
    <section className="page-section page-section-muted">
      <div className="section-wrap grid items-start gap-12 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="mb-4 text-[30px] font-semibold tracking-tight text-slate-900">
            The Challenge
          </h2>

          <p className="section-lead max-w-md text-[16px] leading-7">
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
                className="surface-card flex items-start gap-3 px-4 py-3 shadow-sm"
            >
              {/* ICON */}
                <div className="mt-1 text-indigo-600">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                  <h3 className="text-[14px] font-semibold text-slate-900">
                  {item.title}
                </h3>
                  <p className="text-[14px] leading-6 text-slate-600">
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