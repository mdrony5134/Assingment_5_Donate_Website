
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


// blog button functionality
document.getElementById("btn_blog").addEventListener("click",function(){
  window.location.href = "/blog.html"
})

// scroll behavior  sticky btn_group section

window.addEventListener("scroll", function(){
  const btnGroup = document.getElementById("btn_group")
  const scrollPosition = window.scrollY;

  if(scrollPosition > 100){
    btnGroup.classList.remove("bg-[#F9F7F3]")
    btnGroup.classList.add("bg-gradient-to-r", "from-[#F9F7F3]", "to-[#F9F7F3]")
  }else{
    btnGroup.classList.add("bg-white")
    btnGroup.classList.remove("bg-gradient-to-r", "from-[#F9F7F3]", "to-[#F9F7F3]")
  }
})
