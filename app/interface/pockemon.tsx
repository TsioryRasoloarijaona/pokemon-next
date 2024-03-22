export interface Pockemon {
    count : number,
    next : String,
    previous : null,
    results : Result[]
}

interface Result {
    name : String,
    url : string
}

