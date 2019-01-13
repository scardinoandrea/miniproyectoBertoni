import {
  Injectable
} from '@angular/core';
import {
  Category
} from "../models/category";
import {
  Pet
} from "../models/pet";

@Injectable()
export class DatabaseService {

  constructor(){
    
  } 

  getPet(): Pet[] {
    return this.pets;
  }

  getCategory(): Category[] {
    return this.categories;
  }


  create(form) {

  }

  edit(id) {

  }

  deletePet(object){
    var index = this.pets.indexOf(object);
    this.pets.splice(index, 1); 
    return this.pets;
  }

  categories: Category[] = [{
      "id": 1,
      "nombre": "Fagaceae"
    },
    {
      "id": 2,
      "nombre": "Onagraceae"
    },
    {
      "id": 3,
      "nombre": "Asteraceae"
    },
    {
      "id": 4,
      "nombre": "Cyperaceae"
    },
    {
      "id": 5,
      "nombre": "Lamiaceae"
    },
    {
      "id": 6,
      "nombre": "Asteraceae"
    },
    {
      "id": 7,
      "nombre": "Fabaceae"
    },
    {
      "id": 8,
      "nombre": "Scrophulariaceae"
    },
    {
      "id": 9,
      "nombre": "Liliaceae"
    },
    {
      "id": 10,
      "nombre": "Ranunculaceae"
    },
    {
      "id": 11,
      "nombre": "Ranunculaceae"
    },
    {
      "id": 12,
      "nombre": "Physciaceae"
    },
    {
      "id": 13,
      "nombre": "Hydrophyllaceae"
    },
    {
      "id": 14,
      "nombre": "Hydrocharitaceae"
    },
    {
      "id": 15,
      "nombre": "Gentianaceae"
    },
  ]

  pets: Pet[] = [{
      "id": 1,
      "categoria": {
        "id": 13,
        "nombre": "Hydrophyllaceae"
      },
      "nombre": "Keane",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3","t4","t5"]
    },
    {
      "id": 2,
      "categoria": {
        "id": 1,
        "nombre": "Fagaceae"
      },
      "nombre": "Marcella",
      "fotoUrl": ["https://www.compasspoint.org/sites/default/files/images/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3","t4","t5"]
    },
    {
      "id": 3,
      "categoria": {
        "id": 13,
        "nombre": "Hydrophyllaceae"
      },
      "nombre": "Helaina",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3","t4","t5"]
    },
    {
      "id": 4,
      "categoria": {
        "id": 1,
        "nombre": "Fagaceae"
      },
      "nombre": "Vilhelmina",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1"]
    },
    {
      "id": 5,
      "categoria": {
        "id": 13,
        "nombre": "Hydrophyllaceae"
      },
      "nombre": "Tatiana",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3"]
     },
    {
      "id": 6,
      "categoria": {
        "id": 7,
        "nombre": "Fabaceae"
      },
      "nombre": "Gaye",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3"]
     },
    {
      "id": 7,
      "categoria": {
        "id": 1,
        "nombre": "Fagaceae"
      },
      "nombre": "Flem",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1"]
    },
    {
      "id": 8,
      "categoria":
      {
        "id": 9,
        "nombre": "Liliaceae"
      },
      "nombre": "Cassey",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1"]
    },
    {
      "id": 9,
      "categoria": {
        "id": 7,
        "nombre": "Fabaceae"
      },
      "nombre": "Dalston",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2"]
    },
    {
      "id": 10,
      "categoria": {
        "id": 9,
        "nombre": "Liliaceae"
      },
      "nombre": "Adelaide",
      "fotoUrl": ["http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png","http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" , "http://www.ensenadanoticias.com/wp-content/uploads/2018/11/test.png" ],
      "tags": ["t1","t2","t3","t4"]
    }
  ]

}
