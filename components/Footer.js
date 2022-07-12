import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 bg-[url('/bg_pattern.jpg')]">
      <div className="bg-gradient-to-b from-bgLight to-bgLight/40 pt-10 pb-4">
        <div className="container grid md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4">
          <div className="px-8 leading-loose">
            <h2 className="footer-title">Address</h2>
            <p className="mb-4">
              PACE tower, opposite Jyoti Raj complex, 90 feet Road, Kankarbagh,
              Patna. 800020
            </p>
            <p className="mb-4">
              1st floor , Jagdamba Towers, Sahdeo Mahto marg, Boring Road,
              Patna-800001
            </p>
            <iframe
              className="mb-4 max-w-full lg:w-[320px] aspect-video"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.130711601798!2d85.157266!3d25.58721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf97f67e31741abb0!2sPACE%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1628132403903!5m2!1sen!2sin"
            ></iframe>
            <iframe
              className="max-w-full lg:w-[320px] aspect-video"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460512.0513559904!2d85.099725!3d25.613209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x231364db43a67516!2sPace%20Institute%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1628132450872!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="px-8 leading-loose">
            <h2 className="footer-title">Quick Links</h2>
            <ul className="list-none">
              <li>
                <Link href="/">
                  <a className="footer-link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="footer-link">Coruses</a>
                </Link>
              </li>
              <li>
                <Link href="/video-gallery">
                  <a className="footer-link">Video Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/image-gallery">
                  <a className="footer-link">Image Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/about-pace">
                  <a className="footer-link">About Pace</a>
                </Link>
              </li>
              <li>
                <Link href="/admission-process">
                  <a className="footer-link">Admission Process</a>
                </Link>
              </li>
            </ul>
            <div>
              <h2 className="footer-title">Download Our App:</h2>
              <Link href="http://on-app.in/app/home/iiddy">
                <a>
                  <Image
                    src="/android-download.webp"
                    alt="Download the app"
                    width={216}
                    height={66}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="px-8 leading-loose">
            <h2 className="footer-title">Contact us</h2>
            <ul className="list-none">
              <li>
                <Link href="">
                  <a className="footer-link">
                    <i className="fab fa-whatsapp footerIcon"></i>{" "}
                    <span>9334314161</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="mailto:personalityenglish@gmail.com">
                  <a className="footer-link">
                    <i className="fas fa-envelope footerIcon"></i>{" "}
                    <span>personalityenglish@gmail.com</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <i className="fas fa-phone footerIcon"></i>{" "}
                <span>9334314161, 7979911318, 7979971401, 9334847381</span>
              </li>
            </ul>
          </div>
          <div className="px-8 leading-loose">
            <h2 className="footer-title">Follow us on:</h2>
            <ul>
              <li>
                <Link href="#">
                  <a className="footer-link">
                    <i className="fab fa-facebook footerIcon"></i>{" "}
                    <span>Facebook</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="footer-link">
                    <i className="fab fa-instagram footerIcon"></i>{" "}
                    <span>Instagram</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="footer-link">
                    <i className="fab fa-youtube footerIcon"></i>{" "}
                    <span>YouTube</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-8 text-center py-4 bg-bgLight/40">
        Copyright © 2021 Pace Institute.
      </div>
    </div>
  );
};

export default Footer;
