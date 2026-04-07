import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { VagasAbertas } from '../pages/VagasAbertas';
import { Sobre } from '../pages/Sobre';
import { Inscricao } from '../pages/Inscricao';

import { VisaoGeral } from '../pages/dashboard/visaoGeral';
import { Candidatos } from '../pages/dashboard/candidatos';
import { Configuracoes } from '../pages/dashboard/configuracoes';
import { Vagas } from '../pages/dashboard/vagas';

import SiteLayout from '../components/navbar/DefaultLayout'; // navbar
import DashboardLayout from '../components/sidebar/DefaultLayout'; // sidebar

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROTAS DO SITE COM NAVBAR */}
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="vagas-abertas" element={<VagasAbertas />} />
          <Route path="inscricao" element={<Inscricao />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>

        {/* ROTAS DO DASHBOARD COM SIDEBAR */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="visao-geral" element={<VisaoGeral />} />
          <Route path="candidatos" element={<Candidatos />} />
          <Route path="vagas" element={<Vagas />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>

        {/* ROTA FALLBACK */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />

      </Routes>
    </BrowserRouter>
  );
}