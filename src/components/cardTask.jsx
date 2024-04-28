export const CardTask = ({ dataFiltered }) => {
  return (
    <>
      <div className="cardContainer">
        {dataFiltered.map((element) => (
          <Card titulo={element.titulo} id={element.id} />
        ))}
      </div>
    </>
  );
};

const Card = ({ titulo, id }) => {
  return (
    <>
      <div className="card">
        <div key={id}>
          <strong>{titulo}</strong>
          <br />
          <abbr title={id}>
            <a href="#">🗃️</a>
          </abbr>{" "}
          <abbr title="Editar">
            <a href="#">✏️</a>
          </abbr>{" "}
          <abbr title="Eliminar">
            <a href="#">❌</a>
          </abbr>{" "}
        </div>
      </div>
    </>
  );
};
