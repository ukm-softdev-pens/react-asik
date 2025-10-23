import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

interface User {
  id?: string;
  nama: string;
  umur: number;
}

const Tugas3: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState<number | string>("");

  const usersCollection = collection(db, "users");

  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        nama: doc.data().nama,
        umur: doc.data().umur,
      })) as User[];
      setUsers(data);
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nama.trim() && umur) {
      await addDoc(usersCollection, { nama, umur: Number(umur) });
      setNama("");
      setUmur("");
    }
  };

  const handleUpdate = async (user: User) => {
    const newNama = prompt("Nama baru:", user.nama);
    const newUmur = prompt("Umur baru:", user.umur.toString());
    if (newNama && newUmur) {
      const userRef = doc(db, "users", user.id!);
      await updateDoc(userRef, { nama: newNama, umur: Number(newUmur) });
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "users", id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-blue-800 shadow-lg rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white-600">
        CRUD Firebase
      </h1>

      <form
        onSubmit={handleAdd}
        className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 w-28 focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition">
          Tambah
        </button>
      </form>

      {/* Daftar Data */}
      <ul className="space-y-3">
        {users.length > 0 ? (
          users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-3 hover:bg-gray-100 transition">
              <div>
                <p className="font-semibold text-gray-800">{user.nama}</p>
                <p className="text-gray-500 text-sm">{user.umur} tahun</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(user)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg transition">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id!)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">
                  Hapus
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">Belum ada data 😅</p>
        )}
      </ul>
    </div>
  );
};

export default Tugas3;
