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
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          maxWidth: "1100px",
          margin: "0 auto",
          color: "#1a1a1a",
          background: "#fff",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 0",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <h1
            style={{
              letterSpacing: "6px",
              fontWeight: 300,
              fontSize: "16px",
            }}
          >
            Thu Hanh
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "13px",
              color: "#888",
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
        <main
          style={{
            padding: "60px 0",
            lineHeight: "1.8",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
