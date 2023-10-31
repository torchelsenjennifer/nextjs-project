"use client";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";
import Estrelas from "@/components/Estrelas";

export default function ItemProfissional(props) {
  const { clienteId } = useContext(ClienteContext);

  return (
    <div className="col">
      <div className="card">
        <img
          src={props.profissional.imagem}
          className="card-img-top"
          alt="profissional"
        />
        <div className="card-body">
          <h5 className="card-title">{props.profissional.titulo}</h5>
          <p className="card-text">{props.profissional.nome}</p>
          <p className="small">{props.profissional.especialidade}</p>
        </div>
        {clienteId && (
          <div className="ms-2 mb-2">
            <Estrelas
              soma={props.profissional.soma}
              num={props.profissional.num}
            />
			<div className="float-end me-2">
				<i class="bi bi-chat-dots-fill text-primary me-2" title="Ver Coment�rios"></i>
				<i class="bi bi-patch-plus-fill text-danger" title="Adicionar Coment�rios"></i>
			</div>
          </div>
        )}
      </div>
    </div>
  );
}
