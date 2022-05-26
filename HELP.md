# Todo app

# Structure du code

    <pre>
    .
    ├── src                         # Dossiers des sources Service ,Entity et Extensions Twig
    │   ├── app                     # Dossiers contenants les modules 
    │   │    ├── shared             # module contenant les composants partages
    │   │    ├── core               # module contenant les composants de bases
    │   │    ├── backoffice         # module contenant les composants de back office
    │   │    └── frontoffice        # module contenant les composants de front office
    │   └── environments            # Dossiers contenants les configurations de environnements 
    │   ├── assets                  # Dossiers contenants les fichiers statics
    │   └── environments            # Dossiers contenants les configurations de environnements 
    ├── package.json                # Fichier contenant les dépendances  du projet
    ├── HELP.md                     # Fichier contenant  le guide pour les développeurs
    ├── README.md                   # Fichier contenant la documentation du projet
    └── README.md                   # Fichier contenant la documentation du projet
    </pre>

# Creation des components

    ng new todo-edacy
    ng g c shared/components/header
    ng g c shared/components/footer
  
    ng g c frontoffice/components/chat
    ng g c frontoffice/components/details
    ng g c frontoffice/components/home
    ng g c frontoffice/components/profile
    ng g c frontoffice/components/todo

# Creation des services

    ng generate service shared/services/task 
    ng generate service shared/services/chat 

# JSON SERVER

[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

    - installer Json Server
    npm install -g json-server
    - create a new file db.json on the root App 
       "tasks":[{ "id": 1, "title": "Faire les tests unitaires ", "status": "IN_PROGESS" }]
    - runner
     json-server --watch db.json
    - test here :  http://localhost:3000/tasks/1 

    

