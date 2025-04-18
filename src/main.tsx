import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AlphaTabViewer from './pages/AlphaTabViewer.tsx'
import AddSongForm from './pages/AddSongForm.tsx'
import SongPage from './pages/SongPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlphaTabViewer />
    {/* <AddSongForm /> */}
    {/* <SongPage/> */}
  </StrictMode>,
)
