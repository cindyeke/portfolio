import "../public/assets/scss/_global.scss";

const themeSwitchControl1 = document.querySelector(
  "[data-projects-theme-switch1]"
);

const themeSwitchControl2 = document.querySelector(
  "[data-projects-theme-switch2]"
);

themeSwitchControl1.checked = true;
themeSwitchControl2.checked = true;

const setTheme = (theme) => (document.documentElement.className = theme);

const navThemeQuestion = document.querySelectorAll("[data-theme-question]");
const navThemeQuestionArray = Array.from(navThemeQuestion);

const mainPageNavQuestion = navThemeQuestionArray[0];
const projectsPageNavQuestion = navThemeQuestionArray[1];

mainPageNavQuestion.innerText = "too bright?";
projectsPageNavQuestion.innerText = "too bright?";

// const themeContainer = document.querySelector(
//   "[data-theme-container]"
// ).children;

const activeProjectNav = document.querySelector("[data-project-button]");

// Main Page Theme Switch Control
themeSwitchControl1.addEventListener("change", (e) => {
  if (e.currentTarget.checked == true) {
    themeSwitchControl2.checked = true;
    // mainPageNavQuestion.classList.remove("theme-question-display");
    // projectsPageNavQuestion.classList.remove("theme-question-display");

    setTheme("bright");
    mainPageNavQuestion.innerText = "too bright?";
    projectsPageNavQuestion.innerText = "too bright?";
  } else {
    themeSwitchControl2.checked = false;
    // navThemeQuestion.classList.add("theme-question-display");
    // mainPageNavQuestion.classList.add("theme-question-display");
    // projectsPageNavQuestion.classList.add("theme-question-display");
    setTheme("warm");
    mainPageNavQuestion.innerText = "too warm?";
    projectsPageNavQuestion.innerText = "too warm?";

    // activeProjectNav.style.setProperty("--active-nav-color", "green");
  }
});

// Projects Page Theme Switch Control
themeSwitchControl2.addEventListener("change", (e) => {
  if (e.currentTarget.checked == true) {
    themeSwitchControl1.checked = true;
    // mainPageNavQuestion.classList.remove("theme-question-display");
    // projectsPageNavQuestion.classList.remove("theme-question-display");

    // navThemeQuestionArray.forEach((themeQuestion, index) => {
    //   console.log("hi");
    // });

    setTheme("bright");

    mainPageNavQuestion.innerText = "too bright?";
    projectsPageNavQuestion.innerText = "too bright?";
    // mainPage.style.background = "--primary-light-color";
    // mainContainer.style.color = "--accent-light-color";
    // bodyContainer.style.background = "#f5f5f5";
    // directionBtn.style.background = "--accent-light-color";
    // directionIcon.style.color = "--primary-light-color";
    // mainNavContainer.style.background = "--primary-light-color";
    // navLink.children[0].style.color = "--secondary-light-color";
    // navLink.children[1].style.color = "--secondary-light-color";
    // navIcon[0].style.color = "--secondary-light-color";
    // navIcon[1].style.color = "--secondary-light-color";
    // themeContainer[0].style.color = "--accent-light-color";
    // themeSwitchControl1.style.background = "--secondary-light-color";
    // themeSwitchControl1.style.borderColor = "--secondary-light-color";
  } else {
    themeSwitchControl1.checked = false;
    // navThemeQuestion.classList.add("theme-question-display");
    // mainPageNavQuestion.classList.add("theme-question-display");
    // projectsPageNavQuestion.classList.add("theme-question-display");
    setTheme("warm");
    mainPageNavQuestion.innerText = "too warm?";
    projectsPageNavQuestion.innerText = "too warm?";
    // mainPage.style.background = "#c5a586";
    // mainContainer.style.color = "#8a1d06";
    // bodyContainer.style.background = "#8a1d06";
    // directionBtn.style.background = "#8a1d06";
    // directionIcon.style.color = "#c5a586";
    // mainNavContainer.style.background = "#c5a586";
    // navLink.children[0].style.color = "#402E32";
    // navLink.children[1].style.color = "#402E32";
    // navIcon[0].style.color = "#402E32";
    // navIcon[1].style.color = "#402E32";
    // themeContainer[0].style.color = "#402E32";
    // themeSwitchControl1.style.background = "#402E32";
    // themeSwitchControl1.style.borderColor = "#402E32";
    // activeProjectNav.style.setProperty("--active-nav-color", "green");

    // mainPage.style.background = "--primary-dark-color";
    // mainContainer.style.color = "--background-dark-theme";
    // bodyContainer.style.background = "--background-dark-theme";
    // directionBtn.style.background = "--background-dark-theme";
    // directionIcon.style.color = "--primary-dark-color";
    // mainNavContainer.style.background = "--primary-dark-color";
    // navLink.children[0].style.color = "--secondary-dark-color";
    // navLink.children[1].style.color = "--secondary-dark-color";
    // navIcon[0].style.color = "--secondary-dark-color";
    // navIcon[1].style.color = "--secondary-dark-color";
    // themeContainer[0].style.color = "--secondary-dark-color";
    // themeSwitchControl1.style.background = "--secondary-dark-color";
    // themeSwitchControl1.style.borderColor = "--secondary-dark-color";
    // activeProjectNav.style.setProperty("--active-nav-color", "green");
  }
});

//Projects Page DOM
// const projectsContainer = document.querySelector("[data-projects-container]");
// const projectsNavContainer = document.querySelector("[data-nav-container2]");
// const project = document.querySelectorAll("[data-project]");

// const projectArray = Array.from(project);

// themeSwitchControl2.addEventListener("change", (e) => {
//   if (e.currentTarget.checked == true) {
//     projectsContainer.style.background = "#f5f5f5";
//     projectsNavContainer.style.background = "#f5f5f5";
//     // themeSwitchControl2.style.background = "#f5f5f5";
//   } else {
//     projectsContainer.style.background = "#8a1d06";
//     projectsNavContainer.style.background = "#8a1d06";

//     // for (var i = 0; i < projectArray.length; i++) {
//     //   let ar = [];
//     //   if (i % 2 === 0) {
//     //     // index is even
//     //     ar.push(projectArray[i]);

//     //     console.log(ar);
//     //   }
//     // }
//   }
// });
