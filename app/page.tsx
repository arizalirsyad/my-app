"use client";
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Pastikan path ini sudah benar

export default function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const { data, error } = await supabase
      .from('todos')
      .select('*');
    if (error) console.error('Error fetching todos:', error);
    else setTodos(data);
  }

  // --- FUNGSI handleAddTodo SEKARANG MENGGUNAKAN SUPABASE ---
  async function handleAddTodo() {
    if (newTodo.trim() === '') return;

    // Kirim data baru ke tabel 'todos' di Supabase
    const { error } = await supabase
      .from('todos')
      .insert([{ task: newTodo }]);

    if (error) {
      console.error('Error adding todo:', error);
    } else {
      // Jika berhasil, panggil getTodos() lagi untuk me-refresh daftar
      await getTodos();
      // Kosongkan kembali input field
      setNewTodo('');
    }
  }

  // Fungsi handleDeleteTodo akan kita modifikasi selanjutnya
  function handleDeleteTodo(id) {
    alert("Fungsi Hapus akan kita hubungkan ke database selanjutnya!");
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h3>My To-Do List (from Database)</h3>
      
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
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f4f4f4', margin: '4px 0', padding: '8px', borderRadius: '4px' }}>
            <span>{todo.task}</span>
            <button onClick={() => handleDeleteTodo(todo.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}