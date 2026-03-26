import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif" }}>

        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h1>Thu Hanh</h1>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <main style={{ padding: "40px" }}>{children}</main>

      </body>
    </html>
  );
}
