import type { FormEvent } from "react";

import {
  cartFieldLabel,
  cartFieldLabelPayment,
  cartFieldStack,
  cartFieldTextarea,
  cartForm,
  cartFormSectionTitle,
  cartLineItem,
  cartLineItemList,
  cartLineItemsHeading,
  cartPage,
  cartSectionBlock,
  cartSubmitButton,
  cartTitle,
  cartTotalLine,
  formControl,
} from "@/styles/selectors";

export function Cart() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className={cartPage}>
      <h1 className={cartTitle}>Shopping Cart</h1>

      <div className={cartSectionBlock}>
        <h2 className={cartLineItemsHeading}>Your Items:</h2>
        <ul className={cartLineItemList}>
          <li className={cartLineItem}>
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className={cartLineItem}>
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className={cartTotalLine}>Total: $70</p>
      </div>

      <form onSubmit={handleSubmit} className={cartForm}>
        <h2 className={cartFormSectionTitle}>Enter Your Details:</h2>

        <div className={cartFieldStack}>
          <label className={cartFieldLabel} htmlFor="name">
            Name
          </label>
          <input
            className={formControl}
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className={cartFieldStack}>
          <label className={cartFieldLabel} htmlFor="email">
            Email
          </label>
          <input
            className={formControl}
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className={cartFieldStack}>
          <label className={cartFieldLabel} htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            placeholder="Enter your delivery address"
            rows={3}
            required
            className={cartFieldTextarea}
          />
        </div>

        <div className={cartFieldStack}>
          <label className={cartFieldLabelPayment} htmlFor="payment">
            Payment Method
          </label>
          <select className={formControl} id="payment" required>
            <option className={formControl} value="" disabled>
              Select payment method
            </option>
            <option className={formControl} value="creditCard">
              Credit Card
            </option>
            <option className={formControl} value="paypal">
              PayPal
            </option>
            <option className={formControl} value="cash">
              Cash on Delivery
            </option>
          </select>
        </div>

        <button className={cartSubmitButton} type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}
