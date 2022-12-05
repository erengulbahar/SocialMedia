import {
  ButtonFlex,
  ButtonIcon,
  CirclesFirst,
  CirclesSecond,
  ConnectDiv,
  DownloadButton,
  FirstDetailButton,
  FirstFlex,
  Header,
  HeaderLogo,
  Main,
  MainFlex,
  MainLogo,
  Paragraph,
  ParagraphHeader,
  SecondDetailButton,
  TempParagraph,
  FootprintFirst,
  FootprintSecond,
  FootprintThird,
  FootprintFourth,
  FootprintFifth,
  FootprintSixth,
  FootprintSeventh,
  FootprintEighth,
  FootprintNineth,
  FootprintTenth,
  FootprintEleventh,
  FootprintTwelfth,
  FootprintThirteenth,
  FootprintFourteenth,
  FootprintFifteenth,
  FootprintSixteenth,
  FootprintSeventeenth,
  FootprintEigteenth,
  BubbleFirst,
  BubbleSecond,
  BubbleThird,
  MobileHeaderLogo,
  MobileMenuButton,
  MobileFootprintFirst,
  MobileFootprintSecond,
  MobileFootprintThird,
} from "../styles/HomeStyles";
import HeaderLogo1 from "../../assets/headerlogo.svg";
import ExternalIcon from "../../assets/ExternalIcon.svg";
import DownloadIcon from "../../assets/DownloadIcon.svg";
import TwitterIcon from "../../assets/TwitterIcon.svg";
import TelegramIcon from "../../assets/TelegramIcon.svg";
import CircleFirst from "../../assets/CircleFirst.svg";
import CircleSecond from "../../assets/CircleSecond.svg";
import MainsLogo from "../../assets/MainLogo.svg";
import Footprint1 from "../../assets/Footprint1.svg";
import Footprint2 from "../../assets/Footprint2.svg";
import Footprint3 from "../../assets/Footprint3.svg";
import Footprint4 from "../../assets/Footprint4.svg";
import Footprint5 from "../../assets/Footprint5.svg";
import Footprint6 from "../../assets/Footprint6.svg";
import Footprint7 from "../../assets/Footprint7.svg";
import Footprint8 from "../../assets/Footprint8.svg";
import Footprint9 from "../../assets/Footprint9.svg";
import Footprint10 from "../../assets/Footprint10.svg";
import Footprint11 from "../../assets/Footprint11.svg";
import Footprint12 from "../../assets/Footprint12.svg";
import Footprint13 from "../../assets/Footprint13.svg";
import Footprint14 from "../../assets/Footprint14.svg";
import Footprint15 from "../../assets/Footprint15.svg";
import Footprint16 from "../../assets/Footprint16.svg";
import Footprint17 from "../../assets/Footprint17.svg";
import Footprint18 from "../../assets/Footprint18.svg";
import Bubble1 from "../../assets/Bubble1.svg";
import Bubble2 from "../../assets/Bubble2.svg";
import Bubble3 from "../../assets/Bubble3.svg";
import MobileIcon from "../../assets/MobileIcon.svg";
import MobileMenuIcon from "../../assets/MobileMenuIcon.svg";
import MobileFootprint1 from "../../assets/MobileFootprint1.svg";
import MobileFootprint2 from "../../assets/MobileFootprint2.svg";
import MobileFootprint3 from "../../assets/MobileFootprint3.svg";

function HomePage() {
  return (
    <Main>
      <Header>
        <HeaderLogo src={HeaderLogo1} alt="About website logo"></HeaderLogo>
        <DownloadButton>Download</DownloadButton>

        <MobileHeaderLogo
          src={MobileIcon}
          alt="About website logo"
        ></MobileHeaderLogo>

        <MobileMenuButton
          src={MobileMenuIcon}
          alt="About website logo"
        ></MobileMenuButton>
      </Header>

      <MainFlex>
        <FirstFlex>
          <ParagraphHeader>It pays to walk.</ParagraphHeader>

          <Paragraph>
            Help us keep the planet safe by walking and earning at the same
            time!
          </Paragraph>

          <ButtonFlex>
            <FirstDetailButton>
              Pitchdeck
              <ButtonIcon
                src={ExternalIcon}
                alt="About something info."
              ></ButtonIcon>
            </FirstDetailButton>

            <SecondDetailButton>
              Pitchdeck
              <ButtonIcon
                src={DownloadIcon}
                alt="About something info."
              ></ButtonIcon>
            </SecondDetailButton>
          </ButtonFlex>

          <ConnectDiv>
            <TempParagraph>Join us on:</TempParagraph>

            <ButtonIcon
              src={TwitterIcon}
              alt="About something info."
            ></ButtonIcon>

            <ButtonIcon
              src={TelegramIcon}
              alt="About something info."
            ></ButtonIcon>
          </ConnectDiv>

          <CirclesFirst
            src={CircleFirst}
            alt="About something info."
          ></CirclesFirst>

          <CirclesSecond
            src={CircleSecond}
            alt="About something info."
          ></CirclesSecond>
        </FirstFlex>

        <MainLogo src={MainsLogo}></MainLogo>
      </MainFlex>

      <FootprintSecond
        src={Footprint2}
        alt="About something info."
      ></FootprintSecond>

      <FootprintFirst
        src={Footprint1}
        alt="About something info."
      ></FootprintFirst>

      <FootprintThird
        src={Footprint3}
        alt="About something info."
      ></FootprintThird>

      <FootprintFourth
        src={Footprint4}
        alt="About something info."
      ></FootprintFourth>

      <FootprintFifth
        src={Footprint5}
        alt="About something info."
      ></FootprintFifth>

      <FootprintSixth
        src={Footprint6}
        alt="About something info."
      ></FootprintSixth>

      <FootprintSeventh
        src={Footprint7}
        alt="About something info."
      ></FootprintSeventh>

      <FootprintEighth
        src={Footprint8}
        alt="About something info."
      ></FootprintEighth>

      <FootprintNineth
        src={Footprint9}
        alt="About something info."
      ></FootprintNineth>

      <FootprintTenth
        src={Footprint10}
        alt="About something info."
      ></FootprintTenth>

      <FootprintEleventh
        src={Footprint11}
        alt="About something info."
      ></FootprintEleventh>

      <FootprintTwelfth
        src={Footprint12}
        alt="About something info."
      ></FootprintTwelfth>

      <FootprintThirteenth
        src={Footprint13}
        alt="About something info."
      ></FootprintThirteenth>

      <FootprintFourteenth
        src={Footprint14}
        alt="About something info."
      ></FootprintFourteenth>

      <FootprintFifteenth
        src={Footprint15}
        alt="About something info."
      ></FootprintFifteenth>

      <FootprintSixteenth
        src={Footprint16}
        alt="About something info."
      ></FootprintSixteenth>

      <FootprintSeventeenth
        src={Footprint17}
        alt="About something info."
      ></FootprintSeventeenth>

      <FootprintEigteenth
        src={Footprint18}
        alt="About something info."
      ></FootprintEigteenth>

      <MobileFootprintFirst
        src={MobileFootprint1}
        alt="About something info."
      ></MobileFootprintFirst>

      <MobileFootprintSecond
        src={MobileFootprint2}
        alt="About something info."
      ></MobileFootprintSecond>

      <MobileFootprintThird
        src={MobileFootprint3}
        alt="About something info."
      ></MobileFootprintThird>

      <BubbleFirst src={Bubble1} alt="About something info."></BubbleFirst>
      <BubbleSecond src={Bubble2} alt="About something info."></BubbleSecond>
      <BubbleThird src={Bubble3} alt="About something info."></BubbleThird>
    </Main>
  );
}

export default HomePage;
