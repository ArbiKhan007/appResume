import styled from "styled-components";

const PrettyPara = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: coral;
`;

const PrettyHeart = styled.img`
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: rgb(120, 100, 255);
  animation-iteration-count: infinite;
`;

function MadeBy() {
  return (
    <>
      <PrettyPara>
        Made with{" "}
        <PrettyHeart
          src="https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif"
          alt="Pulsating Heart"
        ></PrettyHeart>{" "}
        by <a href="https://www.instagram.com/sam.is.here.1/">Shamsuzzoha</a>
      </PrettyPara>
    </>
  );
}

export default MadeBy;
