class Cliente {
  constructor(dni, name, lastName, email, phoneNumber, birthdate) {
    this.id = crypto.randomUUID();
    this.dni = dni;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthdate = birthdate;
  }

  saludo() {
    console.log(`Holaa, mi nombre es ${this.name}`);
  }
}

let user1 = new Cliente(
  "30021867",
  "Bryant",
  "Facenda",
  "bryantffacen@gmail.com",
  "04241736193",
  "23/09/2003"
);

localStorage.setItem("data", JSON.stringify(user1));
