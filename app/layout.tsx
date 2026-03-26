import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "sans-serif",
          maxWidth: "1000px",
          margin: "0 auto",
          color: "#333",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <h1
            style={{
              letterSpacing: "4px",
              fontWeight: 300,
              fontSize: "18px",
            }}
          >
            Thu Hanh
          </h1>

          <div
            style={{
              display: "flex",
              gap: "25px",
              fontSize: "14px",
              color: "#777",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/training">Training</Link>
            <Link href="/practices">Practices</Link>
            <Link href="/plans">Plans</Link>
          </div>
        </div>

        {/* CONTENT */}
        <main style={{ padding: "40px 0", lineHeight: "1.6" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
