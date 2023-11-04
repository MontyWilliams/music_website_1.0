import { Alex_Brush, Montserrat} from 'next/font/google'
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush',
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'The Bad Jokes Band',
  description: 'Why you laghin?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* This makes it easier to turn fonts into classNames */}
      <body className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
