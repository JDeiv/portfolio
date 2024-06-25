import React from "react";


const services = [
{
  number: '01',
  tittle: 'Web Development',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae esse porro dolor nam similique'
},
{
  number: '02',
  tittle: 'Aumented Reality',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae esse porro dolor nam similique'
},
{
  number: '03',
  tittle: 'Logo Desing',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae esse porro dolor nam similique'
},
{
  number: '04',
  tittle: 'UX/UI Desing',
  text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae esse porro dolor nam similique'
},
]
const Services = () => {
  return (
    <div>
      <div className="container w-auto flex flex-col xl:grid xl:grid-cols-2 items-center gap-8 ">
        {services.map((service, index) => {
          return (
            <div key={index} className="p-4 border-b-2 border-slate-300">
              <h1 className="text-5xl font-semibold text-primary text-outline hover:text-acent ">{service.number}</h1>
              <h1 className="text-3xl font-semibold py-2">{service.tittle}</h1>
              <p className="text-white/60">{service.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
