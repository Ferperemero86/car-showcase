import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-6 px-6 py-10">
        <div className=" flex flex-col justify-start items-satrt gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car hub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <ul className="footer__links">
          {footerLinks.map((link) => (
            <li key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul>
                {link.links.map((item) => (
                  <li className="mb-4">
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-gray-500 lg:hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 lg:hover:underline">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 lg:hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
