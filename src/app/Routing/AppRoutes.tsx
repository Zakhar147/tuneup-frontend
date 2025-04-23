import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
