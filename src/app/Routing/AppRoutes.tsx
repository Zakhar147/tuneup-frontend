import SongList from '@pages/SongList';
import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const Registration = lazy(() => import('@pages/Registration'));

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path='/songs' element={<SongList />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
