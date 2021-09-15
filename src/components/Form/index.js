import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

function Form({ setMember }) {
  const history = useHistory();
  const formSchema = yup.object().shape({
    nick: yup.string(),
    name: yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("Email Obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Senha é Obrigatorio"),
    repass: yup.string().required("Comfirmar a Senha é obrigatoria"),
    code: yup.string().required("É necessario o CEP"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const addNewMember = (data) => {
    setMember(data);
    history.push("/card");
  };

  return (
    <div className="container">
      <h1 className="title">Formulario</h1>
      <form className="form" onSubmit={handleSubmit(addNewMember)}>
        <input className="input" placeholder="Apelido" {...register("nick")} />
        <input
          className="input"
          placeholder="Nome Completo *"
          {...register("name")}
        />
        <input
          className="input"
          placeholder="E-mail *"
          {...register("email")}
        />
        <input
          className="input password"
          placeholder="Senha *"
          type="password"
          {...register("password")}
        />
        <input
          className="input password"
          placeholder="Mesma Senha *"
          type="password"
          {...register("repass")}
        />
        <input
          className="input"
          placeholder="Endereço *"
          {...register("address")}
        />
        <input className="input" placeholder="CEP *" {...register("code")} />

        <div>
          <input type="checkbox" name="term" />
          <label for="term">Li e aceito os termos da aplicação</label>
        </div>

        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
      <a className="client" href="#">
        Já tenho conta!
      </a>
    </div>
  );
}
export default Form;
