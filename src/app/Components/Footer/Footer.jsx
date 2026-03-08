import React from "react";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="mx-5 flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex cursor-pointer items-center gap-2 mb-5">
          <Image
            src="/Logo/studioLogo.jpeg"
            alt="Studio logo"
            width={30}
            height={30}
            unoptimized
          />
          <span className="text-xl font-semibold tracking-tight">
            VK FOTOS
          </span>
        </div>
        {/* <a
          href="https://www.instagram.com/pravin_clash_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 cursor-pointer text-xs my-2"
        >
          DEVELOPED BY PRAVIN_CLASH_
        </a> */}

        {/* Divider Line */}
        <div className="w-full border-t border-dotted border-white/20 mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="https://www.instagram.com/pravin_clash_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 justify-center items-center flex flex-col md:flex-row gap-1 cursor-pointer text-xs"
          >
            <span>DEVELOPED BY PRAVIN_CLASH_</span>
          </a>

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
