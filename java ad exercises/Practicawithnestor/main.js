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
function enabledUsers(listOfUsers, listOfPermissions) {
  this.listOfUsers = listOfUsers;
  this.listOfPermissions = listOfPermissions;

  // Add user to the list with a permission
  this.addUser = function(user2Add, userPermission) {
    this.listOfUsers.push(user2Add);
    this.listOfPermissions.push(userPermission);
  };
  // Search user in the list
  this.searchUser = function(user2Search) {
    if (this.listOfUsers.indexOf(user2Search) == -1) {
      return "This user does not exist";
    }
    return this.listOfUsers.indexOf(user2Search);
  };

  // Return permisssion of an user
  this.permissionOfUser = function(user2Search) {
    return this.listOfPermissions[this.searchUser(user2Search)];
  };

  // Set the permission to a specific User
  this.setPermission = function(user2Set, permission2Set) {
    this.listOfPermissions[this.searchUser(user2Set)] = permission2Set;
  };
}

var listTotal = new enabledUsers([], []);

// var cosa = [0, 5, uye, 67, 67];
// cosa[4] = 67; // undefined
// CRUD
