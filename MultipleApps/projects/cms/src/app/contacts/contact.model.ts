export class Contact{

    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public image: string;
    public group: string;

    constructor(id: string, name: string, email: string, phone: string, imageUrl: string, group: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.image = imageUrl;
    this.group = group;
    }
}