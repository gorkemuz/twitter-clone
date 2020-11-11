import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from "./Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>Chaild</Button>
    </div>
  )
}
