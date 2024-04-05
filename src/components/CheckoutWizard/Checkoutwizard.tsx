import "./CheckoutWizard.css";
import clsx from "clsx";

export function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="container">
      {["User", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={clsx("activate", {
              "step-on": index <= activeStep,
              "step-off": index > activeStep,
            })}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
