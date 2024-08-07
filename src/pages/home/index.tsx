import logo from "../../assets/logo.jpg";
import ballsdecoration from "../../assets/ballsdecoration.svg";
import {
  Container,
  ContainerImg,
  Content,
  Title,
  Text,
  ContainerTexts,
  Line,
  ContainerLinks,
  Link,
  SubTitle,
  SubTextBold,
  ContainerBalls,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <ContainerImg src={logo} alt="Logo Projeto" />
      <Content>
        <Title>
          Ambientes <SubTitle>únicos</SubTitle> para você!
        </Title>

        <ContainerTexts>
          <Text>
            Nós criamos ambientes <SubTextBold>exclusívos</SubTextBold> e{" "}
            <SubTextBold>únicos</SubTextBold>, com muito bom gosto e
            profissionalismo, investimos tempo e{" "}
            <SubTitle>dedicação no seu projeto</SubTitle>.{" "}
          </Text>
          <Text>
            Tenha <SubTitle>ambientes limpos</SubTitle> e bem decorados,
            transmitindo <SubTextBold>elegância</SubTextBold> e{" "}
            <SubTextBold>finesse</SubTextBold> para todo aquele que estiver ali.
          </Text>
        </ContainerTexts>

        <Line></Line>

        <ContainerLinks>
          <Link>Instagram</Link>
          <Link>Fale conosco</Link>
        </ContainerLinks>

        <ContainerBalls src={ballsdecoration} alt="Bols" />
      </Content>
    </Container>
  );
};

export default Home;
