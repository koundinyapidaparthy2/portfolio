import { takeLatest, put } from "redux-saga/effects";
import { INIT_APP } from "../actions/types";
import { initAppAction } from "../actions/index";

function* triggerInitSaga() {
  const contactNumber = 5512298860;
  const contactEmail = "koundinya.pidaparthy@pace.edu";
  const altEmail = "koundinya.pidaparthy@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/koundinyap/";
  const githubLink = "https://github.com/koundinyapidaparthy2";

  const mypersonalDetails = [
    {
      text: `+1 ${contactNumber}`,
      href: `tel:${contactNumber}`,
      preText: "",
      target: undefined,
    },
    {
      text: "koundinyap",
      href: linkedinLink,
      preText: "LinkedIn:// ",
      target: "_blank",
    },
    {
      text: "koundinyapidaparthy2",
      href: githubLink,
      preText: "Github:// ",
      target: "_blank",
    },
    {
      text: contactEmail,
      href: `mailto:${contactEmail}`,
      preText: "",
      target: "_blank",
    },
  ];

  const education = [
    {
      university:
        "Pace University, Seidenberg School of Computer Science and Information Systems",
      studied: "Master of Science (MS) in Computer Science",
      gpa: "3.90",
      graduationDate: "May 2025",
      location: "New York, NY",
    },
    {
      university: "Lovely Professional University",
      studied: "Bachelor of Technology (BTech) in Computer Science",
      gpa: "3.10",
      graduationDate: "May 2022",
      location: "Punjab, India",
    },
  ];

  const experience = [
    {
      companyName: "City Experiences",
      location: "Los Angeles, CA",
      role: "Software Developer Intern",
      date: " May 2024 – Sept 2024",
      points: [
        "Developed a chatbot application using AWS Serverless APIs and React to integrate into the existing ticketing platform, focusing on creating both the front end and back end to provide users with relevant information based on their inputs.",
        "Integrated ChatGPT into the ticketing platform to enable sellers to access last year's reports, sales data, and current trends, optimizing the billing dashboard by utilizing AWS SQS and enhancing the UI using React and Figma.",
      ],
      otherRoles: [
        {
          location: "Jaipur, India",
          role: "Associate Software Developer",
          date: " June 2022 – July 2023",
          points: [
            "Developed a MERN (MongoDB, Express, React, Node) Stack ticketing service platform, featuring extensive R e a ct code for City Experience (NYC Ferry, Niagara City Cruises).",
            "Customized and optimized ticketing system functionalities, such as reducing the loading time for the checkout page to 3 seconds, using React, GraphQL, Node, Express, Terraform, and AWS, resulting in a more efficient ticketing process for both internal teams and external users.",
          ],
        },
      ],
    },
    {
      companyName: "Paysfer",
      role: "Software Developer",
      location: "Remote",
      date: " Nov 2023 – May 2024",
      points: [
        `Created a single product setup including Venmo, PayPal, and Cash App Payment Integration using the MERN (MongoDB, Express, React, Node) stack to allow customers and resellers to easily make and receive payments on Paysfer’s e-commerce platform.`,
        `Executed email marketing campaigns using SendGrid, social media marketing campaigns via Twilio for WhatsApp, and managed Google Ads and Facebook Ads marketing efforts, resulting in a 15% increase in the number of customers and sellers on the platform.`,
      ],
    },
    {
      companyName: "Syscloud Software Group",
      location: "Chennai, India",
      role: "Frontend Software Developer",
      date: "June,2020 - June,2022",
      points: [
        `Led a team of 3 developers in designing and implementing a proprietary NPM private package containing materialized JavaScript components, encompassing customized styles and functionalities.`,
        `Developed reusable components in React, optimizing the codebase and achieving a 30% reduction in overall code size.`,
      ],
    },
  ];

  const skills = [
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

  const projects = [
    {
      name: "Brain Bucket",
      Stack: "(Stack - React, NodeJs, MongoDB, React Native)",
      date: "Jan 2024 – Present",
      points: [
        "Designed a dynamic platform to facilitate interaction between students and proficient mentors to solve assignments and language-related challenges, implementing a front end in React, React Native and Node JS and backend using MongoDB.",
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
      date: "Jan 2024 - Feb 2024",
      points: [
        `Implemented a word-guessing feature for the Wordly game using API Gateways that interfaces with AWS Lambda functions for backend operations, enabling read and write operations in AWS DynamoDB based on user input.`,
        `Stored user inputs in a centralized Redux storage system and managed frontend logic using React, allowing users to input words between 5 and 8 letters with an additional chance to guess the correct word.`,
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
      date: "Dec 2021 - Oct 2022",
      points: [
        `Created a weather application using React & RestAPIs that delivers 24/7 forecasts for the user's current location and allows seamless searching for weather details in specific cities to ensure users stay informed about real-time weather conditions.`,
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
  yield put(
    initAppAction.success({
      personalDetails: {
        contactNumber,
        contactEmail,
        altEmail,
        linkedinLink,
        githubLink,
        mypersonalDetails,
        education,
        experience,
        skills,
        projects,
      },
    })
  );
}

export default function* initAppSaga() {
  yield takeLatest(INIT_APP, triggerInitSaga);
}
