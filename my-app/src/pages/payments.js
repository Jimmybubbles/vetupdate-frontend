import React from 'react';

const PaymentsPage = () => {

    return (


        <div class="container">
            <div class="main-content">
                <p class="text">Pay and pickup your pet</p>
            </div>

            <div class="centre-content">
                <h1 class="price">$584.00</h1>
                <p class="course">
                    site uses Strip payments for security
                </p>
            </div>

            <div class="last-content">

                <div class="card-number">
                    <label> Card Number </label>
                    <input
                        type="text"
                        class="card-number-field"
                        placeholder="###-###-###" />
                </div>
                <br />
                <div class="date-number">
                    <label> Expiry Date </label>
                    <input type="text" class="date-number-field"
                        placeholder="DD-MM-YY" />
                </div>

                <div class="cvv-number">
                    <label> CVV number </label>
                    <input type="text" class="cvv-number-field"
                        placeholder="xxx" />
                </div>
                <div class="nameholder-number">
                    <label> Card Holder name </label>
                    <input
                        type="text"
                        class="card-name-field"
                        placeholder="Enter your Name" />
                </div>
                <button type="submit"
                    class="submit-now-btn">
                    submit
                </button>
            </div>
        </div>

    )


}

export default PaymentsPage;
















