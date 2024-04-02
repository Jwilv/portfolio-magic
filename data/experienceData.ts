import { ie, ledix, zest } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de mí",
    },
    {
      id: "experience",
      title: "Experiencia",
    },
    {
      id: "projects",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Ledix",
      icon: ledix,
      iconBg: "#383E56",
      date: "Marzo 2023 - Agosto 2023",
      points: [
        "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
        "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
        "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
        "Integracion y desarrollo de APIs.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "U.I Software",
      icon: ie,
      iconBg: "#E6DEDD",
      date: "Agosto 2023 - 2024",
      points: [
        "Integracion de tecnologias web y desarrollo de aplicaciones web.",
        "Planificacion de proyectos y creacion de interfaces de usuario.",
        "Implemtentacion de disenos responsivos.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Zest",
      icon: zest,
      iconBg: "#E6DEDD",
      date: "2024 - Actualidad",
      points: [
        "Dessarrollo de aplicaciones mobile",
        "Implementacion de patrones de componentes",
        "Metodologias agiles y dessarrollo de equipo",
      ],
    },
  ];

  

   

  
  export { experiences };