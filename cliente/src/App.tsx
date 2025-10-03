import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { useAuth } from "@clerk/clerk-react";

interface DataInterface {
  message: string;
}

function App() {
  const [data, setData] = useState<DataInterface | null>(null);

  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const response = await fetch("http://localhost:3000", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const json: DataInterface = await response.json();
        setData(json);
        console.log(json.message);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Form />
      <div> {data && <p>{data.message}</p>}</div>
    </>
  );
}

export default App;
