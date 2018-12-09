
let User = (function() {
  let id = '';
  let name = '';
  let email = '';

  var getName = function() {
    return name;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    name = name;     
    // Also set this in cookie/localStorage
  };
  var getID = function() {
    return name;    // Or pull this from cookie/localStorage
  };

  var setID = function(id) {
    id = id;     
    // Also set this in cookie/localStorage
  };
  var getEmail = function() {
    return email;    // Or pull this from cookie/localStorage
  };

  var setEmail = function(email) {
    email = email;     
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName,
    setID: setID,
    getID: getID,
    setEmail: setEmail,
    getEmail: getEmail
  }

})();

export default User;