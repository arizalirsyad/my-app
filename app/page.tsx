import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import InputField from "./components/InputField"; // <-- Import komponen baru

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '5rem' }}>
      <Header judul="Selamat Datang di Portofolioku!" />
      <Content
        paragraf1="Saya sedang belajar konsep State di React."
        paragrap2="Ini adalah komponen interaktif pertama saya."
      />
      <Counter />
      <InputField /> {/* <-- Panggil komponen baru di sini */}
    </main>
  );
}