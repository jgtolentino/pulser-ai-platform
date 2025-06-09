import React from "react";

import BannerBadge from "./BannerBadge";

const AppTitle = () => {
  return (
    <div id="title" className="relative flex flex-col items-center">
      <div className="flex flex-row items-start">
        <span
          className="text-4xl font-bold text-slate-12 xs:text-5xl sm:text-7xl"
          style={{
            textShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          Pulser AI
        </span>
      </div>
      <div className="mt-3 text-center font-mono text-[0.7em] font-bold text-white">
        <div>
          <BannerBadge
            className="md:hidden"
            onClick={() => {
              window.open("https://pulser.ai/contact", "_blank");
            }}
          >
            Powered by Pulser 4.0 Multi-Tenant Orchestration
          </BannerBadge>
        </div>
        <div
          className="hidden md:flex"
          onClick={() => {
            window.open("https://pulser.ai/enterprise", "_blank");
          }}
        >
          <BannerBadge>Enterprise AI Agents with Pulser 4.0 - Autonomous Intelligence at Scale</BannerBadge>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;