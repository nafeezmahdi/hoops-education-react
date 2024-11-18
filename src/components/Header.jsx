export default function Header() {
  return (
    <header>
      <div className="font-spartan text-[14px] leading-[50px] font-medium bg-[#232323]">
        <div className="max-w-[1200px] w-full px-[15px] mx-auto">
          <div className="flex">
            <div className="flex">
              <div className="px-[30px]">
                <a href="tel:+8800000000" className="text-white opacity-70">
                  <i className="icon-phone"></i>Call: +88000000000
                </a>
              </div>
              <div className="px-[30px]">
                <a
                  href="mailto:hoops@education.com"
                  className="text-white opacity-70"
                >
                  <i className="icon-envelope"></i>Email: hoops@education.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
