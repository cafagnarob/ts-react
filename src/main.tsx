
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

// l'operatore '!' in Ts si chiama NON NULL ASSERTION OPERATOR serve a confermare a TS la non nullità di un metodo o di un elemento, in modo da non evidenziare come errore una riga potenzialmente problematica.in questo caso stiamo confermando a TS che l'elementi con ID 'root' esiste.