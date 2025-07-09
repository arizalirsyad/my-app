"use client";
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState(['Belajar React', 'Mengerjakan Proyek Portofolio']);
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  // --- FUNGSI BARU ---
  // Fungsi untuk menghapus tugas berdasarkan posisinya (index)
  function handleDeleteTodo(indexToDelete) {
    // Buat array baru yang berisi semua todos KECUALI yang index-nya sama dengan indexToDelete
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    // Update state dengan array yang baru
    setTodos(newTodos);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h3>My To-Do List</h3>
      
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

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f4f4f4', margin: '4px 0', padding: '8px', borderRadius: '4px' }}>
            {/* Teks tugas */}
            <span>{todo}</span>
            
            {/* --- TOMBOL BARU --- */}
            <button onClick={() => handleDeleteTodo(index)} style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}