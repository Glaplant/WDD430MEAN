export class Game{

    public id?: string;
    public console?: string;
    public name?: string;
    public rareness?: string;
    public release?: string;
    public price?: string;
    public genre?: string;

    constructor(id: string, console: string, name: string, rareness: string, release: string, price: string, genre: string){
    this.id = id;
    this.console = console;
    this.name = name;
    this.rareness = rareness;
    this.release = release;
    this.price = price;
    this.genre = genre;
    }
}