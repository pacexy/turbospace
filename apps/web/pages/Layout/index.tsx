import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
