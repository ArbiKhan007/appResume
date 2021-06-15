import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 2rem;
  color: coral;
`;

function Reach() {
  return (
    <SocialMediaIcons>
      <a href="https://www.instagram.com/sam.is.here.1/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.facebook.com/arbi.khan.79/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://github.com/Arbikhan007/">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </SocialMediaIcons>
  );
}

export default Reach;
