const skillButton = document.querySelector("#skills")
const skillContent = document.querySelector("#skills-content")

const experienceButton = document.querySelector("#experience")
const experienceContent = document.querySelector("#experience-content")

skillButton.addEventListener("click", function () {
    swapContent("skills")
})

experienceButton.addEventListener("click", function () {
    swapContent("experience")
})

function swapContent(activeSection) {
    if (activeSection === "skills") {
        skillContent.style.display = "flex"
        experienceContent.style.display = "none"

        skillButton.classList.add("primary-button")
        skillButton.classList.remove("secondary-button")
        experienceButton.classList.add("secondary-button")
        experienceButton.classList.remove("primary-button")
        
    } else if (activeSection === "experience") {
        experienceContent.style.display = "flex"
        skillContent.style.display = "none"

        experienceButton.classList.add("primary-button")
        experienceButton.classList.remove("secondary-button")
        skillButton.classList.add("secondary-button")
        skillButton.classList.remove("primary-button")

    }
    
}