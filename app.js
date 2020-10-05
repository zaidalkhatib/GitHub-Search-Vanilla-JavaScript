//targeting search input field
const search = document.getElementById("search");
//creating an instance for the GIThub class
const github = new Github();
//creating an instance for the UI class
const ui = new UI();

//get data after user input and pass it to UI class
search.addEventListener("keyup", async (e) => {
  let user = await github.getuser(e.target.value);

  ui.UI_profile(user);
});

document.getElementById("light-mode").addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "";
    document.getElementById("light-mode").innerText = "Light Mode";
    console.log("mot white");
  } else {
    document.getElementById("light-mode").innerText = "Dark Mode";

    console.log(document.body.style.backgroundColor);
    document.body.style.backgroundColor = "white";
  }
});
