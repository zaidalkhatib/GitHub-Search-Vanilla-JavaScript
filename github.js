class Github {
  constructor() {
    this.client_id = "25fa1ef0577cd217604a";
    this.secret_id = "8863f0825dfb78a7e6d35e0543d92348a315b5d8";
  }
  async getuser(user) {
    var userData = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret_id}`
    );
    const profile = await userData.json();

    return profile;
  }
}
