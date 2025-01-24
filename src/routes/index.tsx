import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../containers/MainLayout';
import { Blog, Comunidade, Contato, Home, Sobre, Solucoes } from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="sobre" element={<Sobre />} />
        <Route path="blog" element={<Blog />} />
        <Route path="solucoes" element={<Solucoes />} />
        <Route path="comunidade" element={<Comunidade />} />
        <Route path="contato" element={<Contato />} />

        {/* Página de erro */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
