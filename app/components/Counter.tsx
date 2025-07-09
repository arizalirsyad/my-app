// 1. Import 'useState' dari React
"use client"; // Ini adalah penanda penting di Next.js
import { useState } from 'react';

export default function Counter() {
  // 2. Deklarasikan state
  //    - 'hitungan' adalah variabel state-nya (nilai saat ini)
  //    - 'setHitungan' adalah fungsi untuk MENGUBAH nilai state
  //    - useState(0) berarti nilai awalnya adalah 0
  const [hitungan, setHitungan] = useState(0);

  // 3. Buat fungsi yang akan dijalankan saat tombol diklik
  function handleClick() {
    // Gunakan fungsi 'setHitungan' untuk memperbarui state
    setHitungan(hitungan + 1);
    console.log("Tombol diklik! Hitungan sekarang:", hitungan + 1);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <p>Kamu sudah menekan tombol ini sebanyak: {hitungan} kali</p>
      {/* 4. Tambahkan event handler 'onClick' ke tombol */}
      <button onClick={handleClick}>
        Tekan Aku
      </button>
    </div>
  );
}