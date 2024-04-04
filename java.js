class Human {
    constructor( Name, Surname,age,nationality,getFullName,getBirthYear){
        this.Name=Name;
        this.Surname=Surname;
        this.age=age;
        this.nationality=nationality;
        this.getFullName=getFullName;
        this.getBirthYear=getBirthYear;
    }

}
class user extends Human{
    constructor( Username,Email,Name,Surname,age,nationality,getBirthYear,getFullName){
    super ( Username,Email,Name,Surname,age,nationality,getFullName,getBirthYear)
    this.Username=Username;
    this.Email=Email;
    this.Name=Name;
    this.Surname=Surname;
    this.age=age;
    this.nationality=nationality;
    this.getFullName=getFullName;
    this.getBirthYear=getBirthYear;
    }
}
const user1 = new user ("Gunel","Imanovaa07@gmail.com","22","Azerbaycan","Imanova Gunel","2002")
const user2 = new user ("Tural","Haciyevtural@gmail.com","19","Turkiye","Haciyev Tural","2004")
const user3 = new user ("Niyaz","Besirovniyaz@gmail.com","27","Azerbaycan","Niyaz Besirov","1995")
const user4 = new user ("jale","Huseynovajale@gmail.com","20","Azerbaycan","Huseynov Jale","2003")
const user5 = new user ("Aygul","Quluyevaygul@gmail.com","25","yaponiya","Aygul Quliyeva","1999")
const user6 = new user ("Nuray","Nebiyevanuray@gamil.com","35","Azerbaycan","Nuray Nebiyeva","1995")
const user7 = new user ("Nihad","Rzayevnihad@gmail.com","Nihad","Rzayev","30","Turkiye","1984","Rzayev Nihad")
console.log (user1);
console.log (user2);
console.log (user3);
console.log (user4);
console.log (user5);
console.log (user6);
console.log (user7);

new Date().getFullYear(2024)