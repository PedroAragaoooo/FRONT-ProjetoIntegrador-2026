import "../styles/sobre.css";

export function Sobre() {
  return (
    <div className="container">

      <section className="hero">
        <h1 className="titulo">Quem Somos</h1>
        <p className="texto">
          Somos especialistas em marketing digital e mídia online, focados em performance
          e resultados reais. Desde 2017, ajudamos marcas a crescer no ambiente digital
          com estratégias inteligentes, criativas e orientadas por dados.
        </p>
      </section>

      <section className="cardsSection">
        <div className="card">
          <h2 className="cardTitulo">Missão</h2>
          <p className="cardTexto">
            Gerar resultados reais através de estratégias digitais eficientes,
            conectando marcas ao público certo.
          </p>
        </div>

        <div className="card">
          <h2 className="cardTitulo">Visão</h2>
          <p className="cardTexto">
            Ser referência em performance digital e inovação no mercado.
          </p>
        </div>

        <div className="card">
          <h2 className="cardTitulo">Valores</h2>
          <p className="cardTexto">
            Transparência, inovação, foco em resultados e compromisso com o cliente.
          </p>
        </div>
      </section>
      
    </div>
  );
}