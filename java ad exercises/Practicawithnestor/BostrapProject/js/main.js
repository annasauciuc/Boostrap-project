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
  "editor",
  "1536775340"
);

var AnaMery = new Usuario(
  "Anna Mery",
  "13",
  "annamaria@correo.com",
  "Australia/Tasmania",
  "Admin",
  "1536745340"
);

var DaniLatinLover = new Usuario(
  "Latin Love",
  "89",
  "querisa@cosadecorreo.com",
  "Europe/Dublin",
  "editor",
  "1536710340"
);

var CrisCris = new Usuario(
  "Cristian Wuachimango",
  "34",
  "voyadisfrutar@aol.com",
  "Pacific/Tahiti",
  "admin",
  "1536996340"
);

var Rober = new Usuario(
  "Roberto Aquaman",
  "20",
  "aquamanmola@peli.com",
  "Europe/Vienna",
  "user",
  "1536435340"
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

listTotal.addUser(AnaMery, 1);
listTotal.addUser(Rober, 1);
listTotal.addUser(Dani, 1);
listTotal.addUser(CrisCris, 1);
listTotal.addUser(DaniLatinLover, 1);

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
  console.log("admin", admin);
  console.log("editor", editor);
  console.log("user", user);
}

separateForRoles(listTotal.listOfUsers);

// var html = "";
// var red;
// var green;
// var blue;
// var rgbColor;

// for (var i = 1; i <= 100; i += 1) {
//   red = Math.floor(Math.random() * 256);
//   green = Math.floor(Math.random() * 256);
//   blue = Math.floor(Math.random() * 256);
//   rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
//   html += '<div style="background-color:' + rgbColor + '"></div>';
// }

// document.write(html);
// console.log(html);
