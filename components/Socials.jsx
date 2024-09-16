import { Item } from "@radix-ui/react-select"; // Pastikan Anda memerlukannya
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "www.linkedin.com/in/cornelius-s-2a5b27324" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/xixixixxi_0?igsh=ZXBjbTRtZDdvamU1",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Corner17lius?t=Ca28U1e7IGacDqvofhp6Mg&s=09",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
