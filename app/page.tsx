export default function Home() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "50px" }}>Til 🚀</h1>

      <p style={{ color: "#aaa" }}>
        Share AI-powered funny images with the world
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="/upload" className="button button-primary">
          Upload Image 📸
        </a>

        <a href="/feed" className="button">
          Explore Feed 🔥
        </a>
      </div>
    </div>
  );
}