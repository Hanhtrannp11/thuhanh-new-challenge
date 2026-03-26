const data = [
  {
    date: "Mar 26, 2026",
    title: "Started Learning Testing",
    content: [
      "Learned what is testing",
      "Understood basic concepts",
    ],
  },
  {
    date: "Mar 27, 2026",
    title: "HTML Basics",
    content: [
      "Learned HTML structure",
      "Built first simple page",
    ],
  },
];

export default function Training() {
  return (
    <div style={{ display: "flex", gap: "60px" }}>
      
      {/* LEFT TIMELINE */}
      <div style={{ width: "200px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "#e5e5e5",
          }}
        />

        {data.map((item, i) => (
          <div key={i} style={{ marginBottom: "40px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "6px",
                width: "10px",
                height: "10px",
                background: "#111",
                borderRadius: "50%",
              }}
            />
            <p style={{ marginLeft: "20px", fontSize: "12px", color: "#999" }}>
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontWeight: 500, marginBottom: "30px" }}>
          Training
        </h2>

        {data.map((item, i) => (
          <div key={i} style={{ marginBottom: "50px" }}>
            <h3 style={{ fontWeight: 500 }}>{item.title}</h3>

            <ul
              style={{
                marginTop: "10px",
                paddingLeft: "20px",
                color: "#555",
              }}
            >
              {item.content.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
