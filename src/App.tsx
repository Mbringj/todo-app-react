interface User {
  name: string;
  id: number;
}

// type stringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWidthNameArray = Array<{name: string}>


const user: User = {
  name: "mbring",
  id: 34
}

class UserAcount {
  name: string;
  id: number;

  constructor(name:string, id:number) {
    this.name = name;
    this.id = id;
  }
}

const users: UserAcount = new UserAcount('Mbring', 89);

function App() {

  return (
    <>
      <h1>utilisateur: <br />
        Name: {user.name}
        Id: {user.id}
      </h1>
      <h1> users { users.name}</h1>
    </>
  )
}

export default App
