const user = {
  username: "Kishorre R P",
  isLoggedIn: true,

  login() {
    this.isLoggedIn = true;
    console.log(`${this.username} logged in`);
  },

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} logged out`);
  }
};

user.login();
user.logout();