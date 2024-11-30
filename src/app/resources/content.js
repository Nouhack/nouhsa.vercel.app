import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nouh",
  lastName: "Saiche",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Algiers", // IANA time zone identifier for Algeria

  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally share my thoughts on technology and the intersection of
      creativity and engineering, inspired by my experiences in software
      development and problem-solving.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Nouhack",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nouh-saiche-a02a33aa/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nouh.saiche@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Nouh, a Software engineer at <InlineCode>ITComp</InlineCode>, where I
      integrate systems and develop smart solutions.
      <br /> In my free time, I enjoy exploring personal tech projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
        Nouh Saiche is an Algeria-based software engineer with a knack for
        simplifying complex systems into efficient, practical solutions. His
        expertise bridges system integration, automation, and the seamless
        fusion of software and innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ITComp",
        timeframe: "September 2023 - Till now",
        role: "Mobile Developer / Full Stack Developer",
        achievements: [
          <>
            Recruited as a Mobile Developer where I developed a cross-platform
            mobile application. Currently, I'm working as a Full Stack Developer
            on a large-scale hospital management system. My role extends beyond
            just working with the technology, focusing more on problem-solving
            and engineering ideas that drive the overall architecture of the
            system.
          </>,
        ],
        images: [],
      },
      {
        company: "Hostaplast",
        timeframe: "September 2022 - August 2023",
        role: "Full Stack Web Developer / Helpdesk",
        achievements: [
          <>
            Led the development of a major vehicle maintenance management
            solution, which became one of the most complex and significant
            projects I’ve worked on. In addition to that, I contributed to the
            creation of a mobile app that integrated various functionalities. I
            also took on a Helpdesk role, providing support for both hardware
            and software issues within the company.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "January 2020 - April 2022",
        role: "Full Stack Developer / Mobile Developer",
        achievements: [
          <>
            During my time as a freelancer, I focused on developing my skills
            and broadening my expertise in software and mobile development. I
            contributed to a variety of projects, growing both my technical and
            problem-solving abilities while working on diverse client needs and
            challenges.
          </>,
        ],
        images: [],
      },
      {
        company: "Sadeem Informatique",
        timeframe: "June 2020 - July 2020",
        role: "Mobile Developer / Google Cloud Maintenance",
        achievements: [
          <>
            Worked as a Mobile Developer, helping to develop and maintain the
            mobile application. I was also responsible for managing the
            production version of the project on Google Cloud, ensuring smooth
            operations and support for the application’s deployment.
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
        name: "Mathematics Bachelor’s",
        description: (
          <>
            Completed a Bachelor's degree in Mathematics before transitioning
            into IT and software development.
          </>
        ),
      },
      {
        name: "Higher Technician in Database Management Systems (DBMS)",
        description: (
          <>
            Enrolled in a program focused on database management systems,
            enhancing my technical skills in this field.
          </>
        ),
      },
      {
        name: "Google Digital Garage",
        description: (
          <>
            Obtained a certification in Digital Marketing from Google Digital
            Garage, gaining a strong foundation in online marketing strategies.
          </>
        ),
      },
      {
        name: "Self-Taught IT & Computer Science",
        description: (
          <>
            Most of my IT and computer science knowledge comes from
            self-directed learning, where I continuously developed my skills in
            software development, web technologies, and systems architecture.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript",
        description: (
          <>
            Experienced in building dynamic web applications and handling
            asynchronous operations with JavaScript.
          </>
        ),
        images: [],
      },
      {
        title: "HTML",
        description: (
          <>
            Proficient in HTML5 to create structured, accessible, and semantic
            web pages.
          </>
        ),
        images: [],
      },
      {
        title: "CSS",
        description: (
          <>
            Skilled in CSS3 for styling responsive and aesthetically pleasing
            web pages, with a focus on modern techniques like Flexbox and Grid.
          </>
        ),
        images: [],
      },
      {
        title: "Rust",
        description: (
          <>
            Knowledgeable in Rust for building high-performance and reliable
            applications, especially in systems programming.
          </>
        ),
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>
            Experienced in building server-side rendered React applications
            using Next.js for optimized performance and scalability.
          </>
        ),
        images: [],
      },
      {
        title: "Node.js",
        description: (
          <>
            Skilled in server-side JavaScript development using Node.js to build
            fast, scalable applications.
          </>
        ),
        images: [],
      },
      {
        title: "React.js",
        description: (
          <>
            Proficient in React.js for building dynamic, reusable UI components
            and managing state effectively.
          </>
        ),
        images: [],
      },
      {
        title: "Express.js",
        description: (
          <>
            Experienced with Express.js for building RESTful APIs and handling
            HTTP requests in Node.js.
          </>
        ),
        images: [],
      },
      {
        title: "UI/UX Design",
        description: (
          <>
            Capable of designing user-centric interfaces and creating intuitive
            user experiences for web and mobile applications.
          </>
        ),
        images: [],
      },
      {
        title: "Linux",
        description: (
          <>
            Familiar with Linux environments for software development, server
            management, and system administration.
          </>
        ),
        images: [],
      },
      {
        title: "Docker",
        description: (
          <>
            Experienced in using Docker for containerizing applications and
            managing dependencies across environments.
          </>
        ),
        images: [],
      },
      {
        title: "Git",
        description: (
          <>
            Skilled in using Git for version control, collaborating with teams,
            and maintaining code integrity.
          </>
        ),
        images: [],
      },
      {
        title: "Firebase",
        description: (
          <>
            Proficient in using Firebase for building scalable mobile and web
            applications with real-time databases, authentication, and hosting.
          </>
        ),
        images: [],
      },
      {
        title: "SQL/NoSQL",
        description: (
          <>
            Experienced in both SQL and NoSQL databases like PostgreSQL,
            MongoDB, and MySQL for handling structured and unstructured data.
          </>
        ),
        images: [],
      },
      {
        title: "Odoo",
        description: (
          <>
            Familiar with using Odoo ERP for business management and custom
            module development.
          </>
        ),
        images: [],
      },
      {
        title: "Vim",
        description: (
          <>
            Skilled in using Vim as a text editor for efficient coding and
            system administration tasks.
          </>
        ),
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [],
      },
      {
        title: "Adobe XD",
        description: (
          <>
            Proficient in Adobe XD for creating high-fidelity designs and
            interactive prototypes.
          </>
        ),
        images: [],
      },
      {
        title: "Python",
        description: (
          <>
            Experienced in Python for backend development, scripting, and data
            processing tasks.
          </>
        ),
        images: [],
      },
      {
        title: "Django",
        description: (
          <>
            Skilled in Django for building robust and scalable web applications
            with Python.
          </>
        ),
        images: [],
      },
      {
        title: "WordPress",
        description: (
          <>
            Experienced with WordPress for building content management websites
            and custom plugin development.
          </>
        ),
        images: [],
      },
      {
        title: "FastAPI",
        description: (
          <>
            Proficient in using FastAPI to build fast and efficient REST APIs
            with Python.
          </>
        ),
        images: [],
      },
      {
        title: "CI/CD",
        description: (
          <>
            Experienced in setting up Continuous Integration and Continuous
            Deployment pipelines for automated testing and deployment.
          </>
        ),
        images: [],
      },
      {
        title: "Azure DevOps",
        description: (
          <>
            Skilled in using Azure DevOps for managing development workflows,
            version control, and CI/CD pipelines.
          </>
        ),
        images: [],
      },
      {
        title: "GitHub",
        description: (
          <>
            Proficient in GitHub for version control, collaboration, and code
            sharing.
          </>
        ),
        images: [],
      },
      {
        title: "Google Cloud",
        description: (
          <>
            Familiar with Google Cloud Platform for deploying and managing
            cloud-based applications and services.
          </>
        ),
        images: [],
      },
      {
        title: "Prisma ORM",
        description: (
          <>
            Experienced in using Prisma ORM for database management and
            efficient querying in JavaScript/TypeScript applications.
          </>
        ),
        images: [],
      },
      {
        title: "TailwindCSS",
        description: (
          <>
            Proficient in using TailwindCSS for building responsive,
            customizable, and maintainable UI components.
          </>
        ),
        images: [],
      },
      {
        title: "Bootstrap",
        description: (
          <>
            Experienced with Bootstrap for quickly building responsive and
            mobile-first web designs.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
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
