import { Header } from './partials/Header'
import { Footer } from './partials/Footer'

export const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
