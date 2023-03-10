import React from "react";

function Footer() {
  return (

    <footer className="footer bg-light fixed-bottom">
      <div className="text-center">
        <a href="mailto:noah.berg@smartgroupsoftware.com">

          <img
            src="https://img.icons8.com/ios/50/000000/apple-mail.png"
            alt="email"
            className="btn-floating btn-lg"
          />

        </a>
        <a href="https://www.linkedin.com/in/noah-b-922a10256/">

          <img
            src="https://img.icons8.com/ios/50/000000/linkedin.png"
            alt="LinkedIn"
            className="btn-floating btn-lg"
          />

        </a>
        <a href="https://github.com/Noahwberg">

          <img
            src="https://img.icons8.com/ios/50/000000/github--v1.png"
            alt="Github"
            className="btn-floating btn-lg"
          />

        </a>
      </div>
    </footer>

  );
}

export default Footer;