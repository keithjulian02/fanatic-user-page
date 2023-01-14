import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm.jsx"

const PUBLIC_KEY = "pk_test_51MQ86ZBDAJ86l9phcPVDMYs3o6eJlCFSCSCAIHTlbCVcveimC8hJKjKJyYobnicJWt4AyT8H1a5mcIlUsztGH8vU00pPaFbxdP"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}