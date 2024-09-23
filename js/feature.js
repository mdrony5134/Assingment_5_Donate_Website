
// featur section in button tab
function tabButton(historyID, donationID, showSectionId, hiddenSectionId) {
  document.getElementById(historyID).className =
    "px-8 py-3 bg-[#B4F461] rounded-lg text-xl font-semibold";
  document.getElementById(donationID).className =
    "px-8 py-3 border border-[rgba(17, 17, 17, 0.3)] rounded-lg text-xl font-semibold";

  document.getElementById(showSectionId).classList.remove("hidden");
  document.getElementById(hiddenSectionId).classList.add("hidden");
}


document.getElementById("btn_history").addEventListener("click", function () {
  tabButton("btn_history", "btn_donation", "show_history", "show_donation");
});
document.getElementById("btn_donation").addEventListener("click", function () {
  tabButton("btn_donation", "btn_history", "show_donation", "show_history");
});
