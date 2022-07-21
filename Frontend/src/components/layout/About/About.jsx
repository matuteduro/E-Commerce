import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/matiasduro/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFBqTlQ6ywTug/profile-displayphoto-shrink_800_800/0/1648214773045?e=1663804800&v=beta&t=4n-tse0_YIdpp9gq1z3fMxu-VQk_uC7sMOsMtt-r5aQ"
              alt="Founder"
            />
            <Typography>Matias Duro</Typography>
            <Button onClick={visitLinkedin} color="primary">
              My Linkedin
            </Button>
            <span>
              This website was made for my Portfolio, I hope you like it 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">For more Info, check my socials</Typography>
            <a
              href="http://www.linkedin.com/in/matiasduro/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="http://www.linkedin.com/in/matiasduro/" target="blank">
              <WorkIcon className="portfolioSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
