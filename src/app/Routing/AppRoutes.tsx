import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const Registration = lazy(() => import('@pages/Registration'));
const SongList = lazy(() => import('@pages/SongList'));
const Song = lazy(() => import('@pages/Song'))

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path='/songs' element={<SongList />} />
    <Route path="/songs/:id" element={<Song />} />
    
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
