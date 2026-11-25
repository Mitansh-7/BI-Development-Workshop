const users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        image: "jane.png"
    }
];

let currentUser = 0;

const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userGender = document.getElementById("user-gender");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
    currentUser = currentUser === 0 ? 1 : 0;

    userImage.src = users[currentUser].image;
    userImage.alt = users[currentUser].name;
    userName.textContent = users[currentUser].name;
    userGender.textContent = users[currentUser].gender;
});
