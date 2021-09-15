import "./style.css";
import { Link } from "react-router-dom";

function Card({ member }) {
  return (
    <div className="card">
      <h2 className="title">Dados Cadastrados</h2>
      <p className="sub">
        <span className="info">Apelido: {member.nick}</span>
      </p>
      <p className="sub">
        <span className="info">nome: {member.name}</span>
      </p>
      <p className="sub">
        <span className="info">E-mail: {member.email}</span>
      </p>
      <p className="sub">
        <span className="info">Endereço: {member.address}</span>
      </p>
      <p className="sub">
        <span className="info">CEP: {member.code}</span>
      </p>
      <Link to="/">
        <button className="btn">Voltar</button>
      </Link>
    </div>
  );
}
export default Card;
