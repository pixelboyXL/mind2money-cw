const scrollToAboutProject = document.querySelector('.link-about-project');
const scrollToReviews = document.querySelector('.link-reviews');
const scrollToFaq = document.querySelector('.link-faq');
const aboutboutProjectSection = document.querySelector('.about-project');
const reviewsSection = document.querySelector('.reviews');
const faqSection = document.querySelector('.faq');

window.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
    const { target } = event;
    if (target === scrollToAboutProject) {
        aboutboutProjectSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === scrollToReviews) {
        reviewsSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    if (target === scrollToFaq) {
        faqSection.scrollIntoView({ block: "start", behavior: "smooth" });
    };
};