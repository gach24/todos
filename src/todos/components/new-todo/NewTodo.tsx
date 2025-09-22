'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { IoTrashOutline } from 'react-icons/io5';

import * as api from '@/todos/helpers';

import styles from './NewTodo.module.css';

export const NewTodo = () => {
  const router = useRouter();
  const [description, setDescription] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length !== 0) {
      await api.create(description);
      setDescription('');
      router.refresh();
    }
  };

  const onDelete = async () => {
    await api.del();
    router.refresh();
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className={`${styles.button} bg-sky-500 hover:bg-sky-700`}
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={onDelete}
        type="button"
        className={`${styles.button} bg-red-400 hover:bg-red-700`}
      >
        <IoTrashOutline />
        Delete Completed
      </button>
    </form>
  );
};
