import "./CheckoutWizard.css";

export function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="container">
      {["User", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={`activate 
        ${index <= activeStep ? "step-on" : "step-off"} 
        `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
