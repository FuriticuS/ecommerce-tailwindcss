function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-md p-5 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Shopping Cart</h1>

      {/* Список товаров */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Your Items:</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className="mt-4 font-medium text-md">Total: $70</p>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="h-2 text-lg font-semibold">Enter Your Details:</h2>

        {/* Поле Name */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Поле Email */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Поле Address */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            placeholder="Enter your delivery address"
            rows={3}
            required
            className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Поле Payment */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 peer-focus:text-blue-500" htmlFor="payment">
            Payment Method
          </label>
          <select
            className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="payment"
            required
          >
            <option
              className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value=""
              disabled
            >
              Select payment method
            </option>
            <option
              className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value="creditCard"
            >
              Credit Card
            </option>
            <option
              className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value="paypal"
            >
              PayPal
            </option>
            <option
              className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value="cash"
            >
              Cash on Delivery
            </option>
          </select>
        </div>

        {/* Кнопка Submit */}
        <button
          className="w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Cart;
