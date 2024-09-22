document
  .getElementById("btn_donate_feni")
  .addEventListener("click", function () {
    const donateValue = getInputValueById("feni_donation_amount");
    // console.log(donateAmount)
    const amount = getvalueByInnerText("amount");
    const currentAmount = getvalueByInnerText("current_donation_amount_feni");

    if (isNaN(donateValue) || donateValue <= 0 || amount < donateValue) {
      return alert("Invalid donation amount");
    }

    const newDonateAmount = currentAmount + donateValue;
    const newAmount = amount - donateValue;
    document.getElementById(
      "show_updated_amount_feni"
    ).innerHTML = `<h3  id="current_donation_amount_feni" class="font-medium text-lg"> ${newDonateAmount} BDT </h3>`;
    document.getElementById(
      "show_amount"
    ).innerHTML = `<h3 id="amount" class="text-lg font-medium">${newAmount} BDT</h3>`;
    document.getElementById("feni_donation_amount").value = " ";
  });
