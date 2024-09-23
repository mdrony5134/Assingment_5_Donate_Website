document
  .getElementById("btn_donate_quota")
  .addEventListener("click", function () {
    handleDonationCalculation(
      "quota_donation_amount",
      "current_donation_amount_quota",
      "show_updated_amount_quota"
    );
  });
