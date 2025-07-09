import Header from "./components/Header";
import TodoList from "./components/TodoList"; // <-- Import komponen baru

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '5rem', maxWidth: '600px', margin: '5rem auto' }}>
      <Header judul="Aplikasi Portofolio Pertamaku" />
      <TodoList />
    </main>
  );
}