import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
  Grid,
} from "@material-ui/core";

// Sample options for multi-select
const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

// Form component
const EditForm = () => {
  const [contactNumber, setContactNumber] = useState("5512298860");
  const [contactEmail, setContactEmail] = useState(
    "koundinya.pidaparthy@pace.edu"
  );
  const [altEmail, setAltEmail] = useState("koundinya.pidaparthy@gmail.com");
  const [linkedinLink, setLinkedinLink] = useState(
    "https://www.linkedin.com/in/koundinyap/"
  );
  const [githubLink, setGithubLink] = useState(
    "https://github.com/koundinyapidaparthy2"
  );

  const [education, setEducation] = useState([
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
  ]);

  const [experience, setExperience] = useState([
    {
      companyName: "City Experiences",
      location: "Los Angeles, CA",
      role: "Software Developer Intern",
      date: "May 2024 – Sept 2024",
      points: [
        "Developed a chatbot application using AWS Serverless APIs and React.",
        "Integrated ChatGPT into the ticketing platform to optimize the billing dashboard.",
      ],
      otherRoles: [
        {
          location: "Jaipur, India",
          role: "Associate Software Developer",
          date: "June 2022 – July 2023",
          points: [
            "Developed a MERN Stack ticketing service platform.",
            "Customized and optimized ticketing system functionalities.",
          ],
        },
      ],
    },
    {
      companyName: "Paysfer",
      location: "Remote",
      role: "Software Developer",
      date: "Nov 2023 – May 2024",
      points: [
        "Created a single product setup including Venmo, PayPal, and Cash App Payment Integration.",
        "Executed email and social media marketing campaigns.",
      ],
    },
  ]);

  const [skills, setSkills] = useState([
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
        "GCP(GCS, Bigtable)",
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
        "Aws (IAM, EC2, Lambda, Api Gateways, CDK, S3)",
        "GCP (SAM, Compute Engine, GCF, Api gateway, GCS)",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Brain Bucket",
      Stack: "(Stack - React, NodeJs, MongoDB, React Native)",
      date: "Jan 2024 – Present",
      points: [
        "Designed a platform to facilitate interaction between students and mentors.",
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
    // Add more projects as needed
  ]);

  const handleChange = (event) => {
    // Handle change logic
    console.log(event.target.name, event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Edit Profile</Typography>
      </Grid>

      {/* Contact Information */}
      <Grid item xs={12}>
        <Typography variant="h6">Contact Information</Typography>
        <TextField
          label="Contact Number"
          name="contactNumber"
          value={contactNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contact Email"
          name="contactEmail"
          value={contactEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Alternate Email"
          name="altEmail"
          value={altEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="LinkedIn Link"
          name="linkedinLink"
          value={linkedinLink}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="GitHub Link"
          name="githubLink"
          value={githubLink}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </Grid>

      {/* Education */}
      <Grid item xs={12}>
        <Typography variant="h6">Education</Typography>
        {education.map((edu, index) => (
          <div key={index}>
            <Typography variant="body1">{edu.university}</Typography>
            <Typography variant="body2">{edu.studied}</Typography>
            <Typography variant="body2">GPA: {edu.gpa}</Typography>
            <Typography variant="body2">
              Graduation Date: {edu.graduationDate}
            </Typography>
            <Typography variant="body2">Location: {edu.location}</Typography>
            <br />
          </div>
        ))}
      </Grid>

      {/* Experience */}
      <Grid item xs={12}>
        <Typography variant="h6">Experience</Typography>
        {experience.map((exp, index) => (
          <div key={index}>
            <Typography variant="body1">
              {exp.companyName} - {exp.role}
            </Typography>
            <Typography variant="body2">{exp.date}</Typography>
            <Typography variant="body2">Location: {exp.location}</Typography>
            {exp.points.map((point, idx) => (
              <Typography key={idx} variant="body2">
                • {point}
              </Typography>
            ))}
            {exp.otherRoles.map((role, idx) => (
              <div key={idx}>
                <Typography variant="body1">{role.role}</Typography>
                <Typography variant="body2">{role.date}</Typography>
                <Typography variant="body2">
                  Location: {role.location}
                </Typography>
                {role.points.map((point, id) => (
                  <Typography key={id} variant="body2">
                    • {point}
                  </Typography>
                ))}
              </div>
            ))}
            <br />
          </div>
        ))}
      </Grid>

      {/* Skills */}
      <Grid item xs={12}>
        <Typography variant="h6">Skills</Typography>
        {skills.map((skillSet, index) => (
          <div key={index}>
            <Typography variant="body1">{skillSet.title}</Typography>
            {skillSet.Skills.map((skill, idx) => (
              <Typography key={idx} variant="body2">
                • {skill}
              </Typography>
            ))}
            <br />
          </div>
        ))}
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Typography variant="h6">Projects</Typography>
        {projects.map((proj, index) => (
          <div key={index}>
            <Typography variant="body1">{proj.name}</Typography>
            <Typography variant="body2">{proj.Stack}</Typography>
            <Typography variant="body2">Date: {proj.date}</Typography>
            {proj.points.map((point, idx) => (
              <Typography key={idx} variant="body2">
                • {point}
              </Typography>
            ))}
            <Typography variant="body2">
              Website:{" "}
              <Link href={proj.website.url} target="_blank">
                {proj.website.text}
              </Link>
            </Typography>
            {proj.github.map((repo, idx) => (
              <Typography key={idx} variant="body2">
                GitHub:{" "}
                <Link href={repo.url} target="_blank">
                  {repo.text}
                </Link>
              </Typography>
            ))}
            <br />
          </div>
        ))}
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditForm;
