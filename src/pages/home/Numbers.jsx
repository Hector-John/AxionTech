import React from "react";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className=" padded h-[30vh]  ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Clients Satisfied */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
          <h3 className="text-4xl font-semibold text-blue-600">
            <CountUp end={120} duration={4} />
          </h3>
          <p className="text-gray-500 font-semibold ">Clients Satisfied</p>
        </div>

        {/* Completed Projects */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
          <h3 className="text-4xl font-semibold text-blue-600">
            <CountUp end={58} duration={3} />
          </h3>
          <p className="text-gray-500 font-semibold ">Completed Projects</p>
        </div>

        {/* Years in Business */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
          <h3 className="text-4xl font-semibold text-blue-600">
            <CountUp end={4} duration={2} />
          </h3>
          <p className="text-gray-500 font-semibold ">Years in Business</p>
        </div>

        {/* Successful Campaigns */}
        <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
          <h3 className="text-4xl font-semibold text-blue-600 ">
            <CountUp end={150} duration={4} />
          </h3>
          <p className="text-gray-500">Successful Campaigns</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
