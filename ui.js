const userProflieUI = document.getElementById("user-profile");
class UI {
  UI_profile(user) {
    if (user.message === "Not Found") {
      userProflieUI.innerHTML =
        '<div class=" m-3 alert alert-dismissible alert-warning"><h4 class="alert-heading">Warning!</h4><p class="mb-0">User Not Found :(</p></div>';
    } else {
      userProflieUI.innerHTML = `<div  class="card border-primary m-3 center" style="max-width: 100vw;">
      <div class="card-header align-content-center">Profile</div>
      <div class="card-body text-center">
      <h4 class="card-title">${user.name}</h4>
      <img style="width:100px; border-radius:20px;" src=${user.avatar_url}>
      <div> 
      <a class="btn btn-info mt-3" href=${user.html_url} >Visit Profile </a>
      </div>
      </div>
      <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Location: ${user.location}
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Company: ${user.company}
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Repos: ${user.public_repos}

</ul>
      </div>

      </div>`;
    }
  }
}
