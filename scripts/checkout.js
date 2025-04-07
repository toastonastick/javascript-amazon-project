import {cart, removeFromCart, 
  calculateCartQuantity} from "../data/cart.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";

calculateCartQuantity();
renderOrderSummary();
renderPaymentSummary();