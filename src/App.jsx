import { useState, useEffect } from "react";
import User from "./components/User";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => setUsers(dados.users));
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>

      {users.map((user) => (
        <User
          key={user.id}
          nome={user.firstName + " " + user.lastName}
          idade={user.age}
          genero={user.gender}
          email={user.email}
          telefone={user.phone}
          empresa={user.company.name}
          cargo={user.company.title}
          cidade={user.address.city}
          estado={user.address.stateCode}
          imagem={user.image}
        />
      ))}
    </div>
  );
}

export default App;