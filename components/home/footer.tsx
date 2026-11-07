import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { Logo } from "@/components/nexora/brand";

const footerColumns = [
  ["Product", "Invest", "Markets", "Portfolio", "Watchlist"],
  ["Company", "About", "Careers", "Contact", "News"],
  ["Learn", "Investing basics", "Market guides", "Help centre", "Blog"],
  ["Legal", "Privacy policy", "Terms of service", "Risk disclosure", "Cookie policy"],
];

export function Footer() {
  return (
    <footer>
      <div className="footer-orb" />
      <div className="shell footer-top"><div><p>Next generation of investment.</p><h2>Clarity for every<br />financial decision.</h2></div><Logo /></div>
      <div className="shell footer-grid">
        <div className="footer-brand"><p>Build, understand and manage your investments from one intelligent platform.</p><div className="social-links"><a href="#top" aria-label="X"><FaXTwitter /></a><a href="#top" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#top" aria-label="YouTube"><FaYoutube /></a><a href="#top" aria-label="Instagram"><FaInstagram /></a></div></div>
        {footerColumns.map((column) => <div key={column[0]}><h4>{column[0]}</h4>{column.slice(1).map((link) => <a key={link} href="#top">{link}</a>)}</div>)}
      </div>
      <div className="shell footer-bottom"><span>© 2026 Nexora. All rights reserved.</span><span>Investing involves risk. The value of investments can rise or fall, and you may receive back less than you invest.</span></div>
    </footer>
  );
}
