export const Footer__Bottom = ({ message }) => {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerContainer__Techs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/MenuLanguages%2Ffile_type_node_icon_130301%20(1).png?alt=media&token=2cd5b6c1-6a1b-4e91-841c-b79572e44671"
            alt="NodeJs"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/MenuLanguages%2Ffile_type_js_official_icon_130509%20(1).png?alt=media&token=f7f63804-14db-40c2-8a9e-f39a0c982032"
            alt="JS"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/MenuLanguages%2Ffile_type_css_icon_130661%20(1).png?alt=media&token=bbe382c7-d160-436b-aafb-305bc4a2c532"
            alt="CSS"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/MenuLanguages%2Freact_original_logo_icon_146374%20(1).png?alt=media&token=fc05e6bf-e235-4ae0-9d91-65ebe783651f"
            alt="React"
          />
        </div>
        <p>
          <i>{message}</i>
        </p>
      </footer>
    </>
  );
};
