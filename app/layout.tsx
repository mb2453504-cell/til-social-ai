import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>
        <nav>
          <div>Til 🚀</div>

          <div>
            <a href="/">Home</a>
            <a href="/upload">Upload</a>
            <a href="/feed">Explore</a>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}