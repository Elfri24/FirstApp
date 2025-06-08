function Button() {
    return <button className="btn btn-primary">Clique ici</button>;

}

export default function app(){
    return (
        <div className="container text-center mt-5">
            <h1>Bienvenue sur ma plateforme React ! 🚀</h1>
            <Button />
        </div>
    );
}



function Appli () {
  return (
        <div>
            <h1>Bienvenue sur ma plateforme React ! 🚀</h1>
            <Button />
        </div>
    );
}

function Choix() {
  return (
      <div>
        <h2> Tous nos cours </h2>
            <select>
                <option selected>Categories</option>
                <option value="1">Langues</option>
                <option value="2">Musique</option>
                <option value="3">Technologies</option>
                <option value="2">Cuisine</option>
            </select>

            <select>
                <option selected>Niveau</option>
                <option value="1">Débutant</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Avancé</option>
            </select>

            <select>
                <option selected>Format</option>
                <option value="1">En ligne</option>
                <option value="2">En presidentiel</option>
                <option value="3">Hybride</option>
            </select>

            <button />
        </div>
    );
}





import logo from './logo.svg';
import './App.css';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edniounioit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

 




function Button() {
    return(
       <button>Clique ici</button>
    );
    
}



