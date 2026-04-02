import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { VisaoGeral } from '../pages/dashboard/visaoGeral';
import { Candidatos } from '../pages/dashboard/candidatos';
import { Configuracoes } from '../pages/dashboard/configuracoes';
import { Vagas } from '../pages/dashboard/vagas';
import DefaultLayout from '../components/sidebar/DefaultLayout';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
              <Route path="/visao-geral" element={<VisaoGeral />} />
              <Route path="/candidatos" element={<Candidatos />} />
              <Route path="/vagas" element={<Vagas />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
          </Route>
          
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}