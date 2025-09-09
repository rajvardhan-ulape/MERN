import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";  // ✅ Correct import
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 DYPCET. All rights reserved.</p>
      <div className="footer-icons">
        <a 
          href="https://www.instagram.com/dypcet_official/" 
          target="_blank" 
          rel="noreferrer"
        >
          <InstagramIcon style={{ color: "#000000ff", fontSize: "30px" }} />
        </a>
        <a 
          href="https://www.facebook.com/dypcetkolhapur"  
          target="_blank" 
          rel="noreferrer"
        >
          <FacebookIcon style={{ color: "#000000ff", fontSize: "30px" }} />
        </a>
        <a 
          href="https://www.youtube.com/channel/UC2y2iZBh2FJA-gmm_41UnMw/"  
          target="_blank" 
          rel="noreferrer"
        >
          <YouTubeIcon style={{ color: "#000000ff", fontSize: "30px" }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
