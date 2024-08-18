import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[9999]">
            <div className="font-bold text-[16px]">Community</div>

            {/* YouTube Link */}
            <Link
              href="https://www.youtube.com/channel/UCouXdQ1ZAd64nyajIfVdTqg"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer z-[99999]"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </Link>

            {/* GitLab Link */}
            <Link
              href="https://gitlab.com/Rada_Dorji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer z-10"
            >
              <FaGitlab />
              <span className="text-[15px] ml-[6px]">GitLab</span>
            </Link>

            {/* Discord Link */}
            <Link
              href="https://discord.gg/VxUzx7Pp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer z-10"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[9999]">
            <div className="font-bold text-[16px]">Social Media</div>

            {/* Instagram Link */}
            <Link
              href="https://www.instagram.com/rubunto.0203/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer z-10"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </Link>

            {/* Twitter Link */}
            <Link
              href="https://twitter.com/RadaDorji203"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer z-10"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </Link>

            {/* LinkedIn Link */}
            <Link
              href="https://www.linkedin.com/in/rada-dorji-b96085204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer z-10"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-10">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer z-10">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-10">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-10">
              <span className="text-[15px] ml-[6px]">
                rada203dorji@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Rada Dorji 2024 All rights reserved. Based on code from
          WebChain Dev 2023 Inc by Mif2006.
        </div>
      </div>
    </div>
  );
};

export default Footer;
