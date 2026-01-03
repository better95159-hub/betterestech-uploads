<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  function updateRazorpayTextAndButton() {
    // 1. Change Razorpay text
    const razorpayLabel = document.querySelector('#radio-control-wc-payment-method-options-razorpay__label');
    if (razorpayLabel) {
      razorpayLabel.textContent = '⬇️Scroll down⬇️ and click "Pay Now" to complete your payment✅';
    }

    // 2. Change Place Order button text
    const placeOrderBtn = document.querySelector('button.wc-block-components-checkout-place-order-button');
    if (placeOrderBtn) {
      const buttonText = placeOrderBtn.querySelector('span.wc-block-components-button__text');
      if (buttonText) {
        buttonText.textContent = 'Pay Now';
      }
    }

    // Retry in case WooCommerce reloads via AJAX
    setTimeout(updateRazorpayTextAndButton, 1000);
  }

  updateRazorpayTextAndButton();

  // Reapply after AJAX checkout updates
  document.body.addEventListener('updated_checkout', updateRazorpayTextAndButton);
});
</script>
<!-- end Simple Custom CSS and JS -->
