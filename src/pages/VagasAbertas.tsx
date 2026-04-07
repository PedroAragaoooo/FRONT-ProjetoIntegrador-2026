import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/vagas.css";

type Vaga = {
  id: number;
  titulo: string;
  local: string;
  tipo: string;
  descricao: string;
  detalhes: string;
};

export function VagasAbertas() {
  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null);
  const navigate = useNavigate();

    const vagas: Vaga[] = [
      {
        id: 1,
        titulo: "Desenvolvedor Front-end",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Trabalhar com React e interfaces modernas.",
        detalhes: "Você irá atuar no desenvolvimento de interfaces modernas, focando em performance e experiência do usuário."
      },
      {
        id: 2,
        titulo: "Analista de Dados",
        local: "São Paulo",
        tipo: "Híbrido",
        descricao: "Análise de dados e geração de insights.",
        detalhes: "Responsável por interpretar dados e auxiliar na tomada de decisões estratégicas."
      },
      {
        id: 3,
        titulo: "Engenheiro de Dados",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Construção de pipelines e arquitetura de dados.",
        detalhes: "Atuação com ETL, modelagem de dados e integração de sistemas para suportar análises e aplicações."
      },
      {
        id: 4,
        titulo: "UX/UI Designer",
        local: "Rio de Janeiro",
        tipo: "Híbrido",
        descricao: "Criação de experiências digitais modernas.",
        detalhes: "Responsável por desenhar interfaces intuitivas e melhorar a jornada do usuário."
      },
      {
        id: 5,
        titulo: "Desenvolvedor Back-end",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Construção de APIs e sistemas escaláveis.",
        detalhes: "Atuação com Node.js, bancos de dados e arquitetura de sistemas robustos."
      },
      {
        id: 6,
        titulo: "DevOps Engineer",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Automação e infraestrutura em nuvem.",
        detalhes: "Responsável por CI/CD, containers, cloud e monitoramento de sistemas."
      },
      {
        id: 7,
        titulo: "Analista de Cybersegurança",
        local: "São Paulo",
        tipo: "Presencial",
        descricao: "Proteção de sistemas e dados.",
        detalhes: "Monitoramento de ameaças, análise de vulnerabilidades e implementação de segurança."
      },
      {
        id: 8,
        titulo: "Product Manager",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Gestão de produtos digitais.",
        detalhes: "Definição de roadmap, alinhamento com times e foco em entrega de valor ao usuário."
      },
      {
        id: 9,
        titulo: "QA Tester",
        local: "Remoto",
        tipo: "Freelance",
        descricao: "Testes e garantia de qualidade.",
        detalhes: "Execução de testes manuais e automatizados para garantir estabilidade do sistema."
      },
      {
        id: 10,
        titulo: "Desenvolvedor Mobile",
        local: "Remoto",
        tipo: "Full-time",
        descricao: "Apps Android e iOS.",
        detalhes: "Desenvolvimento com React Native ou Flutter, focando em performance e UX."
      }
    ];
  

  return (
    <div className="vagas-container">
<section className="vagas-header">
  <h1>
    VAGAS<br />
    <span>ABERTAS</span>
  </h1>
  <p>Escolha uma oportunidade e avance na sua carreira.</p>
</section>
      <section className="vagas-lista">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="vaga-card">

            <div className="vaga-topo">
              <h2>{vaga.titulo}</h2>

              <div className="vaga-tags">
                <span>{vaga.local}</span>
                <span>{vaga.tipo}</span>
              </div>
            </div>

            <p className="vaga-descricao">{vaga.descricao}</p>

            <button
              className="vaga-btn"
              onClick={() => setVagaSelecionada(vaga)}
            >
              Ver detalhes →
            </button>

          </div>
        ))}
      </section>

      {vagaSelecionada && (
        <div className="vaga-overlay">

          <div className="vaga-modal">

            <div className="modal-header">
              <button onClick={() => setVagaSelecionada(null)}>
                ← Voltar
              </button>
            </div>

            <h1>{vagaSelecionada.titulo}</h1>

            <div className="modal-tags">
              <span>{vagaSelecionada.local}</span>
              <span>{vagaSelecionada.tipo}</span>
            </div>

            <p className="modal-texto">
              {vagaSelecionada.detalhes}
            </p>

            <button
              className="inscrever-btn"
              onClick={() =>
                navigate("/inscricao", { state: { vaga: vagaSelecionada } })
              }
            >
              Me inscrever
            </button>

          </div>

        </div>
      )}
    </div>
  );
}