import { Footer__Bottom } from "./footer";
import { GridTable } from "./gridTable";

export const FirstWindow = ({ title }) => {
  return (
    <>
      <section className="firstWindowContainer">
        <h1>
          <img src="./logo.png" alt="logo"  width={30}/>
          {title}
          </h1>
        <p>
          <strong>
            <i>
              Herramienta de gestión de tareas que te ayuda a distinguir entre
              las tareas urgentes e importantes para que puedas organizar tu
              flujo de trabajo de manera eficiente
            </i>
          </strong>
        </p>

        <GridTable />
        <Footer__Bottom message={"Desarollado Por Molina Dev 2024"} />
      </section>
    </>
  );
};
