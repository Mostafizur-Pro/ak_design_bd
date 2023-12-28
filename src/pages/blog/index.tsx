import React from 'react';
import Image from "next/image";
import blog1 from '../../../public/blog1.jpg'
import blog2 from '../../../public/blog2.jpg'
import blog3 from '../../../public/blog3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const index = () => {
    return (
        <div>
            {/* blog */}
            <div className='bg-green-500 w-full h-full py-24'>
                <div className='my-auto'>
                    <h1 className='text-7xl font-bold text-white text-center'>SEO BLOG
                    </h1>
                    <h1 className='text-3xl font-bold text-gray-200 text-center mt-8'>LATEST SEARCH ENGINE OPTIMIZATION TIPS, TRICKS, TRENDS
                    </h1>
                </div>
            </div>
            <div className='bg-white'>
                <div className='p-12 grid grid-cols-4 gap-4 bg-gray-200'>
                    <div className="col-span-3 bg-white">
                        <div className='grid grid-cols-3 gap-4 '>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog1} alt='blog2'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2">
                        </div>
                        {/* another section */}
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog2} alt='blog3'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2">
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog3} alt='blog2'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2">
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog1} alt='blog1'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2">
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog2} alt='blog1'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2">
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog3} alt='blog1'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* divider */}
                        <div className="bg-gray-200 w-full h-2"> 
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-'>
                            <div className="col-span-1 ">
                                <Image className='w-full h-full' src={blog1} alt='blog1'></Image>
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <div className='flex justify-start p-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className='flex justify-start p-4'>
                                            <h1 className='mx-4 text-lg'>Jhon doe </h1>
                                            <h1 className='mx-4 text-lg'>12:12:2023</h1>
                                            <h1 className='mx-4 text-lg'>123</h1>
                                            <h1 className='mx-4 text-lg'>6123</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-xl m-2 p-2 font-bold ">
                                            Helping webmasters re-secure their sites
                                        </h1>
                                        <div className="flex justify-start ">
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-500 m-4 p-2 rounded-lg"
                                                icon={faTwitter}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-blue-900 m-4 p-2 rounded-lg"
                                                icon={faFacebook}
                                            />
                                            <FontAwesomeIcon
                                                className="text-white text-4xl bg-gray-900 m-4 p-2 rounded-lg"
                                                icon={faGithub}
                                            />
                                        </div>
                                        <Link href={""} className='text-3xl text-red-500  m-4'>Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-1 bg-gray-200">
                        {/* Subscribe */}
                        <div className='  p-12 flex justify-center	items-center bg-white'>
                            <div>
                                <div className='my-auto'>
                                    <h1 className='text-3xl font-bold text-center my-4'>SUBSCRIBE FOR NEWS</h1>
                                    <h1 className='text-basic text-gray-400  text-center'>Subscribe our newsletter for discount and coupon codes!</h1>
                                </div>
                                <div className='text-center'>
                                    <input type="text" placeholder="Your Name" className="my-2 input input-bordered w-full max-w-xs" /><br />
                                    <input type="email" placeholder="Email" className="my-2 input input-bordered w-full max-w-xs" /><br />
                                </div>
                                <button className="my-2 btn btn-active btn-warning btn-wide">Subscribe Now</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default index;