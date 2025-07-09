// 1. Definisikan "cetakan" untuk props kita menggunakan interface
interface HeaderProps {
  judul: string; // Kita bilang bahwa komponen ini WAJIB menerima prop bernama "judul" yang tipenya string
}

// 2. Terima props tersebut di dalam function
export default function Header({ judul }: HeaderProps) {
  // 3. Gunakan nilai dari prop di dalam JSX
  return (
    <header>
      <h1>{judul}</h1>
    </header>
  );
}