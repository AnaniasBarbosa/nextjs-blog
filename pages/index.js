import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"
import Link from "next/link"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá, me chamo Ananias. Sou um desenvolvedor de software full stack. Você pode entrar em contato comigo aqui:{" "}
          <a href="https://www.linkedin.com/in/ananias-barbosa-68518b126/" target="_blank">
            LinkedIn
          </a>
        </p>
        <p>
          Caso queira conhecer um pouco mais do meu trabalho pode acessar meu gitHub:{" "}
          <a href="https://github.com/AnaniasBarbosa" target="_blank">
            GitHub
          </a>
          . Fique a vontade para explorar meus projetos.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
