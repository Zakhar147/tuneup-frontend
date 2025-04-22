import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css";
import Background from '@shared/ui/Background/Background';

//TODO: Создать роутинг и компонент Layout

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Background>
      <App />
    </Background>
  </StrictMode>,
)