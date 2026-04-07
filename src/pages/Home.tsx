import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="home-left">
        <h1>
          TALENTOS<br />
          NÃO SE<br />
          ENCONTRAM.<br />
          SE <span>SELECIONAM</span>.
        </h1>
      </div>

      {/* LADO DIREITO - CONTEÚDO */}
      <div className="home-right">
        <p>
          Plataforma moderna de recrutamento com foco em dados, precisão e velocidade.
        </p>

        <div className="home-actions">
          <button onClick={() => navigate("/vagas-abertas")}>
            Ver Vagas
          </button>

        </div>

        <div className="home-cards">
          <div className="card">
            <h3>Dados</h3>
            <p>Decisões baseadas em informação real.</p>
          </div>

          <div className="card">
            <h3>Agilidade</h3>
            <p>Processos rápidos e eficientes.</p>
          </div>

          <div className="card">
            <h3>Controle</h3>
            <p>Você no comando de tudo.</p>
          </div>
        </div>
      </div>

    </div>
  );
}