import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-orange-400 h-[350px] ">
      <div className="w-[1200px] m-auto items-center justify-center text-[18px] text-white">
        <div className="h-[250px] pt-[5%] flex flex-nowrap justify-between border-b-2 ">
          <div className="text-[20px] border-r-2 pr-[50px]">
            Discover Your Favorite Book.
            <br />
            <p className="pt-[15px]">
              Find your favorite book and read it free.
            </p>
            <div className="flex mt-[15px]">
              <FaFacebook className="mr-[20px] cursor-pointer" />
              <FaYoutube className="mr-[20px] cursor-pointer" />
              <FaTwitter className="mr-[20px] cursor-pointer" />
            </div>
          </div>
          <div className="ml-10">
            <div className="font-bold text-[24px]">Contact</div>
            <div className="pt-[10px]">
              <div className="cursor-pointer">luanbui2511@gmail.com</div>
              <div className="mt-[5px] cursor-pointer">0902783645</div>
            </div>
          </div>
          <div className="flex border-l-2 pl-[50px]">
            <div className="mr-10">
              <div className="font-bold text-[24px]">Company</div>
              <div className="pt-[10px]">
                <div className="mt-[5px] cursor-pointer">About us</div>
                <div className="mt-[5px] cursor-pointer">Blog</div>
                <div className="mt-[5px] cursor-pointer">Careers</div>
              </div>
            </div>
            <div className="ml-10">
              <div className="font-bold text-[24px]">Resource</div>
              <div className="pt-[10px]">
                <div className="mt-[5px] cursor-pointer">Community</div>
                <div className="mt-[5px] cursor-pointer">Contract</div>
                <div className="mt-[5px] cursor-pointer">Terms of service</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[35px]">
          <div>@2023 Copy right. All rights reserved</div>
          <div>Term & Condition</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
