import {
  mobile,
  backend,
  creator,
  javascript,
  html,
  css,
  reactjs,
  redux,
  git,
  carrent,
  jobit,
  tripguide,
  reactpic,
  python,
  aisoft,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactpic,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Python",
    icon: python,
  },
 
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "AI Soft",
    icon: aisoft,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "AI Soft",
    icon: aisoft,
    iconBg: "#E6DEDD",
    points: [
      "Developing and deploying machine learning models using Python, TensorFlow, PyTorch, and Scikit-learn.",
      "Collaborating with cross-functional teams, including data scientists, engineers, and product managers, to build AI-driven solutions.",
      "Implementing and optimizing data preprocessing, feature engineering, and model evaluation techniques.",
      "Participating in code reviews and providing constructive feedback on machine learning algorithms, pipelines, and best practices.",
    ],
  },
  {
    title: "Django",
    company_name: "AI Soft",
    icon: aisoft,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to build scalable and secure backend solutions.",
      "Implementing RESTful APIs using Django REST Framework (DRF) and ensuring efficient database design.",
      "Participating in code reviews and providing constructive feedback on backend logic, security, and performance optimizations.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AI Soft",
    icon: aisoft,
    iconBg: "#E6DEDD",
    points: [
      'Developing and maintaining web applications using React.js for the frontend and Django REST Framework (DRF) for the backend.',
    "Collaborating with cross-functional teams, including designers, product managers, and other developers, to build scalable and high-performance full-stack applications.",
    "Implementing responsive UI components in React while ensuring seamless API integration with DRF.",
    "Participating in code reviews and providing constructive feedback on both frontend and backend implementations to enhance performance, security, and maintainability.",
    ],
  },
  {
    title: "Desktop Developement",
    company_name: "AI Soft",
    icon: aisoft,
    iconBg: "#E6DEDD",
    points: [
      "Building and maintaining cross-platform desktop applications using technologies like Electron, PyQt, or Tkinter.",
      "Designing user-friendly and responsive UI/UX for seamless desktop application experiences.",
      "Integrating databases, APIs, and system-level functionalities for robust and efficient desktop solutions.",
      "Optimizing performance, debugging issues, and ensuring compatibility across different operating systems (Windows, Linux).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
