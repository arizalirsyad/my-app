// 1. Definisikan "cetakan" untuk props kita menggunakan interface
interface ContentProps {
  content: string; // Kita bilang bahwa komponen ini WAJIB menerima prop bernama "judul" yang tipenya string
}

// 2. Terima props tersebut di dalam function
export default function Content({ content }: ContentProps) {
  // 3. Gunakan nilai dari prop di dalam JSX
  return (
    <header>
      <p>{content}</p>
    </header>
  );
}