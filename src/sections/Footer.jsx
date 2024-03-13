import { socialMedia, footerLinks } from "../constants/index";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className=" max-container text-white-400 font-montserrat flex flex-wrap justify-between max-lg:flex-col">
      <div>
        <img src={footerLogo} alt="Nike logo" width={240} />
        <p className="w-[450px] mt-5 leading-7 text-base">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex gap-7 mt-5 mb-6">
          {socialMedia.map((icon) => (
            <div
              key={icon.src}
              className=" w-12 h-12 rounded-full flex justify-center items-center bg-white-400"
            >
              <img src={icon.src} alt={icon.alt} width={30} height={30} />
            </div>
          ))}
        </div>
      </div>

        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <h4 className="font-bold mb-6 text-2xl">{footerLink.title}</h4>
            <ul>
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className=" hover:text-slate-gray cursor-pointer leading-normal mb-2 last:mb-6"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    
      <div className="w-full flex items-center justify-between max-sm:flex-col">
        <div className="flex gap-3">
          <img src={copyrightSign} alt="Copy Right" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
