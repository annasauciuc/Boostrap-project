/**
 * # Objeto Usuario
 * ## Gestión usuarios del sistema
 *
 * ### Parametros
 *  @param Nombre: Nombre completo usuario
 *  @param edad
 *  @param email
 *  @param timezone - continent/city
 *  @param Rol [Admin, editor, user]
 *  @param tsLastConnection
 *
 * ### Salida
 *  - No tiene
 */
//Function constructora
function Usuario(nombre, edad, email, tz, rol, tsLastConnection) {
  this.nombre = nombre;
  this.edad = edad;
  this.email = email;
  this.tz = tz;
  this.rol = rol;
  this.tsLastConnection = tsLastConnection;
}

var Dani = new Usuario(
  "Daniel Wuachimango",
  "56",
  "notiene@cosa.com",
  "atlantic/canary",
  "Editor",
  "1536775340"
);

var AnaMery = new Usuario(
  "Anna Merry",
  "13",
  "anna@correo.com",
  "Europe/Dublin",
  "Admin",
  "1536745340"
);

var DaniLatinLover = new Usuario(
  "Latin Love",
  "89",
  "querisa@correo.com",
  "Europe/Dublin",
  "Editor",
  "1536710340"
);

var CrisCris = new Usuario(
  "Cristian Wuachimango",
  "34",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "Admin",
  "1536996340"
);

var Rober = new Usuario(
  "Roberto Aquaman",
  "20",
  "aquama@peli.com",
  "Europe/Vienna",
  "User",
  "1536435340"
);
var Marolyn = new Usuario(
  "Marolyn Wuachimango",
  "18",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "Admin",
  "1536996340"
);
var Maria = new Usuario(
  "Maria Wuachimango",
  "18",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "Editor",
  "1536996340"
);
var Jamilla = new Usuario(
  "Jamilla Wuachimango",
  "18",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "User",
  "1536996340"
);
var Nestor = new Usuario(
  "Nestor Wuachimango",
  "21",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "User",
  "1536996340"
);
var Manuel = new Usuario(
  "Manuel Wuachimango",
  "36",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "Editor",
  "1536996340"
);
var Antoniu = new Usuario(
  "Manuel Wuachimango",
  "30",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "Admin",
  "1536996340"
);
/**
 * # enabledUsers
 * ## Parametros
 * @param listOfUsers Array de Usuarios
 * @param listOfPermissions Array de booleans
 */
//Function constructora
function enabledUsers(listOfUsers, listOfPermissions) {
  this.listOfUsers = listOfUsers;
  this.listOfPermissions = listOfPermissions;

  // Add user to the list with a permission

  //Actions
  this.addUser = function(user2Add, userPermission) {
    // Check if input parameter user2Add is an Usuario
    if (user2Add instanceof Usuario) {
      // check if input parameter userPermission have value 1 or 0
      if (userPermission === 1 || userPermission === 0) {
        // check if input parameter user2Add exists in the system(if is added previously)
        if (this.checkIfExists(user2Add) == false) {
          this.listOfUsers.push(user2Add);
          this.listOfPermissions.push(userPermission);
          console.log("Welcome " + user2Add.nombre);
        } else {
          // The user exists in the system
          console.log("This user exists already");
        }
      } else {
        // the input parameter isn't 1 or 2
        console.log("You are not allowed :" + userPermission);
      }
    } else {
      // the input user parameter isn't an Usuario
      console.log("You are not an user: " + user2Add);
    }
  };
  // Search user in the list
  this.searchUser = function(user2Search) {
    if (this.listOfUsers.indexOf(user2Search) == -1) {
      return "This user does not exist";
    } else {
      return this.listOfUsers.indexOf(user2Search);
    }
  };

  // Return permisssion of an user
  this.permissionOfUser = function(user2Search) {
    // Check if the input parameter is an User
    if (user2Search instanceof Usuario) {
      // Need to check if this user exists in the system
      // If the user exists just show the permisions
      //If the user don't exist show a message like the user don't exists
      if (this.checkIfExists(user2Search) == true) {
        return this.listOfPermissions[this.searchUser(user2Search)];
      } else {
        console.log("You are not in the list: " + user2Search.nombre);
      }
    } else {
      console.log("You are not an user: " + user2Search);
    }
  };

  // Set the permission to a specific User
  this.setPermission = function(user2Set, permission2Set) {
    // Check if the input parameter is an User
    if (user2Set instanceof Usuario) {
      // check if input parameter permission2Set have value 1 or 0
      if (permission2Set === 1 || permission2Set === 0) {
        if (this.checkIfExists(user2Set) == true) {
          return (this.listOfPermissions[
            this.searchUser(user2Set)
          ] = permission2Set);
        } else {
          console.log("You are not a user");
        }
        // Need to check if this user exists in the system
        // If the user exists just show the permisions
        //If the user don't exist show a message like the user don't exists
      } else {
        console.log("You can not do this");
      }
    } else {
      console.log("You are not a user");
    }
  };
  this.checkIfExists = function(user) {
    if (this.listOfUsers.indexOf(user) == -1) {
      return false;
    } else {
      return true;
    }
  };
}
var listTotal = new enabledUsers([], []);

listTotal.addUser(Marolyn, 1);
listTotal.addUser(AnaMery, 1);
listTotal.addUser(Rober, 1);
listTotal.addUser(Dani, 1);
listTotal.addUser(CrisCris, 1);
listTotal.addUser(DaniLatinLover, 1);
listTotal.addUser(Nestor, 1);
listTotal.addUser(Maria, 1);
listTotal.addUser(Manuel, 1);
listTotal.addUser(Antoniu, 1);

var admin = listTotal.listOfUsers.filter(function(user) {
  return user.rol.toLowerCase() == "admin";
});
var editor = listTotal.listOfUsers.filter(function(user) {
  return user.rol.toLowerCase() == "editor";
});

var user = listTotal.listOfUsers.filter(function(user) {
  return user.rol.toLowerCase() == "user";
});

//separate the users for roles
function separateForRoles(listOfUsers) {
  //   for(var i=0; i<listOfUsers.length;i++){
  // console.log(listOfUsers[i].rol)
  //   }
  var admin = listOfUsers.filter(function(user) {
    return user.rol.toLowerCase() == "admin";
  });
  var editor = listOfUsers.filter(function(user) {
    return user.rol.toLowerCase() == "editor";
  });

  var user = listOfUsers.filter(function(user) {
    user.rol.toLowerCase() == "user";
  });
  // console.log("admin", admin);
  // console.log("editor", editor);
  // console.log("user", user);
}

separateForRoles(listTotal.listOfUsers);

for (var i = 0; i < admin.length; i++) {
  var divMain2 = document.createElement("div");
  divMain2.classList.add("col-lg-3", "col-sm-6", "col-md-4");
  var divMain = document.createElement("div");
  divMain.classList.add("card", "btn-outline-info");
  divMain2.appendChild(divMain);
  var iconUser = document.createElement("i");
  iconUser.className = "fas fa-6x card-img-top fa-user-alt text-center";
  divMain.appendChild(iconUser);
  var divChild = document.createElement("div");
  divChild.className = "card-body";
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = admin[i].nombre;
  divChild.appendChild(title);
  var body = document.createElement("p");
  body.className = "card-text";
  body.innerHTML =
    "<br>" +
    "Age : " +
    admin[i].edad +
    " years" +
    "<br>" +
    "Email : " +
    admin[i].email +
    "<br>" +
    "Time zone : " +
    admin[i].tz +
    "<br>" +
    "Rol : " +
    admin[i].rol +
    "<br>" +
    "Last Connection : " +
    admin[i].tsLastConnection;
  divChild.appendChild(body);
  divMain.appendChild(divChild);
  document.getElementById("admins").appendChild(divMain2);
}

for (var i = 0; i < editor.length; i++) {
  var divMain2 = document.createElement("div");
  divMain2.classList.add("col-lg-3", "col-sm-6", "col-md-4");
  //creates the main div
  var divMain = document.createElement("div");
  //adds the classes of boostrap
  divMain.classList.add("card", "btn-outline-info");
  divMain2.appendChild(divMain);
  //adds the font awseome
  var iconUser = document.createElement("i");
  //adds the font awesome classes
  iconUser.className = "fas fa-6x card-img-top fa-user-alt text-center";
  //puts in the main div the font awesome
  divMain.appendChild(iconUser);
  //creates the div inside the main div
  var divChild = document.createElement("div");
  //gives the class from boostrap to the div child
  divChild.className = "card-body";
  //creates the h5 element
  var title = document.createElement("h5");
  //gives to h5 the class from boostrap
  title.className = "card-title";
  //searchs the editors name depending of the index
  title.innerHTML = editor[i].nombre;
  //puts the name for every editor in the h5 element
  divChild.appendChild(title);
  //creates the p element
  var body = document.createElement("p");
  //gives the p element the class from boostrap
  body.className = "card-text";
  //inserts in the p the caracteristics of every editor
  body.innerHTML =
    "<br>" +
    "Age : " +
    editor[i].edad +
    " years" +
    "<br>" +
    "Email : " +
    editor[i].email +
    "<br>" +
    "Time zone : " +
    editor[i].tz +
    "<br>" +
    "Rol : " +
    editor[i].rol +
    "<br>" +
    "Last Connection : " +
    editor[i].tsLastConnection;
  //attaches the p to the main div
  divChild.appendChild(body);
  //attaches the div child to the main div
  divMain.appendChild(divChild);
  //inserts in the div with the id of editors the div main complete
  document.getElementById("editors").appendChild(divMain2);
}

for (var i = 0; i < user.length; i++) {
  var divMain2 = document.createElement("div");
  divMain2.classList.add("col-lg-3", "col-sm-6", "col-md-4");
  var divMain = document.createElement("div");
  divMain.classList.add("card", "btn-outline-info");
  divMain2.appendChild(divMain);
  var iconUser = document.createElement("i");
  iconUser.className = "fas fa-6x card-img-top fa-user-alt text-center";
  divMain.appendChild(iconUser);
  var divChild = document.createElement("div");
  divChild.className = "card-body";
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = user[i].nombre;
  divChild.appendChild(title);
  var body = document.createElement("p");
  body.className = "card-text";
  body.innerHTML =
    "<br>" +
    "Age : " +
    user[i].edad +
    " years" +
    "<br>" +
    "Email : " +
    user[i].email +
    "<br>" +
    "Time zone : " +
    user[i].tz +
    "<br>" +
    "Rol : " +
    user[i].rol +
    "<br>" +
    "Last Connection : " +
    user[i].tsLastConnection;
  divChild.appendChild(body);
  divMain.appendChild(divChild);
  document.getElementById("users").appendChild(divMain2);
}
