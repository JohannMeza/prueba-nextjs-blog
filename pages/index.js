import Layout from "../components/Layout";
import utilStyles from '../styles/Utils.module.css';

export default function Home() {
  return (
    <Layout home title="Home" description="Descripcion del sitio web">
      <section className={utilStyles.headingMd}>
        <p>Your Self Introduction</p>
        <p>Este es un ejemplos del sitio web</p>
      </section>      
    </Layout>
  )
}
