export default function Footer() {
  return (
    <footer className="flex flex-col justify-center">
      <div className="bg-[#040813] w-full -mt-10 relative z-50">
        <div className="flex items-center justify-between w-10/12 h-10 m-auto sm:w-7/12">
          <div className="flex flex-row  gap-3 justify-center items-center">
            <img src="/footer_logo.png" className="w-14 h-2" alt="logo" />
            <a target="_blank" href="https://twitter.com/AquaLabs_">
              <i className="bg-[url('/twitter.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/twitter_hover.png')]"></i>
            </a>
            <a target="_blank" href="https://t.me/AquaLabs_Announcement">
              <i className="bg-[url('/telegram.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/telegram_hover.png')]"></i>
            </a>
            <a href="mailto:contact@alab.fund">
              <i className="bg-[url('/email.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/email_hover.png')]"></i>
            </a>
          </div>
          <div className="text-xs text-[#8897AB]">
            © 2023 Aqua Labs
          </div>
        </div>
      </div>
    </footer>
  );
}
