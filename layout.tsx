import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'O pequeno universo do nosso amor ♡',description:'Primeiro eu contei os segundos para te encontrar. Depois, comecei a guardar os momentos que vivi com você.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
