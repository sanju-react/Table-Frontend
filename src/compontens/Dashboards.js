import React from "react";

const Dashboards = () => {
  return (
    <div className="border bg-[#FFFFFF] rounded-md  p-5 pb-12  h-[70vh]  w-full overflow-auto md:overflow-hidden ">
      <h2 className="text-xl font-semibold leading-7 text-gray-900">
        New Inquiry
      </h2>

      <div className="mt-10 grid  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div className="col-span-full md:col-span-1 sm:col-span-2">
          <label
            htmlFor="project"
            className="block text-base font-medium leading-6 text-gray-900"
          >
            Project Type
          </label>
          <div className="mt-2">
            <select
              id="project"
              name="project"
              autoComplete="project-type"
              className="block bg-[#F2F2F2]  w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            >
              <option>Select project type</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Complex</option>
            </select>
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-1">
          <label
            htmlFor="inquiry-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Inquiry Date*
          </label>
          <div className="mt-2">
            <input
              id="inquiry-date"
              name="inquiry-date"
              type="text"
              autoComplete="family-name"
              placeholder="01/01/2024"
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-1">
          <label
            htmlFor="inquiry-no"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Inquiry No.
          </label>
          <div className="mt-2">
            <input
              id="inquiry-no"
              name="inquiry-no"
              type="text"
              autoComplete="family-name"
              placeholder="0001"
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border  border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-1">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Enter Full Name
          </label>
          <div className="mt-2">
            <input
              id="fullname"
              name="fullname"
              type="text"
              autoComplete="address-level2"
              placeholder="Full Name"
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-1">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Mobile No
          </label>
          <div className="mt-2">
            <input
              id="mobile"
              name="mobile"
              type="text"
              autoComplete="address-level1"
              placeholder="Enter Contact No."
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2 md:col-span-1">
          <label
            htmlFor="WhatsApp-no"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            WhatsApp No
          </label>
          <div className="mt-2">
            <input
              id="WhatsApp-no"
              name="WhatsApp-no"
              type="text"
              autoComplete="postal-code"
              placeholder="Enter WhatsApp no."
              className="block w-full bg-[#F2F2F2] pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="address"
              placeholder="Enter your Address"
              className="block w-full bg-[#F2F2F2] pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-2">
          <label
            htmlFor="plant"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Plant Capacity
          </label>
          <div className="mt-2">
            <input
              id="plant"
              name="plant"
              type="text"
              autoComplete="plant-capacity"
              placeholder="Plant Capacity"
              className="block bg-[#F2F2F2] w-full pl-3 rounded-2xl border border-gray-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 w-[12vh] h-[12vh] rounded-full  ">
        <button className="bg-gray-900 w-full text-white p-2 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dashboards;
