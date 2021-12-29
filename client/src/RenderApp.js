import { useState, useEffect } from "react";

function RenderApp() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/videos/")
      .then((Response) => Response.json())
      .then((data) => setDisplay(data));
  }, []);

  return { display };
}

export default RenderApp;
