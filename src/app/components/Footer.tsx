import React, { memo } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { RiCamera3Fill } from "react-icons/ri";
import Link from "next/link";

// Reusable Data Arrays for Text and Links
const footerLinks = [
  {
    title: null,
    links: [
      "Find A Store",
      "Become A Member",
      "Sign Up for Email",
      "Send Us Feedback",
      "Student Discounts",
    ],
  },
  {
    title: "Get Help",
    links: [
      "Order Status",
      "Delivery",
      "Returns",
      "Payment Options",
      "Contact Us On Nike.com Inquiries",
      "Contact Us On All Other Inquiries",
    ],
  },
  {
    title: "About Nike",
    links: ["News", "Careers", "Investors", "Sustainability"],
  },
];

const socialIcons = [
  { component: FaTwitter, color: "bg-slate-400" },
  { component: FaFacebookF, color: "bg-slate-400" },
  { component: TiSocialYoutubeCircular, color: "bg-slate-400" },
  { component: RiCamera3Fill, color: "bg-slate-400" },
];

// Memoized Footer Component
const footer = memo(() => {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col md:flex-row justify-between px-6 py-8">
        {footerLinks.map((section, index) => (
          <div
            key={index}
            className="w-full md:w-[245px] space-y-5 text-slate-400 mb-6 md:mb-0"
          >
            {section.title && (
              <h1 className="text-white">{section.title}</h1>
            )}
            {section.links.map((link, idx) => (
              <p key={idx} className={index === 0 ? "text-white" : ""}>
                {link}
              </p>
            ))}
          </div>
        ))}

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end gap-5 pt-9 md:pt-0">
          {socialIcons.map(({ component: Icon, color }, idx) => (
            <Icon
              key={idx}
              className={`${color} w-[30px] h-[30px] text-black rounded-full`}
            />
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between px-6 pb-6">
        <div className="text-slate-400 flex gap-2 items-center mb-6 md:mb-0">
          <FaLocationDot className="text-white" />
          <span className="text-white">India</span>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="flex gap-6 text-slate-400">
          {["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"].map(
            (item, idx) => (
              <Link key={idx} href="#">
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
});

export default footer;
