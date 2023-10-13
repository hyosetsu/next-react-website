function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.url}</h3>
      </a>
    </article>
  )
}
/*
 function EachPost({ title, url }) {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}*/
/*export default function Posts() {
  return (
    <section>
      <h2>おすすめ記事</h2>
      <article>
        <a href="/blog/schedule">
          <h3>スケジュール管理と猫の理論</h3>
        </a>
      </article>
      <article>
        <a href="/blog/music">
          <h3>音楽が呼び起こす美味しいものの記憶</h3>
        </a>
      </article>
    </section>
  );
}*/
/*
export default function Posts() {
  const props1 = { title: '記事のタイトル1', url: 'post1.html' }
  const props2 = { title: '記事のタイトル2', url: 'post2.html' }

  return (
   <section>
    <h2>おすすめ記事</h2>
    <EachPost {...props1} />
    <EachPost {...props2} />
  )
} */

function Decoration(props) {
  return (
    <div style={{ color: 'red' }}>
      {props.children}
    </div>
  )
}
/*
function Decoration({ children }}) {
  return (
    <div style={{ color: 'red' }}>
      {children}
    </div>
  )
}*/

export default function Hero() {
  return (
    <Decoration>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
    </Decoration>
  )
}
