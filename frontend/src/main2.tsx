import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './WorkPage.tsx'
import WorkPage from './WorkPage.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <WorkPage />
    </StrictMode>,
)
