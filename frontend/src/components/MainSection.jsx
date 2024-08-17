import React from "react";
import { GoArrowRight } from "react-icons/go";

const MainSection = () => {
  return (
    <main className="text-center bg-white">
      <div className="bg-[#dadbf0]">
        <h1 className="text-4xl font-bold mb-8">How can we help?</h1>

        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-3 border border-black rounded-l"
          />
          <button className="p-3 rounded-r border border-black">
            <span className="material-icons">
              <GoArrowRight size={30} />
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">Branches</h2>
          <p>
            Abstract Branches lets you manage, version, and document your
            designs in one place.
          </p>
        </div>
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">Manage your account</h2>
          <p>
            Configure your account settings, such as your email, profile
            details, and password.
          </p>
        </div>
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">
            Manage organizations, teams, and projects
          </h2>
          <p>
            Use Abstract organizations, teams, and projects to organize your
            people and your work.
          </p>
        </div>
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">Manage billing</h2>
          <p>Change subscriptions and payment details.</p>
        </div>
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">Authenticate to Abstract</h2>
          <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
        </div>
        <div className="p-6 shadow rounded bg-[#f4f6f8]">
          <h2 className="font-semibold text-lg">Abstract support</h2>
          <p>Get in touch with a human.</p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
