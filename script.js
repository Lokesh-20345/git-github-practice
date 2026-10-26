const learnBtn = document.querySelector("#learnBtn");
const tip = document.querySelector("#tip");

learnBtn.addEventListener("click", () => {
  tip.textContent = "Tip: commit small, meaningful changes so you can safely return to an earlier version.";
});
