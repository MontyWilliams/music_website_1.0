import { Alex_Brush, Fredericka_the_Great, Monoton, Montserrat, Silkscreen} from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';

import NavContextProvider from '@/context/NavContext'

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush',
});

const monoton = Monoton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-monoton',
})

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const silkScreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkScreen',
})

export const metadata = {
  title: 'The Bad Jokes Band',
  description: 'Why you laghin?',
}

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
      <html lang="en">
      <link rel="icon" href="/assets/player/BadJokes Logo.png" sizes="any" />
        {/* This makes it easier to turn fonts into classNames */}
        <body className={`${alexBrush.variable} ${montserrat.variable} ${silkScreen.variable} overflow-x-hidden relative`}>
        <Header />
        {children}
        <Footer />
        </body>
      </html>
    </NavContextProvider>
    
  )
}
