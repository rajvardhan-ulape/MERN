import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 DYPCET. All rights reserved.</p>
      <div className="footer-icons">
        <a 
          href="https://https://www.instagram.com/dypcet_official/"  // ✅ Replace with college Insta
          target="_blank" 
          rel="noreferrer"
        >
          <InstagramIcon style={{ color: "#E1306C", fontSize: "30px" }} />
        </a>
        <a 
          href="https://www.facebook.com/dypcetkolhapur"  // ✅ Replace with college LinkedIn
          target="_blank" 
          rel="noreferrer"
        >
          <LinkedInIcon style={{ color: "#0077b5", fontSize: "30px" }} />
        </a>
        <a 
          href="https://www.youtube.com/channel/UC2y2iZBh2FJA-gmm_41UnMw/"  // ✅ Replace with college YouTube
          target="_blank" 
          rel="noreferrer"
        >
          <YouTubeIcon style={{ color: "red", fontSize: "30px" }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
