import { openMenuBtn,
    closeMenuBtn,
    mobMenuBackdrop,
    mobMenu,
    linkAboutProjectMob,
    linkReviewsMob,
    linkFaqMob,
    aboutboutProjectSection,
    reviewsSection,
    faqSection, } from "./refs.js";

openMenuBtn.addEventListener("click", toggleMobMenu);
closeMenuBtn.addEventListener("click", toggleMobMenu);
window.addEventListener('click', handleButtonClickMob);

const isHidden = "is_hidden";
const mobMenuVisible = "mob-menu-visible";

function toggleMobMenu() {
    mobMenuBackdrop.classList.toggle(isHidden);
    mobMenu.classList.toggle(mobMenuVisible);
};

function handleButtonClickMob(event) {
    const { target } = event;
    if (target === linkAboutProjectMob) {
        toggleMobMenu();
        aboutboutProjectSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === linkReviewsMob) {
        toggleMobMenu();
        reviewsSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === linkFaqMob) {
        toggleMobMenu();
        faqSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
};
