import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export default function BotaoTelaCadastro() {

    let history = useHistory()

    return (
        <div className="flex justify-between bg-gray-50 py-4 px-4">
            <h2 className="pt-2 font-medium text-gray-900">Lista de Usuários </h2>

            <Link to={"/components/cadastro"} className="px-4 py-2 rounded-md bg-green-500 hover:bg-indigo-400 text-red-50">
                Novo Usuario

            </Link>

            {/* <button className="px-4 py-2 rounded-md bg-green-500 hover:bg-indigo-400 text-red-50" onClick={() => history.push('/components/cadastro')}>
                Novo Usuario
            </button> */}
        </div >

    )
}