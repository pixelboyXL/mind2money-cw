import { faqArrows } from "./refs";

document.addEventListener('DOMContentLoaded', () => {
    const faqItemOpen = "item-open";
    const faqArrowUp = "arrow-up";
    if (faqArrows.length > 0) {
        faqArrows.forEach(arrow => {
            arrow.addEventListener("click", () => {
                const faqItem = arrow.closest(".faq__item"); 
                if (faqItem) {
                    arrow.classList.toggle(faqArrowUp);
                    faqItem.classList.toggle(faqItemOpen); 
                };
                document.querySelectorAll(".faq__item").forEach(item => {
                    if (item !== faqItem && item.classList.contains(faqItemOpen)) {
                        item.classList.remove(faqItemOpen);
                        item.querySelector(".faq__item-arrow").classList.remove(faqArrowUp);
                    };
                });
            });
        });
    };
});