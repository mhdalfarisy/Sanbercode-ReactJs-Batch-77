import { useState } from "react";

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/seed/post1/400/300",
    title: "Belajar JavaScript Dasar",
    content:
      "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi lebih interaktif dan dinamis. Dengan JavaScript, kamu bisa mengelola event, memanipulasi DOM, serta berkomunikasi dengan server menggunakan API. Pemahaman dasar seperti variabel, function, looping, dan conditional sangat penting sebelum masuk ke framework seperti React atau Vue.",
    publish: true,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/post2/400/300",
    title: "Mengenal React JS",
    content:
      "React adalah library JavaScript yang dikembangkan untuk membangun user interface berbasis komponen. Dengan React, developer dapat membuat UI yang reusable, efisien, dan mudah dikelola. Konsep penting dalam React meliputi state, props, lifecycle, serta penggunaan hooks seperti useState dan useEffect untuk mengatur logika aplikasi.",
    publish: true,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/post3/400/300",
    title: "Pengenalan Node.js",
    content:
      "Node.js memungkinkan JavaScript berjalan di sisi server menggunakan engine V8 dari Chrome. Dengan Node.js, kamu dapat membangun REST API, sistem backend, hingga aplikasi real-time seperti chat app. Node.js sangat populer karena menggunakan satu bahasa yang sama untuk frontend dan backend.",
    publish: false,
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/post4/400/300",
    title: "Belajar Express JS",
    content:
      "Express adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi backend dan API dengan cepat. Express menyediakan fitur routing, middleware, serta kemudahan dalam menangani request dan response. Framework ini sangat cocok digunakan untuk membangun RESTful API yang scalable.",
    publish: true,
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/post5/400/300",
    title: "Database MongoDB",
    content:
      "MongoDB adalah database NoSQL yang menyimpan data dalam bentuk dokumen JSON (BSON). Database ini sangat fleksibel karena tidak memerlukan skema yang kaku seperti database relasional. MongoDB sering digunakan bersama Node.js karena kemudahan integrasi dan performa yang baik untuk aplikasi modern.",
    publish: false,
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/post6/400/300",
    title: "Deploy Aplikasi Web",
    content:
      "Deployment adalah proses menempatkan aplikasi ke server agar dapat diakses oleh pengguna secara online. Proses ini melibatkan build aplikasi, konfigurasi server, serta penggunaan layanan cloud seperti VPS atau platform seperti Vercel dan Netlify. Deployment yang baik memastikan aplikasi berjalan stabil, aman, dan memiliki performa yang optimal.",
    publish: true,
  },
];

function PostContainer() {
  const [keyword, setKeyword] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  function handleSubmit(e) {
    e.preventDefault();
    const result = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase()) ||
        post.content.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredPosts(result);
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Post Container</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Cari post..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Cari
        </button>
      </form>

      {filteredPosts.length === 0 && (
        <p style={styles.noResult}>Tidak ada post yang ditemukan.</p>
      )}

      <div style={styles.grid}>
        {filteredPosts.map((post) => (
          <div key={post.id} style={styles.card}>
            <img src={post.image} alt={post.title} style={styles.image} />
            <div style={styles.cardBody}>
              <h2 style={styles.title}>{post.title}</h2>
              <p style={styles.content}>{post.content}</p>
              <span
                style={{
                  ...styles.publishBadge,
                  color: post.publish ? "#1d6ae5" : "#e53e3e",
                  borderColor: post.publish ? "#1d6ae5" : "#e53e3e",
                }}
              >
                {post.publish ? "Published" : "Unpublished"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "24px 16px",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "16px",
    color: "#1a202c",
  },
  form: {
    display: "flex",
    gap: "8px",
    marginBottom: "24px",
  },
  input: {
    flex: 1,
    padding: "10px 14px",
    fontSize: "15px",
    border: "1px solid #cbd5e0",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "15px",
    backgroundColor: "#3182ce",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  noResult: {
    color: "#718096",
    fontStyle: "italic",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#2d3748",
  },
  content: {
    fontSize: "14px",
    color: "#4a5568",
    lineHeight: "1.6",
    marginBottom: "12px",
  },
  publishBadge: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "600",
    border: "1px solid",
    borderRadius: "4px",
    padding: "2px 10px",
  },
};

export default PostContainer;
