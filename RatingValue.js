const ratingValues = document.querySelectorAll(".rating__value");
const selectedRatingSpan = document.getElementById("selectedRating")

let selectedRating = null;

ratingValues.forEach((value) => {
  value.addEventListener("click", (event) => {
    const rating = event.target.getAttribute("data-rating");

    if (rating === selectedRating) {
      // If the clicked rating is already selected, deselect it
      selectedRating = null;
      event.target.style.backgroundColor = "var(--clr-neutral-grey-700)";
      event.target.style.color = "var(--clr-neutral-grey-300)";
    } else {
      // Deselect the previously selected rating, if any
      if (selectedRating !== null) {
        const previouslySelected = document.querySelector(`[data-rating="${selectedRating}"]`);
        if (previouslySelected) {
          previouslySelected.style.backgroundColor = "var(--clr-neutral-grey-700)";
          previouslySelected.style.color = "var(--clr-neutral-grey-300)";
        }
      }

      // Select the new rating and apply styles
      selectedRating = rating;
      if (selectedRating != null){
        selectedRatingSpan.textContent = selectedRating
      }
      if (selectedRating == null){
        selectedRatingSpan.textContent = "0";
      }
      event.target.style.backgroundColor = "var(--clr-neutral-grey-400)";
      event.target.style.color = "var(--clr-neutral-white-100)";
    }
  });
  
  value.addEventListener("mouseenter", (event) => {
    if (event.target.getAttribute("data-rating") !== selectedRating) {
      event.target.style.backgroundColor = "var(--clr-primary-500)";
      event.target.style.color = "var(--clr-neutral-white-100)";
    }
  });

  value.addEventListener("mouseleave", (event) => {
    if (event.target.getAttribute("data-rating") !== selectedRating) {
      event.target.style.backgroundColor = "var(--clr-neutral-grey-700)";
      event.target.style.color = "var(--clr-neutral-grey-300)";
    }
  });
});