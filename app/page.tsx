import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main style={{ 
        fontFamily: 'sans-serif', 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '5rem auto' 
    }}>
      <Header judul="Aplikasi Portofolio Pertamaku" />
      <TodoList />
    </main>
  );
}