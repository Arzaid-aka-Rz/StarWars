import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import starWarImage from '../images/star war.png';
import ahsokaImage from '../images/asset 4.jpeg';
import leftArrowImage from '../images/left-arrow.png';
import rightArrowImage from '../images/right-arrow.png';
import ahsokaImageSecond from '../images/Ahsoka Image.jpeg';
import hero1 from '../images/hero journey.jpg';
import hero2 from '../images/hero journey 2.jpeg';
import hero3 from '../images/hero journey 3.jpg';
import cover1 from '../images/cover 1.jpeg';
import cover2 from '../images/cover 2.jpeg';
import cover3 from '../images/cover 3.jpeg';
import one from '../images/one.jpeg';
import two from '../images/two.jpeg';
import third from '../images/third.jpeg';

const Home = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen">

            <div className="container mx-auto py-6">

                <div className="flex justify-between items-center">

                    <div className="flex gap-4">
                        <a href="https://www.tiktok.com/" className="hover:text-blue-500">TikTok</a>
                        <a href="https://www.instagram.com/" className="hover:text-pink-500">Instagram</a>
                        <a href="https://www.facebook.com/" className="hover:text-blue-600">Facebook</a>
                        <a href="https://www.twitter.com/" className="hover:text-blue-400">Twitter</a>
                        <a href="https://www.youtube.com/" className="hover:text-red-600">YouTube</a>
                    </div>

                    <div className="self-center">
                        <img
                            className="w-56 h-auto"
                            src={starWarImage}
                            alt="Star Wars Logo"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        {showSearchInput ? (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-2 py-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        ) : (
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                                onClick={() => setShowSearchInput(true)}
                            >
                                Search
                            </button>
                        )}
                        <Link to="/signin" className="text-blue-500 hover:underline text-lg">
                            SIGN IN
                        </Link>
                    </div>

                </div>

                <nav className='flex justify-between items-center mt-20'>
                    <Link to="/news" className="text-white hover:underline text-lg">NEWS+FEATURES</Link>
                    <Link to="/video" className="text-white hover:underline text-lg">VIDEO</Link>
                    <Link to="/films" className="text-white hover:underline text-lg">FILMS</Link>
                    <Link to="/series" className="text-white hover:underline text-lg">SERIES</Link>
                    <Link to="/interactive" className="text-white hover:underline text-lg">INTERACTIVE</Link>
                    <Link to="/community" className="text-white hover:underline text-lg">COMMUNITY</Link>
                    <Link to="/databank" className="text-white hover:underline text-lg">DATABANK</Link>
                    <Link to="/disney+" className="text-white hover:underline text-lg">DISNEY+</Link>
                </nav>

            </div>

            <div className="border-t-2 border-gray-300 m-5 p-5 bg-[rgb(10, 11, 11)]">
                <p className="text-center">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
            </div>


            <section className="mt-5 relative">
                <div className="relative">
                    <img src={ahsokaImage} alt="ahsoka image logo" className="w-full" />

                    <div className="absolute top-16 left-12 md:top-48 md:left-20 p-10 md:p-10">
                        <h1 className="text-white font-bold text-4xl md:text-5xl mb-10">
                            WHO IS AHSOKA TANO?
                        </h1>
                        <p className="text-white font-semibold text-lg md:text-3xl mb-10">
                            Once a rebel, always a rebel
                        </p>
                        <div className="mt-4 md:mt-6">
                            <button
                                style={{ backgroundColor: '#fade4b', color: 'black' }}
                                className="rounded-full px-12 py-4 hover:bg-yellow-600"
                            >
                                READ MORE
                            </button>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
                        <img src={leftArrowImage} alt="left arrow" className="cursor-pointer w-14 h-auto" />
                    </div>

                    <div className="absolute top-1/2 right-6 md:right-16 transform -translate-y-1/2">
                        <img src={rightArrowImage} alt="right arrow" className="cursor-pointer w-14 h-auto" />
                    </div>
                </div>
            </section>


            <div className="  m-4 p-4 "></div>


            <section className="relative">
                <div className="relative ">
                    <img src={ahsokaImageSecond} alt="ahsoka second image logo" className="w-full" />
                    <div className="absolute top-16 left-12 p-10">
                        <p className="text-white font-semibold text-3xl mb-10">
                            Ahsoka Tano investigates an emerging <br /> threat to the galaxy,
                            Original Series <br /> streaming August 23, only on Disney+.
                        </p>
                        <div className="mt-4 md:mt-6">
                            <button
                                style={{ backgroundColor: '#fade4b', color: 'black' }}
                                className="rounded-full px-12 py-4 hover:bg-yellow-600"
                            >
                                EXPLORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center mt-12">
                    <div className="p-20">
                        <div className="flex gap-4 ">

                            <div className=" flex flex-col gap-4 " style={{ transform: 'translateY(-50%)' }}>
                                <img
                                    src={hero1}
                                    alt="hero 1 image"
                                    className="w-full h-full object-cover"
                                />
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p>
                                    Ahsoka Premiere Date Revealed
                                </p>
                            </div>

                            <div className=" flex flex-col gap-4" style={{ transform: 'translateY(-50%)' }}>
                                <img
                                    src={hero2}
                                    alt="hero 2 image"
                                    className="w-full h-full object-cover"
                                />
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p>
                                    "Begin"| Ahsoka
                                </p>
                            </div>
                            <div className="  flex flex-col gap-4" style={{ transform: 'translateY(-50%)' }}>
                                <img
                                    src={hero3}
                                    alt="hero 3 image"
                                    className="w-full h-full object-cover"
                                />
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p>
                                    Teaser Trailer | Ahsoka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section>
                <div className='mx-auto min-h-screen w-11/12 flex flex-col'>

                    <div className='flex flex-col'>

                        <div className='flex justify-between'>

                            <div>
                                <h1 className="font-DINNext text-3xl leading-7 text-left tracking-tighter">
                                    Latest News + Features
                                </h1>
                            </div>
                            <div className="font-sans text-xl text-start">
                                <p className="font-serif text-xl leading-6 tracking-normal">
                                    VIEW ALL
                                </p>
                            </div>

                        </div>

                        <div className='flex gap-1 mt-2'>
                            <div className="h-0.5 w-2 bg-gray-300 shadow"></div>
                            <div className="h-0.5 w-full bg-gray-300 shadow"></div>
                        </div>

                        <div className='flex gap-4'>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover1}
                                        alt="cover 1 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    New Star Wars: Visions One Shot Coming <br />from Marvel and Preach Momoko-Exclusive<br />Reveal
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover2}
                                        alt="cover 2 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    10 of Ahsoka Tano’s Greatest Moments
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover3}
                                        alt="cover 3 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    10 Essential Ahsoka Tano Episodes
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className='flex flex-col'>

                        <div className='flex justify-between'>

                            <div>
                                <h1 className="font-DINNext text-3xl leading-7 text-left tracking-tighter">
                                    Latest Video
                                </h1>
                            </div>
                            <div className="font-sans text-xl text-start">
                                <p className="font-serif text-xl leading-6 tracking-normal">
                                    VIEW ALL
                                </p>
                            </div>

                        </div>

                        <div className='flex gap-1 mt-2'>
                            <div className="h-0.5 w-2 bg-gray-300 shadow"></div>
                            <div className="h-0.5 w-full bg-gray-300 shadow"></div>
                        </div>

                        <div className='flex gap-4'>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover1}
                                        alt="cover 1 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    A Hero's Journey | Ahsoka
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover2}
                                        alt="cover 2 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    A New Star Wars Legacy | Ahsoka
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={cover3}
                                        alt="cover 3 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>
                                <p className="font-sans text-2xl leading-6 text-left tracking-normal mb-32">
                                    Rosario Dawson’s Ahsoka in 30 | Ahsoka
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>

                        <div className='flex justify-between'>

                            <div>
                                <h1 className="font-DINNext text-3xl leading-7 text-left tracking-tighter">
                                    Explore More
                                </h1>
                            </div>
                            <div className="font-sans text-xl text-start">
                                <p className="font-serif text-xl leading-6 tracking-normal">
                                    VIEW ALL
                                </p>
                            </div>

                        </div>

                        <div className='flex gap-1 mt-2'>
                            <div className="h-0.5 w-2 bg-gray-300 shadow"></div>
                            <div className="h-0.5 w-full bg-gray-300 shadow"></div>
                        </div>

                        <div className='flex gap-4'>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={one}
                                        alt="cover 1 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>

                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={two}
                                        alt="cover 2 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>

                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="w-full h-[300px]">
                                    <img
                                        src={third}
                                        alt="cover 3 image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='flex gap-1 mb-10'>
                                    <div className='bg-white w-10 h-1' />
                                    <div className='bg-white w-2 h-1' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <footer class="bg-black text-white py-8">
                <div class="container mx-auto flex flex-col gap-6 items-center justify-center">

                    <div class="flex">
                        <h1 class="text-2xl font-semibold">More From Star Wars:</h1>
                    </div>

                    <div class="flex gap-4 text-xl">
                        <a href="https://www.tiktok.com/" class="hover:text-blue-500">TikTok</a>
                        <a href="https://www.instagram.com/" class="hover:text-pink-500">Instagram</a>
                        <a href="https://www.facebook.com/" class="hover:text-blue-600">Facebook</a>
                        <a href="https://www.twitter.com/" class="hover:text-blue-400">Twitter</a>
                        <a href="https://www.youtube.com/" class="hover:text-red-600">YouTube</a>
                    </div>

                    <div>
                        <p class="text-sm">&copy; Lucasfilm Ltd. All Rights Reserved</p>
                    </div>

                    <div class="flex gap-2 text-sm">
                        <a href="#" class="hover:text-blue-500">Terms of Use</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Additional Content Information</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Privacy Policy</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Children's Online Privacy Policy</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Your US State Privacy Rights</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Star Wars at shopDisney</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Star Wars Helpdesk</a>
                        <div class="w-1 h-5 bg-white"></div>
                        <a href="#" class="hover:text-blue-500">Interest-Based Ads</a>
                    </div>

                    <div>
                        <p class="text-sm">Do Not Sell or Share My Personal Information</p>
                    </div>

                </div>
            </footer>


        </div>

    );
}

export default Home;
