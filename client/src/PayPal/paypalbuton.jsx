import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function Paypalbutton() {
    return (
      <PayPalScriptProvider
        options={{ "client-id": "AXMzEPdbImsgl5tR1reRqbBldYN9hn6kUdZlc8mqTlQstIWfzPavfLldPVV211EtDI6IitButUALXH-o" }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={async () => {
            try {
              const res = await axios({
                url: "http://localhost:3001/buy",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                data: {
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: "30",
                      },
                    },
                  ],
                  application_context: {
                    brand_name: "Ingenia",
                    landing_page: "NO_PREFERENCE",
                    user_action: "PAY_NOW",
                    return_url: "http://localhost:3001/buy/execute-payment",
                    cancel_url: "http://localhost:3001/cancel-payment",
                  },
                },
              });
  
              return res.data.id;
            } catch (error) {
              console.log(error);
            }
          }}
          onCancel={(data) => console.log("compra cancelada")}
          onApprove={(data, actions) => {
            console.log(data);
            actions.order.capture();
          }}
        />
      </PayPalScriptProvider>
    );
  }