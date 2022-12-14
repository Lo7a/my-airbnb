import React from "react";

function Footer() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How it works</p>
        <p>Newsroom</p>
        <p>Investors</p>
      </div>
      <div className="space-y-4 text-xm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5> <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div className="space-y-4 text-xm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>How It Works</p>
        <p>Add Ur Asset</p>
        <p>Meet Professional People</p>
      </div>
      <div className="space-y-4 text-xm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
}

export default Footer;
