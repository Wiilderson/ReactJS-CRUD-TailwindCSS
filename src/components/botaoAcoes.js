import React from "react"
import { useHistory } from "react-router"

export default function BotaoAcoes() {

    let history = useHistory()

    return (
        <div className="">
            <button
                type="cancel" onClick={() => history.push('/components/cadastro')}
                className="pr-4 font-medium text-indigo-600 hover:text-green-600"
            > Editar</button>

            <button
                type="cancel" onClick={() => history.push('/components/cadastro')}
                className="font-medium text-indigo-600 hover:text-red-600"
            > Excluir</button>

        </div >

    )
}