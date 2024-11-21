import { useEffect, useState } from "react";

export default function Search() {
  const [query, SetQuery] = useState("Pizza");

  useEffect(() => {
    function demo() {
      console.log("Demo Function executed");
    }
    demo();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
      />
      <button>HI</button>
    </div>
  );
}
