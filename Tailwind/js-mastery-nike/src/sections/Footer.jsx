import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item) => (
              <div key={item.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat font-medium text-2xl leading-normal mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li 
                    key={link.name}
                    className="mt-3 text-white-400 text-base leading-normal hover:text-slate-gray"  
                  >
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          &copy; Copyright. All rights reserved.
        </div>
        <p className="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer;