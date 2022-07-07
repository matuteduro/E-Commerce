import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@mui/material";
import { useAlert } from "@blaumaus/react-alert";
import {CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements,} from "@stripe/react-stripe-js";
import axios from "axios";
import "./Payment.css";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from "react-router-dom";

const Payment = ({}) => {

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const alert = useAlert();
  const payBtn = useRef(null);
  const elements = useElements();

  const {shippingInfo, cartItems} = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  }

  const submitHandler = async (e) => {
     e.prevent.Default();

     payBtn.current.disabled = true;

     try {
      const config = {
        headers: {
          "Content-Type": "aplication/json",
        }
      };
      const {data} = await axios.post("/api/v1/payment/process", paymentData, config);

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            }
          }
        }
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          navigate("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
     } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message)
     }
  };
  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;