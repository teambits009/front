import React from 'react';
import salem_logo_footer from '../../assets/brand/salem-logo-footer.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-[#015FF1] text-white py-[20px] md:py-[60px] mt-[140px] ">
      <div className="grid md:grid-cols-4 sm:grid-cols-2  md:gap-[20px] w-[80%] mx-[auto]">
        <div className="grid gap-[15px] text-[14px] order-4 md:order-first text-left">
          <div className="md:flex hidden items-center justify-center md:justify-start gap-[5px]">
            <img
              className="h-[50px]"
              src={salem_logo_footer}
              alt="salem_logo_footer"
            />
            <p className="text-[30px] font-bold cursor-pointer">BNPL</p>
          </div>

          <p>264 Manon road F1 456 caron Town</p>
          <p>Office No 3457</p>
          <p>info@salem.com</p>
          <p>1-800-356-6522</p>
        </div>
        <div className="py-[20px] order-3 md:-order-1 text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">About Us</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <Link to="/printing">
              <li className="cursor-pointer">Printing</li>
            </Link>
            <Link to="/shipping">
              <li className="cursor-pointer">Shipping</li>
            </Link>
            <ScrollLink to="faqs" smooth={true} duration={500}>
              <li className="cursor-pointer">FAQs</li>
            </ScrollLink>
            <ScrollLink to="faqs" smooth={true} duration={500}>
              <li className="cursor-pointer">Contact Us</li>
            </ScrollLink>
          </ol>
        </div>
        <div className="py-[20px] text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Our Services</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <li>Interest Free Periods</li>
            <li>Instant Approval Process</li>
            <li>Enhanced Shopping Experience</li>
            <li>Low or No Fees</li>
          </ol>
        </div>
        <div className="py-[20px] text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Our Socials.</h4>
          <div className="flex place-self-center gap-[15px] mt-[10px]">
            <Facebook
              size={45}
              className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
            />

            <Instagram
              size={45}
              className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
            />
            <Twitter
              size={45}
              className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
            />
            <Youtube
              size={45}
              className="text-primary cursor-pointer transition-all duration-300 ease-out p-2 rounded-full  hover:bg-primary bg-white hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
