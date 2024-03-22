export interface Details {
    name : String,
    height : number,
    weight : number,
    types : typesContent[]
    order : number,
    sprites: { front_default: string };

}

interface typesContent {
    slot : number
    type : typeContent
}

interface typeContent {
    name : String,
    url : String
}


/*Nom : name
Taille : height
Poids : weight
Types : types
Numéro : order*/