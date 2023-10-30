'use client'
import Link from "next/link";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";

export default function Titulo() {

  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext)

  function logout() {
    if (confirm("Confirma saída do sistema?")) {
      mudaId(null)
      mudaNome("")
    }
  }

  return (
    <nav className="navbar bg-dark">
      <div className="row container-fluid">
        <div className="col">
          <Link className="navbar-brand text-white" href="/">
            <img
              src="./logoCartaBranca.png"
              alt="Bootstrap"
              width="60"
              height="48"
              className="d-inline-block align-text-top float-start"
            />
            <h3 className="float-start mt-2 ms-2">Studio Carta Branca</h3>
          </Link>
        </div>
        <div className="col text-white">
          <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Profissional" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn bg-danger" type="button" id="button-addon2">Pesquisar</button>
          </div>
        </div>
        <div className="col">
          {clienteNome == "" ?
            <Link href="/login" className="text-white">
              <i className="bi bi-person-fill-up text-white ms-2 me-2 float-end fs-4"></i>
              <h4 className="float-end">Identifique-se</h4>
            </Link>
            :
            <div className="text-white" onClick={logout}>
              <i className="bi bi-person-fill-down text-white ms-2 me-2 float-end fs-4"></i>
              <h4 className="float-end">{clienteNome}</h4>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}
