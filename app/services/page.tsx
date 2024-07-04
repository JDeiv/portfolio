import React from "react";


const services = [
{
  number: '01',
  tittle: 'Web Development',
  text:'Transformamos tus ideas en soluciones digitales. Ofrecemos desarrollo web completo, desde sitios informativos hasta aplicaciones complejas, utilizando las últimas tecnologías para garantizar rendimiento, seguridad y escalabilidad.'
},
{
  number: '02',
  tittle: 'Aumented Reality',
  text:'Sumérgete en el futuro con experiencias interactivas. Creamos aplicaciones de realidad aumentada que mejoran la interacción del usuario, proporcionando visualizaciones innovadoras y enriquecidas que integran el mundo digital con el real.'
},
{
  number: '03',
  tittle: 'Logo Desing',
  text:'Diseñamos sitios web atractivos y funcionales que capturan la esencia de tu marca. Nos enfocamos en la estética y la experiencia del usuario para asegurar que cada visita a tu sitio sea inolvidable y efectiva.'
},
{
  number: '04',
  tittle: 'UX/UI Desing',
  text:'Ponemos al usuario en el centro de nuestro diseño. Diseñamos interfaces intuitivas y atractivas que mejoran la usabilidad y la satisfacción del usuario, asegurando que cada interacción sea simple, agradable y eficiente.'
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
