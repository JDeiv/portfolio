import React from "react";

const stats = [
  {
    title: "Year of Experience",
    value: 1,
    
  },
  {
    title: "Projects done",
    value: 3,
    
  },
  {
    title: "Technologies used",
    value: 7,
    
  }
];

const Stats = () => {
  return (
  <div>
    {/* w-full flex items-center justify-between px-20 */}
    <div className={`w-full flex items-center justify-center xl:justify-between px-20 `}> 
      {stats.map((stat, index) => (
        <div className="mx-2 flex items-center " key={index}>
          <h1 className="text-5xl xl:text-6xl font-semibold">{stat.value}</h1>
          <p className={`max-w-[100px] text-[11px] px-2 xl:text-base xl:max-w-[150px] text-center }`}>{stat.title}</p>
        </div>
        
      ))}
    </div>

  </div>
  );
};

export default Stats;
