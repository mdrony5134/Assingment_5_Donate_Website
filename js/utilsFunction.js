function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getvalueByInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// handleDonationCalculation funtionality
function handleDonationCalculation(
  donatioAmountID,
  currentDonationId,
  showAmountId,
  headingId,
  succeModalId
) {
  const donateValue = getInputValueById(donatioAmountID);
  const amount = getvalueByInnerText("amount");
  const currentAmount = getvalueByInnerText(currentDonationId);
  const donateHeading = getInnerText(headingId);
  const succeModal = document.getElementById(succeModalId)

  // handle validation
  if (isNaN(donateValue) || donateValue <= 0 || amount < donateValue) {
    return alert("Invalid donation amount");
  }

  const newDonateAmount = currentAmount + donateValue;
  const newAmount = amount - donateValue;
  document.getElementById(
    showAmountId
  ).innerHTML = `<h3 id="current_donation_amount" class="font-medium text-lg"> ${newDonateAmount} BDT </h3>`;
  document.getElementById(
    "show_amount"
  ).innerHTML = `<h3 id="amount" class="text-lg font-medium">${newAmount} BDT</h3>`;
  document.getElementById(donatioAmountID).value = " ";

  const currentDate = new Date().toLocaleString();
  succeModal.showModal()

  // history functionality
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
   <div id="updated_history" class="bg-white mt-4 shadow-md rounded-lg p-8 border border-[#1111111A]">
              <h1 class="text-xl font-bold pb-4">${newDonateAmount} Taka ${donateHeading}</h1>
  <p>Date : ${currentDate}</p>
            </div>
  `;
  document.getElementById("history_container").appendChild(newHistory);
}
