import Container from "components/container"
import Hero from "components/hero"
import PostBody from "components/post-body"
export default function About() {
  return (
    <Container>
      <Hero title="CUBE" subtitle="About development activities" />
      <PostBody>
        <p>
          Cubeが得意とする分野はモノ作りです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
        </p>
        <h2>モノづくりで目指していること</h2>
        <p>
          モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
        </p>
        <p>
          単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるもやもやを言葉にして「問い」への答えを出していきます。
        </p>
        <h3>新しいことへのチャレンジ</h3>
        <p>
          今までと違うものを作ることで愛着が沸いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
        </p>
      </PostBody>
    </Container>
  );
}
