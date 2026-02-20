import { useEffect } from "react";
import { getTasks } from "./api/tasks";

function App() {
  useEffect(() => {
    const testFetch = async () => {
      try {
        const tasks = await getTasks();
        console.log("FETCH SUCCESS ✅");
        console.log(tasks);
      } catch (error) {
        console.log("FETCH ERROR ❌");
        console.error(error.message);
      }
    };

    testFetch();
  }, []);

  return (
    <div>
      <h1>Testing Fetch...</h1>
      <p>Buka console ya 😏</p>
    </div>
  );
}

export default App;
