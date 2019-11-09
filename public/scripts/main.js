String.prototype.trunc = function(n) {
  return this.length > n ? this.substr(0, n - 1) + "&hellip;" : this;
};

function getParam(parameterName) {
  let result = null;
  let tmp = [];

  location.search
    .substr(1)
    .split("&")
    .forEach(item => {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });

  return result;
}

$(document).ready(() => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) location.href = "/";

    // start the main script only when there's login user
    created(user, JSON.parse(localStorage.getItem("adminData")));
  });
});
