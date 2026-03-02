import React from "react";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="mx-5 flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-8">
          <Image
            src="/Logo/studioLogo.jpeg"
            alt="Studio logo"
            width={30}
            height={30}
          />
          <span className="text-xl font-semibold tracking-tight">
            VK Studio
          </span>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-dotted border-white/20 mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-xs">DEVELOPE BY PRAVIN_CLASH_</p>

          <div className="flex items-center gap-6">
            <SocialIcon Icon={Twitter} href="https://x.com/Praveen_clash_" />
            <SocialIcon
              Icon={Linkedin}
              href="https://www.linkedin.com/in/praveen-venkatesh05/"
            />
            <SocialIcon Icon={Github} href="https://github.com/praveenclash" />
            <SocialIcon
              Icon={Instagram}
              href="https://www.instagram.com/pravin_clash_/"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-component for Social Icons
const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="text-neutral-400 hover:text-white transition-transform hover:scale-110"
  >
    <Icon size={20} strokeWidth={1.5} />
  </a>
);

export default Footer;
