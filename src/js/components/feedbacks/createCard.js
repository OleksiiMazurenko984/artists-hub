export function createCard(feedback) {
    const {rating, author, descr} =  feedback;
    return`
    <li class="swiper-slide">
          <div class="stars-static" data-rating="${rating}"></div>
          <blockquote class="feedback-text">
            ${descr}
          </blockquote>
          <h3 class="feedback-author">${author}</h3>
        </li>
    `
}