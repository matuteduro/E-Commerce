import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import Payment from './Payment'

const PUBLIC_KEY = "pk_test_51L8Y0MDdyp9PYD2aKshfHc4dAcJ1P5ccm1RLAbC1afNLeQuc7HMdjCoEgMpJ8qc9vopvoQnS5jTyEQU78gaTrBwo00cxdpRkeo"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <Payment/>
    </Elements>
  )
}

export default StripeContainer