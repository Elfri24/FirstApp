function Button() {
    return <button className="btn btn-primary">Clique ici</button>;
    
}

export default function app{
 return (
        <div className="container text-center mt-5">
            <h1>Bienvenue sur ma plateforme React ! 🚀</h1>
            <MyButton />
        </div>
    );
}

function (){
return (
       <div>
        <h2> Tous nos cours </h2>
        

            <select class="sm mx-2" aria-label="Small select example">
                <option selected>Categories</option>
                <option value="1">Langues</option>
                <option value="2">Musique</option>
                <option value="3">Technologies</option>
                <option value="2">Cuisine</option>
            </select>

            <select class="sm mx-2" aria-label="Small select example">
                <option selected>Niveau</option>
                <option value="1">Débutant</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Avancé</option>
            </select>

            <select class="form-select form-select-sm mx-2" aria-label="Small select example">
                <option selected>Format</option>
                <option value="1">En ligne</option>
                <option value="2">En presidentiel</option>
                <option value="3">Hybride</option>
            </select>

           <MyButton />
        </div>
    )
}
