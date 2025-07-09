import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '5rem' }}>
      {/* Berikan nilai untuk prop "judul" di sini */}
      <Header judul="Selamat Datang di Portofolioku!" />
      <Content content="Saya sedang belajar Next.js."/>
    </main>
  );
}