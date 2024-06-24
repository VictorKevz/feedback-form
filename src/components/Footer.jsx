import React, { useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-wrapper">
      <p>
        Coded by <a href="https://github.com/VictorKevz" target="_blank">Victor Kevz</a> © {currentYear}
      </p>
    </section>
  );
}

export default Footer;
