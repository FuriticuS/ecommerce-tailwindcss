import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-5 py-5 bg-blue-200">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Customer Support */}
        <div>
          <h3 className="text-black font-bold mb-3">
            Customer <br /> Support
          </h3>
          <ul>
            <li>
              <Link className="hover:text-red-500" to="#">FAQs</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">Shipping & Returns</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">Order Tracking</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-black font-bold mb-3">Follow Us</h3>
          <ul>
            <li>
              <Link className="hover:text-red-500" to="#">Facebook</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">Instagram</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">Twitter</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" to="#">LinkedIn</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-black font-bold mb-3">Contact Us</h3>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-7">
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
