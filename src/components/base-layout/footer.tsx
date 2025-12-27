import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{ color: "$brandSecondary", marginBottom: "16px" }}>
          M.A. AXIS
        </h3>
        <p
          style={{
            maxWidth: "400px",
            color: "$textLowContrast",
            marginBottom: "24px",
          }}
        >
          Engenharia de precisão e inteligência tecnológica para transformar o
          impossível em sistemas de alta performance.
        </p>
        <S.Copyright>
          © {new Date().getFullYear()} M.A. AXIS - Todos os direitos reservados.{" "}
          <br />
          M.A. Consultoria em Tecnologia Ltda - CNPJ: 61.580.959/0001-38
        </S.Copyright>
      </div>
    </S.FooterContainer>
  );
};
