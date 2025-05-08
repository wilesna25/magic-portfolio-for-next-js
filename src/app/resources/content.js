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
/*   {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  }, */
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/"
   // link: "mailto:example@gmail.com",
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
  label: "NOSOTROS",
  title: "NOSOTROS",
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
    title: "NOSOTROS",
    description: (
      <>
        Somos un grupo de autocultivadores de diferentes regiones del país, dedicados a diversas profesiones y actividades además del autocultivo de cannabis unidos por diversas necesidades  y propósitos. Nuestra intención fundamental es incidir en la nueva política pública para el uso adulto del cannabis y velar por los derechos de los autocultivadores y usuarios, teniendo en cuenta la ley actual. Nos enfocamos en la sensibilización de la población colombiana para que el ejercicio de autocultivo sea el puente que ayude a disminuir el estigma y la falta de conocimiento de las propiedades del cannabis y su uso integral.
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "MISIÓN",
    institutions: [
      {
        name: "Nuestra misión",
        description: <>incidir en la nueva política pública de uso adulto del cannabis y velar por los derechos de los autocultivadores y usuarios, brindando información real y veraz sobre la planta, sensibilizar a la población Colombiana para que el ejercicio de autocultivo sea el puente para trabajar sobre la estigmatización y la falta de conocimiento del cannabis y su uso integral, para que entre todos podamos ejercer nuestros derechos y nos beneficiemos de una planta que ha sido prohibida.
        </>,
      }
/*       ,
      {
        name: "VISION DE ASAUCACOL",
        description: <>AQUI VISION.</>,
      }, */
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "VISION",
    skills: [
      {
        title: "Nuestra visión",
        description: <>Ser una asociación organizada y fortalecida para el 2025 con bases y prácticas provenientes directamente del autocultivo permitiendo trazabilidad, economía estable y apoyando el libre desarrollo a la personalidad. Teniendo claridad en nuestros derechos y deberes para contribuir la sana convivencia. </>,
        // optional: leave the array empty if you don't want to display images
/*         images: [
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
        ], */
      }
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
