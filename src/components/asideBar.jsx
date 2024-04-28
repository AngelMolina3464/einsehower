import { useState } from "react";
import { CreateTask } from "./createtask";

export const Aside = ({ title }) => {
  const [className, setClassName] = useState("hiddenContainer");

  const HandleClick__ChangeClass = () => {
    className == "showContainer"
      ? setClassName("hiddenContainer")
      : setClassName("showContainer");
  };

  return (
    <>
      <aside className={"asideContainer " + className}>
        <h2> {className == "showContainer" ? " 📄 Agregar Tarea" : "📄"} </h2>

        {className == "showContainer" ? <CreateTask /> : <></>}

        <br />
        <button className="buttonClear" onClick={HandleClick__ChangeClass}>
          {className == "hiddenContainer" ? "➡️" : "⬅️"}
        </button>
      </aside>
    </>
  );
};
