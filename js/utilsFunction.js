function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getvalueByInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// handleDonationCalculation funtionality
function handleDonationCalculation(
  donatioAmountID,
  currentDonationId,
  showAmountId
) {
  const donateValue = getInputValueById(donatioAmountID);
  // console.log(donateAmount)
  const amount = getvalueByInnerText("amount");
  const currentAmount = getvalueByInnerText(currentDonationId);

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
}
