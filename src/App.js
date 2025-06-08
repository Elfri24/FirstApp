import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Appli() {
  return (

    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Bienvenue sur ma plateforme React ! 🚀</h2>
      <p>Pour plus d'informations</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

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

      </div>
      <div>
        <h2 >Calendrier - Juin 2025</h2>
        <table >
          <thead>
            <tr>
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sam</th>
              <th>Dim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
            </tr>
            <tr>
              <td>30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div class="card">
          <div class="row g-2">
            <div class="card-img-top opacity-50 ">
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Anglais Intensif</h5>
            <div class="d-flex justify-content-between">
              Maîtrisez l'anglais en 8 semaines avec notre méthode intensive.
            </div>
            <div class="d-flex justify-content-between">
              <a href="#"
                class="d-flex align-items-center text-decoration-none fw-bold">
              </a>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}


export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Clic />
      <Appli />
    <Appi />

        </div >
        );
}

function Clic() {
  return (
    <button>
      <p>Cliquez_moi</p>
    </button>

  );
  
}


const Card = () => {
  return (
    <div className="card">
      <h2>Article</h2>
      <p>Voici un texte.</p>
    </div>
  );
};



const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};




const items = ["Item 1", "Item 2"];

function Appi() {
  return <List items={items} />;
}




const Message = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Afficher Message</button>
      {visible && <p>Voici un message!</p>}
    </div>
  );
};

