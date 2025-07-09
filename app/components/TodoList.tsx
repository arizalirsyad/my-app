"use client";
import { useState } from 'react';

export default function TodoList() {
  // State untuk menyimpan daftar tugas (array of strings)
  const [todos, setTodos] = useState(['Belajar React', 'Mengerjakan Proyek Portofolio']);

  // State untuk menyimpan teks dari input tugas baru
  const [newTodo, setNewTodo] = useState('');

  // Fungsi untuk menangani penambahan tugas baru
  function handleAddTodo() {
    // Jangan tambahkan jika input kosong
    if (newTodo.trim() !== '') {
      // Tambahkan tugas baru ke dalam array todos yang sudah ada
      setTodos([...todos, newTodo]);
      // Kosongkan kembali input field
      setNewTodo('');
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h3>My To-Do List</h3>

      {/* Form untuk menambah tugas baru */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Masukkan tugas baru"
        style={{ padding: '8px' }}
      />
      <button onClick={handleAddTodo} style={{ marginLeft: '8px', padding: '8px' }}>
        Tambah
      </button>

      {/* Daftar tugasnya */}
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ background: '#f4f4f4', margin: '4px 0', padding: '8px', borderRadius: '4px' }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}