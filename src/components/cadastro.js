import React, { useState } from "react"
import { useHistory } from "react-router"
import API from "../baseAPI/API"

export default function CadastroUser() {
    let history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: ""
    });

    const { name, role, email } = user;

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }

    const addUser = async e => {
        e.preventDefault()
        await API.post('/users', user)
        history.push('/')

    }
    return (

        <div className="mt-5 md:mt-0 md:col-span-2">
            <form method="POST" onSubmit={e => addUser(e)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-gray-50 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => onValueChange(e)} name="name" value={name}
                                    placeholder="Nome Completo"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Cargo
                                </label>
                                <input
                                    onChange={(e) => onValueChange(e)} value={role}
                                    type="text"
                                    name="role"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Ex: Analista"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Endereço Email
                                </label>
                                <input
                                    onChange={(e) => onValueChange(e)} value={email}
                                    type="text"
                                    name="email"
                                    id="email-address"
                                    autoComplete="email"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    placeholder="E-mail"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end">

                        <button
                            type="submit"
                            className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Salvar
                        </button>

                        <button onClick={() => history.push('/')}
                            type="cancel"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}
// }

