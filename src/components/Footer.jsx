import data from "../textos.json";

export default function Footer() {
  const {contacto} = data;
  const {contenido, titulo} = contacto;
  return (
    <footer id='contacto'>
      <div className='contenedor-footer'>
        <a href='#'>{titulo}</a>
        <h2 className='titulo-final'>{contenido} </h2>
      </div>
    </footer>
  );
}