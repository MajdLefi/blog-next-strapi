async function getArticlesById(articleId: string) {
  const res = await fetch(`http://localhost:1337/api/articles/${articleId}`)

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return res.json()
}

export default async function Page({ params }: any) {
  const article = await getArticlesById(params.id)
  console.log(article.data);


  return <main>
    <div> {article.data.id}</div>
    <div> {article.data.attributes.title}</div>
    <div> {article.data.attributes.category}</div>
  </main>
}