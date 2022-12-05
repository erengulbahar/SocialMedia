import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Body = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font-size: 62.5%;
}

body
{
  margin: 0 auto;
  overflow: hidden;
}
`;

export const Main = styled.div`
  height: 100vh;
  background: radial-gradient(
    100% 140% at 15%,
    #ffc448 0%,
    #ff9f4b 20%,
    #ff5297 55%,
    #955197 100%
  );
  position: relative;

  @media (max-width: 27em) {
    background: radial-gradient(
      120% 100% at 10% 15%,
      #ffc448 0%,
      #ff9f4b 30%,
      #ff5297 70%,
      #955197 100%
    );
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11.8rem;
  background: rgba(28, 4, 4, 0.6);
  padding: 2.4rem 16.7rem;

  @media (max-width: 27em) {
    padding: 0 5rem;
  }
`;

export const HeaderLogo = styled.img`
  width: 38rem;
  height: 100%;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const MobileHeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 27em) {
    display: inline-block;
    width: 6.4rem;
    height: 6.4rem;
  } ;
`;

export const DownloadButton = styled.button`
  background: linear-gradient(90deg, #ff5297 0%, #ffc448 100%);
  border-radius: 3.2rem;
  padding: 1.6rem 3.2rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const MobileMenuButton = styled.img`
  display: none;

  @media (max-width: 27em) {
    display: inline-block;
    width: 6.2rem;
    height: 6.2rem;
  }
`;

export const MainFlex = styled.div`
  margin: 0 auto;
  margin-top: 15rem;
  max-width: 130rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  @media (max-width: 27em) {
    margin-top: 8rem;
  }
`;

export const FirstFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ParagraphHeader = styled.p`
  font-family: "Leckerli One", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 10.8rem;
  color: white;
  z-index: 2;

  @media (max-width: 27em) {
    font-size: 5.6rem;
    width: 30rem;
    text-align: center;
    line-height: 6.4rem;
  }
`;

export const Paragraph = styled.p`
  width: 60rem;
  font-family: "Itim";
  font-style: normal;
  font-size: 3.2rem;
  line-height: 3.8rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10rem;
  z-index: 2;

  @media (max-width: 27em) {
    width: 27rem;
    font-size: 2.4rem;
    margin-bottom: 5rem;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  margin-bottom: 7rem;
  position: relative;

  @media (max-width: 27em) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;

export const ButtonIcon = styled.img`
  cursor: pointer;
  z-index: 2;

  @media (max-width: 27em) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const FirstDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.6rem 3.2rem;
  background: #ff5297;
  border-radius: 3.2rem;
  font-family: "Inter";
  font-style: normal;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 27em) {
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
  }
`;

export const SecondDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.6rem 3.2rem;
  background: transparent;
  border-radius: 3.2rem;
  font-family: "Inter";
  font-style: normal;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: white;
  border: 2px solid #ff5297;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 27em) {
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
  }
`;

export const ConnectDiv = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 27em) {
    justify-content: center;
    align-items: center;
  }
`;

export const TempParagraph = styled.div`
  font-family: "Itim";
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 38px;
  color: rgba(255, 255, 255, 0.85);
  z-index: 2;

  @media (max-width: 27em) {
    font-size: 2.6rem;
  }
`;

export const CirclesFirst = styled.img`
  position: absolute;
  top: 70rem;
  left: 29rem;

  @media (max-width: 27em) {
    width: 25rem;
    height: auto;
    top: 69rem;
    left: 9rem;
  }
`;

export const CirclesSecond = styled.img`
  position: absolute;
  top: 68.8rem;
  left: 29rem;

  @media (max-width: 27em) {
    width: 25rem;
    height: auto;
    top: 67.4rem;
    left: 9rem;
  }
`;

export const MainLogo = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 27em) {
    display: none;
  }
`;

const Animation = keyframes`
  from
  {
    opacity: 0
  }

  to
  {
    opacity: 1;
  }
`;

const FadeInUp = (ordinate) => keyframes`
  from
  {
    opacity: 0;
    top: ${ordinate}rem;
  }

  to
  {
    opacity: 1;
    top: ${ordinate - 4}rem;
  }

`;

export const FootprintFirst = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 22rem;
  left: 16rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 1.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 15rem;
    left: 3rem;
  }
`;

export const FootprintSecond = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 35rem;
  left: 20rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 1s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 22rem;
    left: 4rem;
  }
`;

export const FootprintThird = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 22rem;
  left: 28rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 2s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 17rem;
    left: 9rem;
  }
`;

export const FootprintFourth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 13rem;
  left: 36rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 2.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 13rem;
    left: 12rem;
  }
`;

export const FootprintFifth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 20rem;
  left: 46rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 3s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 17rem;
    left: 16rem;
  }
`;

export const FootprintSixth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 12rem;
  left: 56rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 3.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 13rem;
    left: 20rem;
  }
`;

export const FootprintSeventh = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 20rem;
  left: 66rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 4s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 18rem;
    left: 23rem;
  }
`;

export const FootprintEighth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 12rem;
  left: 78rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 4.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 13rem;
    left: 28rem;
  }
`;

export const FootprintNineth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 23rem;
  left: 85rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 18rem;
    left: 30rem;
  }
`;

export const FootprintTenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 19rem;
  left: 97rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 5.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    width: 4.4rem;
    height: auto;
    top: 16rem;
    left: 36rem;
  }
`;

export const FootprintEleventh = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 38rem;
  left: 92rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 6s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintTwelfth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 38rem;
  left: 104rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 6.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintThirteenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 55rem;
  left: 95rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 7s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    animation-delay: 6s;
    width: 4.2rem;
    height: auto;
    top: 23rem;
    left: 34rem;
  }
`;

export const FootprintFourteenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 50rem;
  left: 105rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 7.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintFifteenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 70rem;
  left: 100rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 8s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintSixteenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 67rem;
  left: 112rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 8.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintSeventeenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 82rem;
  left: 116rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 9s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const FootprintEigteenth = styled.img`
  position: absolute;
  width: 8rem;
  height: 10rem;
  top: 76rem;
  left: 127rem;
  animation-name: ${Animation};
  opacity: 0;
  animation-delay: 9.5s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const BubbleFirst = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  left: 67rem;
  animation-name: ${(prop) => FadeInUp(17)};
  opacity: 0;
  animation-delay: 4.2s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    animation-delay: 2.2s;
    animation-name: ${(prop) => FadeInUp(16)};
    left: 6rem;
  }
`;

export const BubbleSecond = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  left: 99rem;
  animation-name: ${(prop) => FadeInUp(18)};
  opacity: 0;
  animation-delay: 5.7s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    animation-delay: 6.2s;
    animation-name: ${(prop) => FadeInUp(18)};
    left: 32rem;
  }
`;

export const BubbleThird = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  left: 112rem;
  animation-name: ${(prop) => FadeInUp(66)};
  opacity: 0;
  animation-delay: 8.7s;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @media (max-width: 27em) {
    display: none;
  }
`;

export const MobileFootprintFirst = styled.img`
  display: none;

  @media (max-width: 27em) {
    display: block;
    position: absolute;
    top: 50rem;
    left: 105rem;
    animation-name: ${Animation};
    opacity: 0;
    animation-delay: 6.5s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    width: 3.2rem;
    height: auto;
    top: 25rem;
    left: 39rem;
  }
`;

export const MobileFootprintSecond = styled.img`
  display: none;

  @media (max-width: 27em) {
    display: block;
    position: absolute;
    top: 50rem;
    left: 105rem;
    animation-name: ${Animation};
    opacity: 0;
    animation-delay: 7s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    width: 2.6rem;
    height: auto;
    top: 32rem;
    left: 35rem;
  }
`;

export const MobileFootprintThird = styled.img`
  display: none;

  @media (max-width: 27em) {
    display: block;
    position: absolute;
    top: 50rem;
    left: 105rem;
    animation-name: ${Animation};
    opacity: 0;
    animation-delay: 7.5s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    width: 3rem;
    height: auto;
    top: 37rem;
    left: 39rem;
  }
`;
