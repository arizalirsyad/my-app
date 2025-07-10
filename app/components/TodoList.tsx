"use client";
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

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

  async function handleAddTodo() {
    if (newTodo.trim() === '') return;
    const { error } = await supabase
      .from('todos')
      .insert([{ task: newTodo }]);
    if (error) {
      console.error('Error adding todo:', error);
    } else {
      await getTodos();
      setNewTodo('');
    }
  }

  async function handleDeleteTodo(id) {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      // Optimistic UI update: Remove todo from local state immediately
      // This makes the UI feel faster than waiting for getTodos()
      setTodos(todos.filter((todo) => todo.id !== id));
    }
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