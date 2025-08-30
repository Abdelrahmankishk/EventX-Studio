import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About EventX Studio</h3>
          <p className="footer-description">
            The EventX Studio system provides an easy-to-use Event Management
            System with separate roles for Admins and Users, built with a modern
            UI/UX
          </p>
          <div className="social-links">
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/events">Browse Events</Link>
            </li>
            <li>
              <Link to="/create-event">Create Event</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Help & Support</h3>
          <ul className="footer-links">
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/support">Support Center</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:support@goplanme.com">support@EventX.com</a>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <a href="#">+20 1556425400</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <address>123 Liberty Road / Sidi Gaber, Alexandria</address>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            MAIM&copy;{new Date().getFullYear()}, Abdelrahman Keshk. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
