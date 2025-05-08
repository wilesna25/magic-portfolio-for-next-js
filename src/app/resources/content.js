import { InlineCode } from "@/once-ui/components";
import { language } from "gray-matter";

const person = {
  firstName: "ASAUCACOL",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Asociación de Autocultivadores de Cannabis de Colombia",
  avatar: "/images/avatar.jpg",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages : []
  // languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Inicio",
  title: `${person.name}`,
  description: `Uso adulto del cannabis,`,
  headline: <>ASAUCACOL</>,
  subline: (
    <>
      ASOCIACIÓN DE <InlineCode>AUTOCULTIVADORES</InlineCode> DE COLOMBIA
      <br />
    </>
  ),
};

const about = {
  label: "Nosotros",
  title: "Nosotros",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Somos un grupo de autocultivadores de diferentes regiones del país, dedicados a diversas profesiones y actividades además del autocultivo de cannabis unidos por diversas necesidades  y propósitos. Nuestra intención fundamental es incidir en la nueva política pública para el uso adulto del cannabis y velar por los derechos de los autocultivadores y usuarios, teniendo en cuenta la ley actual. Nos enfocamos en la sensibilización de la población colombiana para que el ejercicio de autocultivo sea el puente que ayude a disminuir el estigma y la falta de conocimiento de las propiedades del cannabis y su uso integral.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
Espacios weedfriendly para uso adulto del autocultivo
          </>,
          <>
Servicios de jardinería 
          </>,
          <>
Consulta médica y psicológica
          </>,
          <>
Asesoría jurídica para usuarios y empresarios
          </>,
          <>
Acceso a  catas y experiencias cannabicas en espacios weedfriendly
          </>,
          <>
Participación en eventos, ferias y congresos 
          </>,
          <>
Servicio de jardinería, consultoría especializada  y seguimiento continuo 
          </>,
          <>
Vitrina comercial para su emprendimiento y/o empresa en nuestra página web https://www.asaucacol.co
          </>,
          <>
Difusión de productos y/o servicios en nuestras redes sociales.
          </>,
          <>
Participación en eventos y ferias.
          </>,
          <>
Capacitación informal  por parte de las empresas aliadas.
          </>,
          <>
Soluciones logísticas para distribuidores, proveedores y fabricantes. https://dropi.co/ Contamos con alianzas comerciales con 6 transportadoras: envía, coordinadora, interapidisimo,   domina, 90 minutos y servientrega, gracias a este convenio institucional tenemos costos de fletes más bajos que las ofertadas en el mercado tradicional.
          </>,
          <>
Consulta y prescripción médica para porte y consumo de flores.
          </>,
          <>

Sannabis  https://www.sannabis.co/  30% de descuento, + 5 ml de aceite de oliva full espectro de cbd al 20%, control terapéutico cada 6 meses con el 50% de descuento.
          </>,
          <>
Valor: $150.000
          </>,
          <>

Asesoría especializada en el todo el proceso de autocultivo                                                         - Operador terapéutico en adicciones 
          </>,
          <>
Psicoeducación sobre drogas y prevención de sustancias psicoactivas 
Pautas en medios de comunicación
          </>,
          <> 
Red de aliados empresariales la cual brindan servicios y beneficios adicionales a nuestros miembros activos.
          </>,
          <>

      Linea  de atención psicológica Asaucacol
          </>,
          <>
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
           // height: 9,
           height: 6,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Vincúlate",
  title: "Vincúlate",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Servicios",
  title: "Servicios",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Tienda",
  title: "Tienda",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
