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
