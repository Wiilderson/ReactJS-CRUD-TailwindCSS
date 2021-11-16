
import React from "react";

import api from "../baseAPI/API";
import BotaoTelaCadastro from "./botaoTelaCadastro";
import { Link } from "react-router-dom";


class ExibindoTabela extends React.Component {



  state = {
    pessoas: []
  }

  async componentDidMount() {

    const response = await api.get('/users')
    this.setState({
      pessoas: response.data
    })

  }

  deleteUser = async id => {
    await api.delete(`/users/${id}`);
    this.componentDidMount();
  };


  render() {
    const teste = this.state


    return (
      <div >
        <BotaoTelaCadastro />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nome
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                E-mail
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cargo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teste.pessoas.map((props) => (
              <tr key={props.email}>
                {console.log(props.dados)}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {/* <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={props.image} alt="" />
                    </div> */}
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{props.name}</div>
                      {/* <div className="text-sm text-gray-500">{props.email}</div> */}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{props.email}</div>
                  {/* <div className="text-sm text-gray-900">{props.title}</div> */}
                  {/* <div className="text-sm text-gray-500">{props.department}</div> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{props.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* <BotaoAcoes /> */}

                  <Link to={`/components/editarUsers/${props.id}`} className="pr-4 font-medium text-indigo-600 hover:text-green-600">
                    Editar

                  </Link>

                  {/* <Link to={`/components/modal/${props.id}`}
                    className="font-medium text-indigo-600 hover:text-red-600">

                    Excluir

                  </Link> */}


                  <button className="font-medium text-indigo-600 hover:text-red-600" onClick={() => this.deleteUser(props.id)}>
                    Excluir
                  </button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    )

  }
}
// }

export default ExibindoTabela;