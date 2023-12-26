import { faHouse, faLocation, faMessage, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* contact */}
            <div className='bg-zinc-900 w-full h-full py-24'>
                <div className='my-auto'>
                    <h1 className='text-7xl font-bold text-white text-center'>CONTACT</h1>
                    <h1 className='text-3xl font-bold text-white text-center mt-4'>IF YOU HAVE PRE-SALE QUESTIONS PLEASE CONTACT WITH US</h1>
                </div>
            </div>
            {/* various contact icons*/}
            <div className='bg-white w-full h-full '>
                <div className='flex justify-between mx-8 my-24'>
                    {/* email icons */}
                    <div className='flex  justify-center'>
                        <div className='h-24 w-24 rounded-full bg-red-500 text-center flex items-center justify-center '>
                            <FontAwesomeIcon className='text-white text-4xl' icon={faMessage} />


                        </div>
                        <div className='ms-4'>
                            <h1 className='text-bold text-3xl mb-2'>
                                HAVE QUESTIONS?</h1>
                            <h1 className=' text-base'>support@yoursite.com</h1>
                            <h1 className=' text-base'>hello@yoursite.com</h1>
                        </div>

                    </div>
                    {/* call icons */}
                    <div className='flex  justify-center'>
                        <div className='h-24 w-24 rounded-full bg-yellow-500 text-center flex items-center justify-center '>
                            <FontAwesomeIcon className='text-white text-4xl' icon={faPhone} />

                        </div>
                        <div className='ms-4'>
                            <h1 className='text-bold text-3xl mb-2'>
                                CALL US TODAY</h1>
                            <h1 className=' text-base'>+90 987 654 32 10</h1>
                            <h1 className=' text-base'>+90 987 654 32 11</h1>
                        </div>

                    </div>
                    {/* location icon */}
                    <div className='flex  justify-center'>
                        <div className='h-24 w-24 rounded-full bg-green-500 text-center flex items-center justify-center '>
                            <FontAwesomeIcon className='text-white text-4xl' icon={faLocation} />

                        </div>
                        <div className='ms-4'>
                            <h1 className='text-bold text-3xl mb-2'>
                                OUR OFFICE'S
                            </h1>
                            <h1 className=' text-base'>21 Revolution Street Paris, France</h1>
                            <h1 className=' text-base'>198st Melbourne Street Australia</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* Qoute */}
            <div className='bg-gray-50 w-full h-full p-12 flex justify-center	items-center	'>
                <div>
                    <div className='my-auto'>
                        <h1 className='text-basic  text-center'>WE BRING YOUR DREAMS</h1>
                        <h1 className='text-3xl font-bold text-center my-4'>GET A QUOTE</h1>
                    </div>
                    <div className='text-center'>
                        <input type="text" placeholder="Name" className="my-2 input input-bordered w-full max-w-xs" /><br />
                        <input type="email" placeholder="Email" className="my-2 input input-bordered w-full max-w-xs" /><br />
                        <input type="text" placeholder="Phone" className="my-2 input input-bordered w-full max-w-xs" /><br />
                        <input type="text" placeholder="Subject" className="my-2 input input-bordered w-full max-w-xs" /><br />
                        <textarea placeholder="Bio" className="my-2 textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>


                    </div>
                        <button className="btn btn-active btn-secondary btn-wide">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;