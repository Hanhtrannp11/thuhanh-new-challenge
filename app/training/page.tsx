const data = [
  {
    date: "Day 1",
    title: "Started Learning Testing",
    content: [
      "Learned what is testing",
      "Understood basic concepts"
    ],
  },
  {
    date: "Day 2",
    title: "HTML Basics",
    content: [
      "Learned basic tags",
      "Built first simple page"
    ],
  },
];

export default function Training() {
  return (
    <div style={{ display: "flex" }}>

      {/* TIMELINE LEFT */}
      <div style={{
        width: "25%",
        borderRight: "1px solid #ddd",
        position: "relative",
        paddingRight: "20px"
      }}>
        <div style={{
          position: "absolute",
          left: "10px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "#ccc"
        }} />

        {data.map((item, i) => (
          <div key={i} style={{ marginBottom: "30px", paddingLeft: "20px", position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "-3px",
              top: "5px",
              width: "10px",
              height: "10px",
              background: "black",
              borderRadius: "50%"
            }} />
            <p style={{ fontSize: "12px", color: "#777" }}>{item.date}</p>
          </div>
        ))}
      </div>

      {/* CONTENT RIGHT */}
      <div style={{ width: "75%", paddingLeft: "30px" }}>
        <h2>Training Journey</h2>

        {data.map((item, i) => (
          <div key={i} style={{ marginBottom: "30px" }}>
            <h3>{item.title}</h3>
            <ul>
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
