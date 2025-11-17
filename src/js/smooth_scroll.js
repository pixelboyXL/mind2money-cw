import { linkAboutProject,
    linkReviews,
    linkFaq,
    aboutboutProjectSection,
    reviewsSection,
    faqSection, } from './refs.js';

window.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
    const { target } = event;
    if (target === linkAboutProject) {
        aboutboutProjectSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === linkReviews) {
        reviewsSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === linkFaq) {
        faqSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
};