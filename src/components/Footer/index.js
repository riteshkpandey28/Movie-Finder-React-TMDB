import react from "react";

// icons
import { SocialIcon } from "react-social-icons";

// styles
import { Wrapper, SocialMedia } from "./Footer.styles";

const Footer = () => (
  <Wrapper>
    Copyright &copy; Ritesh Kumar Pandey | 2022
    <SocialMedia>
      <SocialIcon
        url="https://www.linkedin.com/in/ritesh28p/"
        fgColor="#fff"
        target="blank"
        className="social-media"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://github.com/stupiloid-coder"
        fgColor="#fff"
        target="blank"
        className="social-media"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://www.instagram.com/simply__sstupid/"
        fgColor="#fff"
        target="blank"
        className="social-media"
        style={{ height: 40, width: 40 }}
      />
    </SocialMedia>
  </Wrapper>
);

export default Footer;
