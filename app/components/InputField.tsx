"use client";
import { useState } from 'react';

export default function InputField() {
  // 1. Buat state untuk menyimpan teks dari input, nilai awalnya string kosong ''
  const [inputText, setInputText] = useState('');

  // 2. Buat fungsi yang akan dijalankan setiap kali pengguna mengetik
  function handleChange(event) {
    // 'event.target.value' adalah teks yang ada di dalam kotak input
    setInputText(event.target.value);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h3>Ketik Sesuatu di Sini:</h3>
      {/* 3. Ikat state dan event handler ke elemen input */}
      <input
        type="text"
        value={inputText}      // Tampilan input dikontrol oleh state
        onChange={handleChange} // Setiap ada perubahan, panggil fungsi handleChange
        style={{ padding: '8px', width: '200px' }}
      />
      <hr style={{ margin: '1rem 0' }} />
      <p>
        <strong>Teks yang kamu ketik:</strong> {inputText}
      </p>
    </div>
  );
}