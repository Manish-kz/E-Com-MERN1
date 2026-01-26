import React from "react";
import { useCart } from "../context/UseCart";

function Checkout() {
  const { cart, updateQty, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-[#fafafa] text-black mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 px-4 py-10">

        {/* LEFT SIDE FORM */}
        <div className="bg-white rounded-xl p-6 sm:p-10">

          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          {/* EXPRESS */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg cursor-pointer hover:bg-purple-700 transition">
              Shop Pay
            </button>
            <button className="flex-1 bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition">
              G Pay
            </button>
          </div>

          <p className="text-center text-gray-400 mb-6">OR</p>

          {/* CONTACT */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Contact</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* DELIVERY */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold">Delivery</h3>

            <select className="w-full border p-3 rounded-lg">
              <option>India</option>
              <option>United States</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input className="border p-3 rounded-lg" placeholder="First name" />
              <input className="border p-3 rounded-lg" placeholder="Last name" />
            </div>

            <input className="border p-3 rounded-lg w-full" placeholder="Address" />
            <input className="border p-3 rounded-lg w-full" placeholder="Apartment, suite etc." />
          </div>

          {/* PAYMENT */}
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-4">Payment</h3>

            <div className="space-y-4">
              <input className="border p-3 rounded-lg w-full" placeholder="Card number" />
              <div className="grid grid-cols-2 gap-4">
                <input className="border p-3 rounded-lg" placeholder="MM / YY" />
                <input className="border p-3 rounded-lg" placeholder="CVV" />
              </div>
              <input className="border p-3 rounded-lg w-full" placeholder="Name on card" />
            </div>
          </div>

          <button className="w-full mt-8 bg-[#2b1d0e] text-white py-4 rounded-full text-lg cursor-pointer hover:bg-[#3c2e14] transition">
            Pay Now
          </button>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="bg-white rounded-xl p-6 sm:p-8 h-fit">

          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item._id + item.size}
                className="flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  className="w-16 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>

                <span className="font-semibold">
                  ${item.price * item.qty}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
