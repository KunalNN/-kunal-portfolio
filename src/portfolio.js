/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kunal Narwani",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kunal Narwani Portfolio",
    type: "website",
    url: "http://kunalnarwani.com/",
  },
};

//Home Page
const greeting = {
  title: "Kunal Narwani",
  logo_name: "KunalNarwani",
  nickname: "KunalNN",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1B6rKx0spOVcIbkQcuvcTt3C9qMC4sNUg/view?usp=share_link",
  portfolio_repository: "https://www.linkedin.com/in/kunal-narwani/",
  githubProfile: "https://github.com/KunalNN",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KunalNN",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kunal-narwani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Mail",
    link: "mailto:kunal10@icloud.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kunal_nar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Radboud University",
      subtitle: "Bachelor's Degree, Computer Science",
      logo_path: "radboud_logo.svg",
      alt_name: "Radboud University",
      duration: "Aug 2022 - Jan 2026",
      descriptions: [
        "⚡ Pursuing a Computer Science bachelor's degree with a focus on building scalable, production-ready software and intelligent systems.",
        "⚡ Coursework and projects span Data Analysis, Artificial Neural Networks, Artificial Intelligence, Software Development, Cluster Management, and Computational Complexity.",
        "⚡ Hands-on experience with Python, React, and modern development practices to deliver impactful solutions.",
      ],
      website_link: "https://www.ru.nl/en",
    },
    {
      title: "Victorious Kidss Educares",
      subtitle: "International Baccalaureate (IB) Diploma",
      logo_path: "victorious_logo.svg",
      alt_name: "Victorious Kidss Educares",
      duration: "Jan 2020 - May 2022",
      descriptions: [
        "⚡ Completed the IB Diploma Programme with a final grade of 37 and a strong STEM concentration.",
        "⚡ Higher Level coursework: Mathematics AA (6), Computer Science (7), and Business Management (6); Standard Level coursework: Physics (6), English (6), French (4).",
        "⚡ Developed collaborative, analytical, and leadership skills through classroom initiatives and co-curricular activities.",
      ],
      website_link: "https://victoriouskidsseducares.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Teaching assistant and outreach roles at Radboud University, complemented by past industry internships in machine learning and data science.",
  header_image_path: "At the office-amico.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "New Device Lab Teacher Assistant",
          company: "Radboud Faculty of Science",
          company_url: "https://www.ru.nl/en/faculty-of-science",
          logo_path: "radboud_logo.svg",
          duration: "Aug 2025 - Present",
          location: "Nijmegen, Gelderland, Netherlands • On-site",
          description:
            "Support hands-on New Device Lab sessions, mentor student teams, and ensure lab safety while applying skills in soldering, 3D modelling, embedded systems, IoT development, and project management.",
          color: "#d2232a",
        },
        {
          title: "International Calling Campaign Representative",
          company: "Radboud University",
          company_url: "https://www.ru.nl/en",
          logo_path: "radboud_logo.svg",
          duration: "Mar 2023 - Jul 2025",
          location: "Remote",
          description:
            "Guided prospective students through Radboud University's enrolment journey, answering questions and building confidence throughout the admissions process while honing strong communication skills.",
          color: "#d2232a",
        },
        {
          title: "Knowledge Based Artificial Intelligence Teaching Assistant",
          company: "Radboud University",
          company_url: "https://www.ru.nl/en",
          logo_path: "radboud_logo.svg",
          duration: "Aug 2025 - Present",
          location: "Nijmegen, Gelderland, Netherlands • On-site",
          description:
            "Assist with the Knowledge Based Artificial Intelligence course by facilitating tutorials, clarifying key AI concepts, and supporting student assessments with a focus on clear communication and academic success.",
          color: "#d2232a",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Future Internship",
          company: "Your Team Here",
          company_url: "mailto:kunal10@icloud.com",
          logo_path: "experience.svg",
          duration: "Available from 2026",
          location: "Open to global opportunities",
          description:
            "This spot is reserved for the next exciting internship. If you're building something meaningful and think I could help, let's start a conversation.",
          color: "#6C63FF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Showcasing a logistics optimization experience that blends heuristics, solvers, and intuitive visuals to deliver actionable packing plans.",
  avatar_image_path: "Programming-amico.svg",
};

// Hobbies Page
const hobbiesPage = {
  title: "Hobbies",
  subtitle:
    "Activities that keep me grounded outside of work and studies, reminding me to stay curious and playful.",
  hobbies: [
    {
      title: "Bouldering",
      descriptions: [
        "I have been bouldering consistently for a year, learning how to read routes and move with control.",
        "Topping 6c+ problems keeps me chasing new challenges and celebrating every small improvement.",
        "Whether indoors or on real rock, I love the mix of problem solving, strength, and community the sport offers.",
      ],
      image_path: "bouldering.svg",
      image_alt: "Illustration of a climber bouldering",
    },
    {
      title: "Road Cycling",
      descriptions: [
        "Weekend road rides help me explore new routes around the Netherlands and disconnect from screens.",
        "I enjoy tracking progress on longer climbs and experimenting with pacing during group rides.",
        "Maintaining the bike and dialing in fit has become a fun tinkering hobby of its own.",
      ],
      image_path: "roadbike.png",
      image_alt: "Illustration of a cyclist on a road bike",
    },
    {
      title: "Squash",
      descriptions: [
        "I used to play squash weekly and still love picking up a racquet whenever I can find a court.",
        "Fast-paced rallies sharpen footwork and reflexes in a way that complements my other sports.",
        "It's also a great excuse to reconnect with friends for quick, competitive matches after work.",
      ],
      image_path: "squash.png",
      image_alt: "Illustration of a squash player in action",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kunal_contact_me.mp4",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  emailSection: {
    title: "Email",
    subtitle: "kunal10@icloud.com",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+31 685806370",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nijmegen Centrum, Gelderland, Netherlands",
    locality: "Nijmegen",
    country: "Netherlands",
    region: "Gelderland",
    postalCode: "6511",
    streetAddress: "Nijmegen Centrum",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/LXqS9RstRdAHPrgs6",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  hobbiesPage,
  contactPageData,
};
