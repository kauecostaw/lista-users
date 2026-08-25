import './User.css';

function User({ imagem, nome, idade, genero, email, telefone, empresa, cargo, cidade, estado }) {
    return (
        <div className="cartao">
            <img src={imagem} alt={nome} />

            <h2>{nome}</h2>

            <p>{idade} anos | {genero}</p>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
            <p>Empresa: {empresa}</p>
            <p>Cargo: {cargo}</p>
            <p>Cidade: {cidade} - {estado}</p>
        </div>
    );
}

export default User;