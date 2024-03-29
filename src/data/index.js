import gcpImage from "../Images/GCP.png";
import aWSImage from "../Images/Aws.png";
import mongoDBImage from "../Images/MongoDB.svg";
import awsLambda from "../Images/AwsLambda.png";
import awsApi from "../Images/AWSAPI.png";
import awsDynamo from "../Images/AwsDynamoDb.png";
import pythonImage from "../Images/Python.png";
import WeatherBigImage from "../Images/WeatherBig.png";
import WordlyBigImage from "../Images/WordlyBig.png";
import BrainBucketImage from "../Images/BrainBucket.png";
import TeslaBig from "../Images/TeslaBig.png";
import SpotifyBig from "../Images/SpotifyBig.png";
import GraphqlImage from "../Images/Graphql.png";
import NodeJsImage from "../Images/NodeJs.png";
import NextImage from "../Images/NextJs.png";
import ExpressJsImage from "../Images/ExpressJs.png";
import reactImage from "../Images/React.png";
import JavaImage from "../Images/Java.png";
import htmlImage from "../Images/Html.webp";
import cssImage from "../Images/Css.webp";

export const mypersonalDetails = [
  {
    text: "+1 5512298860",
    href: "tel:+15512298660",
    preText: "",
    target: undefined,
  },
  {
    text: "koundinyap",
    href: "https://www.linkedin.com/in/koundinyap/",
    preText: "LinkedIn://",
    target: "_blank",
  },
  {
    text: "koundinyapidaparthy2",
    href: "https://github.com/koundinyapidaparthy2",
    preText: "Github://",
    target: "_blank",
  },
  {
    text: "kp10566n@pace.edu",
    href: "mailto:kp10566n@pace.edu",
    preText: " ",
    target: "_blank",
  },
];

export const myExperienceData = [
  {
    companyName: "Paysfer",
    role: "Software Developer",
    date: " Nov,2023 - Present (USA)",
    points: [
      "As a full-stack engineer at Paysfer, I emphasized creating a single product setup including Venmo, PayPal, and Cash App Payment Integration using MernStack.",
      "Leveraged Algoila for customized searches depending on category and initialized multiple filters to address various scenarios for the e-commerce website.",
    ],
  },
  {
    companyName: "Hornblower Group",
    role: "Associate Software Developer",
    date: "  June,2022 - July,2023 (India)",
    points: [
      "Focused on Mern Stack Application with over two million lines of code. Utilized zoid package to develop a ticketing service platform used by companies like City Experience (Nyc Ferry, City Cruises, Niagara City Cruises) and Journey Beyond (American Queen Voyages, The Ghan)(B2B).",
      "Customized and optimized ticketing system functionalities using languages React, Graphql, Node, Zoid, Express and Aws resulting in more efficient ticketing process for both internal teams and external users.",
      "Engineered new features for the Maverick Helicopter ticketing service, ensuring a seamless onboarding experience for customers.",
      "Automated the mailing system by developing email templates for diverse businesses using the npm package Render Template. This implementation seamlessly generates HTML code into emails, incorporating relevant values for enhanced efficiency.",
    ],
  },
  {
    companyName: "Syscloud Software Group",
    role: "Frontend Software Developer",
    date: "June,2020 - June,2022 (India)",
    points: [
      "Collaborated on frontend application development using the React framework, extending reliable backup services to diverse clients and customers(B2C).",
      " Innovated by creating and designing a proprietary npm private package, encompassing customized styles and functionalities. Served as a lead developer for a period of 6 months, demonstrating leadership and expertise in the role.",
      "Developed reusable components in React, significantly optimizing the codebase and achieving a remarkable 30% reduction in overall code size.",
      "Built multiple GraphQL APIs to replace existing REST APIs, streamlining database interactions and simplifying the overall database architecture. ",
    ],
  },
];

export const mySkills = [
  {
    title: "Frontend",
    Skills: [
      "Html",
      "CSS",
      "JavaScript",
      "Typescript",
      "ReactJs",
      "Redux",
      "NextJs",
      "React Native",
    ],
  },
  {
    title: "Backend",
    Skills: ["Python", "NodeJs", "GraphQl", "RestApi"],
  },
  {
    title: "Database",
    Skills: [
      "Aws(DynamoDb, S3)",
      "MongoDB",
      "GCP( GCS ( Google Cloud Storage, Bigtable )",
      "Firebase Storage",
    ],
  },
  {
    title: "CICD",
    Skills: ["GitHub Actions", "GCP Cloud Build"],
  },
  {
    title: "Devops",
    Skills: [
      "Aws ( IAM, EC2, Lambda, Api Gateways, CDK, S3)",
      "GCP ( SAM, Compute Engine, GCF, Api gateway, GCS)",
    ],
  },
];

export const myProjects = [
  {
    name: "Brain Bucket",
    Stack: "(Stack - React, NodeJs, MongoDB, React Native)",
    date: "(Jan 2024 – Present)",
    points: [
      "Brain Bucket is a dynamic platform facilitating interaction between students and proficient mentors to solve assignments and language-related challenges.",
    ],
    website: {
      url: "https://brainbucket.netlify.app/signin",
      text: "brainbucket.netlify.app/signin",
    },
    github: [
      {
        text: "koundinyapidaparthy2/easybrain",
        url: "https://github.com/koundinyapidaparthy2/easybrain",
      },
      {
        text: "koundinyapidaparthy2/easybrainMain",
        url: "https://github.com/koundinyapidaparthy2/easybrainMain",
      },
    ],
  },
  {
    name: "Wordly",
    Stack: "(Stack - React, Aws Api Gateway, Lambda , DynamoDB)",
    date: "(Jan 2024 - Feb 2024)",
    points: [
      "Wordly is a game where the user has to guess the word. The game can take input between 5 and 8 letters. And the user gets input + 1 change to guess the word. ",
    ],
    website: {
      url: "https://master.dvbphcs860rrz.amplifyapp.com/",
      text: "master.dvbphcs860rrz.amplifyapp.com",
    },
    github: [
      {
        text: "koundinyapidaparthy2/wordly",
        url: "https://github.com/koundinyapidaparthy2/wordly",
      },
      {
        text: "koundinyapidaparthy2/wordly-backend",
        url: "https://github.com/koundinyapidaparthy2/wordly-backend",
      },
    ],
  },
  {
    name: "Weather App",
    Stack: " (Stack - React, RestApi ) ",
    date: "(Dec 2021 - Oct 2022)",
    points: [
      "Weather application that delivers 24/7 forecasts for the user's current location and allows seamless searching for weather details in specific cities.",
      "This application ensures users stay informed about real-time weather conditions, providing a convenient and user-friendly experience.",
    ],
    website: {
      url: "https://koundinyapidaparthy.github.io/weatherapp/",
      text: "koundinyapidaparthy.github.io/weatherapp",
    },
    github: [
      {
        text: "github://koundinyapidaparthy/weatherapp",
        url: "https://github.com/koundinyapidaparthy/weatherapp",
      },
    ],
  },
];

export const projectsImages = [
  BrainBucketImage,
  WordlyBigImage,
  WeatherBigImage,
  TeslaBig,
  SpotifyBig,
];
export const ProjectsInformation = [
  {
    headerLabel: "Brain Bucket",
    about:
      "Brain Bucket is a dynamic platform facilitating interaction between students and proficient mentors to solve assignments and language-related challenges.",
    languagesUsed: {
      labels: ["MongoDb", "NodeJs", "React"],
      images: [mongoDBImage, NodeJsImage, reactImage],
      key: 1,
    },
    link: "https://brainbucket.netlify.app/signin",
  },
  {
    headerLabel: "Wordly Game",
    about:
      "Wordly is a game where the user has to guess the word. The game can take input between 5 and 8 letters. And the user gets input + 1 change to guess the word.",
    languagesUsed: {
      labels: [
        "Api Gateway",
        "Aws Lambda",
        "Aws DynamoDB",
        "Python",
        "NodeJs",
        "React",
      ],
      images: [
        awsApi,
        awsLambda,
        awsDynamo,
        pythonImage,
        NodeJsImage,
        reactImage,
      ],
      key: 1,
    },
    link: "https://master.dvbphcs860rrz.amplifyapp.com/",
  },
  {
    headerLabel: "Weather App",
    about:
      "Weather application that takes your current location and displays the 24/7 forecast accordingly.",
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 1,
    },
    link: "https://koundinyapidaparthy.github.io/weatherapp/",
  },
  {
    headerLabel: "Tesla Clone",
    about:
      "The current Tesla official has been cloned. By cloning this, I was able to grasp the underlying CSS concepts. ",
    labels: ["React", "Css3", "Html5"],
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 2,
    },
    link: "https://koundinyapidaparthy.github.io/tesla-clone/",
  },
  {
    headerLabel: "Spotify Clone",
    about:
      "In my early days of web development, I created a Spotify clone to understand the basics of web development concepts",
    labels: ["React", "Css3", "Html5"],
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 3,
    },
  },
];

export const skillsImages = [
  reactImage,
  NextImage,
  NodeJsImage,
  ExpressJsImage,
  mongoDBImage,
  aWSImage,
  gcpImage,
  JavaImage,
  pythonImage,
  GraphqlImage,
];
export const languagesNames = [
  "ReactJs",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "Amazon Web Services",
  "Google Cloud Platform",
  "Java",
  "Python",
  "Graphql",
];
