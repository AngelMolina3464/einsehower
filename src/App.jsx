
import "./styles/root.css";
import "./styles/app.css";
import "./styles/detailsContainer.css";
import { Aside } from "./components/asideBar";
import { FirstWindow } from "./components/firstWindow";

function App() {
  return (
    <>
      <main className="appContainer">
        <Aside title={"Barra de Tareas"} />
        <FirstWindow title={"Matriz Eisenhower"} />
      </main>
    </>
  );
}

export default App;
