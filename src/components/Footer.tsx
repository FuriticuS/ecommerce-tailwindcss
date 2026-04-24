import { Link } from "react-router-dom";

import {
  footerColumnTitle,
  footerColumns,
  footerCopyright,
  footerLink,
  footerRoot,
} from "@/styles/selectors";

function Footer() {
  return (
    <footer className={footerRoot}>
      <div className={footerColumns}>
        <div>
          <h3 className={footerColumnTitle}>
            Customer <br /> Support
          </h3>
          <ul>
            <li>
              <Link className={footerLink} to="#">
                FAQs
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={footerColumnTitle}>Follow Us</h3>
          <ul>
            <li>
              <Link className={footerLink} to="#">
                Facebook
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                Instagram
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className={footerLink} to="#">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={footerColumnTitle}>Contact Us</h3>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>

      <div className={footerCopyright}>
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
