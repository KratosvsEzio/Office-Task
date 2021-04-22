import { Component, OnInit } from '@angular/core';

declare var GlobalPayments: any;

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.payment_1();
  }

  payment_1() {
    // Configure account
    GlobalPayments.configure({
      publicApiKey: "pkapi_cert_10uaFMXmsIljGieS2L"
    });

    // Create Form
    const cardForm = GlobalPayments.ui.form({
      fields: {
        "card-holder-name": {
          placeholder: "Jane Smith",
          target: "#credit-card-card-holder"
        },
        "card-number": {
          placeholder: "•••• •••• •••• ••••",
          target: "#credit-card-card-number"
        },
        "card-expiration": {
          placeholder: "MM / YYYY",
          target: "#credit-card-card-expiration"
        },
        "card-cvv": {
          placeholder: "•••",
          target: "#credit-card-card-cvv"
        },
        "submit": {
          value: "Submit",
          target: "#credit-card-submit"
        }
      },
      styles: {
        // Your styles
      }
    });

    // form-level event handlers. examples:
    cardForm.ready(() => {
      console.log("Registration of all credit card fields occurred");
    });
    cardForm.on("token-success", (resp) => {

      // add payment token to form as a hidden input
      const token = document.createElement("input");
      token.type = "hidden";
      token.name = "payment-reference";
      token.value = resp.paymentReference;
      console.log('Success Response', resp, token);

      // submit data to the integration's backend for processing
      // const form = document.getElementById("payment-form");
      // form.submit();
    });
    cardForm.on("token-error", (resp) => {
      // show error to the consumer
      console.log('Error Response', resp);
    });

    // field-level event handlers. example:
    cardForm.on("card-number", "register", () => {
      console.log("Registration of Card Number occurred");
    });
  }
}
