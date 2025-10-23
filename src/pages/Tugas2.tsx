import "../App.css";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Tugas2() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const postsResponse = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = postsResponse.data;
        const uniqueUserIds = Array.from(new Set(posts.map((p) => p.userId)));
        const usersResponse = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        const allUsers = usersResponse.data;
        const postAuthors = allUsers.filter((u) =>
          uniqueUserIds.includes(u.id)
        );
        if (isMounted) {
          setUsers(postAuthors);
        }
      } catch {
        if (isMounted) setError("Gagal memuat data. Coba lagi.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return users;
    return users.filter((u) => u.name.toLowerCase().includes(term));
  }, [users, search]);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        UserFinder
      </h1>

      <div style={{ marginBottom: 12 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari berdasarkan nama..."
          aria-label="Pencarian nama"
          style={{
            width: "100%",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        />
      </div>

      {loading && <div style={{ padding: 8, color: "#555" }}>Memuat...</div>}
      {error && <div style={{ padding: 8, color: "#b91c1c" }}>{error}</div>}

      {!loading && !error && (
        <div>
          {filteredUsers.length === 0 ? (
            <div style={{ padding: 8, color: "#555" }}>tidak ada hasil</div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {filteredUsers.map((u) => (
                <li
                  key={u.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}>
                  <span style={{ fontWeight: 600 }}>{u.name}</span>
                  <span style={{ color: "#374151" }}>{u.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
