import Link from "next/link";
import Layout from "../../components/Layout";

export default function index({data = []}) {
  return (
    <Layout>
      <h1>Lista de blog</h1>
      {data.map(({id, title, body}) => (
        <div key={id}>
          <Link href={`/blog/${id}`}><h3>{id} - {title}</h3></Link>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return { props: {data} }
  } catch (err) {
    console.log(err)
  }
}