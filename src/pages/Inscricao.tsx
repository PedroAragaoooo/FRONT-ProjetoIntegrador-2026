import { useLocation, useNavigate } from "react-router-dom";
import "../styles/inscricao.css";

export function Inscricao() {
  const location = useLocation();
  const navigate = useNavigate();
  const vaga = location.state?.vaga;

  return (
    <div className="inscricao-container">

      {/* BOTÃO VOLTAR */}
      <button
        className="voltar-btn"
        onClick={() => navigate("/vagas-abertas")}
      >
        ← Voltar para vagas
      </button>

      <h1>Inscrição</h1>

      {vaga ? (
        <div className="inscricao-card">
          <h2>{vaga.titulo}</h2>
          <p><strong>Local:</strong> {vaga.local}</p>
          <p><strong>Tipo:</strong> {vaga.tipo}</p>

          <form className="form">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <textarea placeholder="Por que você é um bom candidato?" />

            <button type="submit">Enviar inscrição</button>
          </form>
        </div>
      ) : (
        <p>Vaga não encontrada.</p>
      )}

    </div>
  );
}