import React, { } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import CadastroUser from "./components/cadastro";
//import users from "./baseAPI/API";
import ExibindoTabela from './components/tabela';


class App extends React.Component {



  render() {

    return (
      <BrowserRouter>

        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
          `}>

          <div className="flex flex-col" >
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                  {/* <Link to='/components/cadastro'>
                  </Link> */}

                  <Switch>
                    <Route path='/components/cadastro' exact component={CadastroUser} />
                    <Route path='/' exact component={ExibindoTabela} />

                  </Switch>
                  {/* <ExibindoTabela dados={teste.pessoas} /> */}



                </div>

              </div>
            </div>
          </div>
        </div >
      </BrowserRouter>

    )

  }

}

export default App


// export default function App() {





