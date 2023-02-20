import { ReactNode } from 'react'
import { Header } from '@/components/core/layout/header/header'
import { Container } from '@/components/core/layout/container/container'
import { Footer } from '@/components/core/layout/footer/footer'
import styles from './layout.module.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
