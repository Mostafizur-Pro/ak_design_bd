import {
  faArrowAltCircleDown,
  faArrowRight,
  faBarChart,
  faGear,
  faLocation,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import fiver from "../../../public/fiver.png";
import paypal from "../../../public/paypal.png";
import woo from "../../../public/woocommerce.png";
import theme from "../../../public/themeforest.png";
import wordpress from "../../../public/wordpress.png";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function AboutPage() {
  return (
    <div>
      {/* About us */}
      <div className="bg-blue-400 w-full h-full py-24">
        <div className="my-auto">
          <h1 className="text-7xl font-bold text-white text-center">
            ABOUT US
          </h1>
          <h1 className="text-3xl font-bold text-white text-center mt-4">
            IF WELCOME TO THE SEARCH ENGINE OPTIMIZATION SERVICES
          </h1>
        </div>
      </div>
      {/* Intro */}
      <div className="bg-gray-50 w-full h-full py-24">
        <div className="flex justify-between ">
          <div className="p-4 m-4">
            <div className="mt-8 mb-12">
              <h1 className="text-basic  text-start text-gray-500">
                WE ARE AMAZING TEAM OF SEO
              </h1>
              <h1 className="text-3xl font-bold text-start mt-4 mb-8">
                INTRODUCTION VIDEO
              </h1>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jjtklU68BsQ?si=RBhUdgyqhqBDebiE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="p-4 m-4">
            <div className="mt-8 mb-12">
              <h1 className="text-basic  text-start text-gray-500">
                6 REASON TO CHOOSE SEOMARKT
              </h1>
              <h1 className="text-3xl font-bold text-start mt-4 mb-8">
                WE ARE SEOMARKT
              </h1>
            </div>
            <div>
              <h1>
                Praesent vel dignissim urna. Nullam non risus tortor. Cras
                blandit placerat condimentum. Vestibulum egestas ex vehicula
                orci ultricies, vitae pellentesque velit gravida. Praesent eu
                blandit lacus, at rhoncus justo. Donec convallis lorem laoreet
                nibh pretium fringilla. In malesuada nisl vel leo egestas, eget
                luctus ligula venenatis.
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                Hundreds of SEO Tools
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                Powerful User Dashboard
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                Real Time SEO ANALYZE
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                Free Backlink Builder Tool
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                Lifetime Membership - Onetime Price
              </h1>
              <h1 className="my-4">
                <FontAwesomeIcon
                  className="text-orange-500 text-lg me-4"
                  icon={faArrowRight}
                />
                24/7 Live Chat Support
              </h1>
            </div>
          </div>
        </div>
        {/* progress */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-blue w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-primary w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-accent w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-info w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-success w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl my-2">
              SEARCH ENGINE OPTIMIZATION
            </h1>
            <progress
              className="progress progress-error w-56 h-4"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      {/* Choose us */}
      <div className=" w-full h-full p-12 flex justify-center	items-center	">
        <div>
          <div className="mt-8 mb-12">
            <h1 className="text-basic  text-center">WE BRING YOUR DREAMS</h1>
            <h1 className="text-3xl font-bold text-center mt-4 mb-8">
              GET A QUOTE
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-12 my-8">
            {/* TARGET CATCH */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-orange-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-yellow-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-green-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-blue-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-purple-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="flex  justify-center">
              <div className="h-24 w-24 rounded-full bg-red-500 text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faMessage}
                />
              </div>
              <div className="ms-4">
                <h1 className="text-bold text-3xl mb-2">TARGET CATCH</h1>
                <h1 className=" text-base">Nunc sagittis ex malesuada magna</h1>
                <h1 className=" text-base">
                  imperdiet, ac pulvinar mi faucibus.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* various  icons*/}
      <div className="bg-blue-900 w-full h-full flex items-center  justify-center">
        <div>
          <div className="mt-8 mb- text-white">
            <h1 className="text-xl  text-center">WE BRING YOUR DREAMS</h1>
            <h1 className="text-3xl font-bold text-center mt-4 mb-8">
              COMPANY STATICS
            </h1>
          </div>
          <div className="flex justify-between mx-8 my-24 h-full">
            {/* avatar icons */}
            <div className="flex  justify-center bg-orange-500 px-6 py-4 rounded-md me-4">
              <div className="h-24 w-24 rounded-full  text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faUser}
                />
              </div>
              <div className="text-white">
                <h1 className="text-bold text-3xl mb-2">2901</h1>
                <h1 className=" text-3xl">HAPPY CUSTOMERS</h1>
              </div>
            </div>
            {/* Stategy icons */}
            <div className="flex  justify-center px-6 py-4 rounded-md bg-yellow-500 me-4">
              <div className="h-24 w-24 rounded-full text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faGear}
                />
              </div>
              <div className="text-white">
                <h1 className="text-bold text-3xl mb-2">801</h1>
                <h1 className=" text-3xl">ONLINE STRATEGY</h1>
              </div>
            </div>
            {/* result icon */}
            <div className="flex  justify-center px-6 py-4 rounded-md bg-green-500">
              <div className="h-24 w-24 rounded-full text-center flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-white text-4xl"
                  icon={faBarChart}
                />
              </div>
              <div className="text-white">
                <h1 className="text-bold text-3xl mb-2">1201</h1>
                <h1 className=" text-3xl">GREAT RESULTS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seo Experts */}
      <div className=" w-full h-full flex items-center  justify-center">
        <div>
          <div className="mt-8 ">
            <h1 className="text-lg text-center mt-4 mb-8">
              WE BUILD SEOMARKT WITH AWESOMENESS
              <h1 className="text-3xl font-bold  text-center">Seo Experts</h1>
            </h1>
          </div>
          <div className="  flex justify-center items-center">
            <div className="flex flex-between">
              <div className="bg-blue-900 p-8 m-4  flex justify-center items-center rounded-lg">
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-white text-2xl">Jhon Doe</h1>
                    <h1 className=" text-xl text-blue-200">Founder/Ceo</h1>
                  </div>
                  <div className="flex justify-between my-2 ">
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faGithub}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 p-8 m-4  flex justify-center items-center rounded-lg">
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-white text-2xl">Jhon Doe</h1>
                    <h1 className=" text-xl text-blue-200">Founder/Ceo</h1>
                  </div>
                  <div className="flex justify-between my-2 ">
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faGithub}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 p-8 m-4  flex justify-center items-center rounded-lg">
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-white text-2xl">Jhon Doe</h1>
                    <h1 className=" text-xl text-blue-200">Founder/Ceo</h1>
                  </div>
                  <div className="flex justify-between my-2 ">
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faGithub}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 p-8 m-4  flex justify-center items-center rounded-lg">
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-white text-2xl">Jhon Doe</h1>
                    <h1 className=" text-xl text-blue-200">Founder/Ceo</h1>
                  </div>
                  <div className="flex justify-between my-2 ">
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="text-white text-4xl"
                      icon={faGithub}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="<"
            checked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label=">"
          />
        </div>
      </div>
      {/* Our Partners */}
      <div className="bg-gray-50 w-full h-full p-12 flex justify-center	items-center	">
        <div>
          <div className="mt-8 mb-12">
            <h1 className="text-basic  text-center">
              OUR AWESOME CLIENT & WORKING TEAMS
            </h1>
            <h1 className="text-3xl font-bold text-center mt-4 mb-8">
              Our Partners
            </h1>
          </div>
          <div className="flex justify-between ">
            <div className="bg-white p-4 m-4">
              <Image className="w-24 h-24" src={fiver} alt="fiver"></Image>
            </div>
            <div className="bg-white p-4 m-4">
              <Image className="w-24 h-24" src={paypal} alt="fiver"></Image>
            </div>
            <div className="bg-white p-4 m-4">
              <Image className="w-24 h-24" src={wordpress} alt="fiver"></Image>
            </div>
            <div className="bg-white p-4 m-4">
              <Image className="w-24 h-24" src={theme} alt="fiver"></Image>
            </div>
            <div className="bg-white p-4 m-4">
              <Image className="w-24 h-24" src={woo} alt="fiver"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
