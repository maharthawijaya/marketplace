import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const subCategories = [
    { name: 'Womans Fashion', href: '#' },
    { name: 'Mens Fashion', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Home & Lifestyle', href: '#' },
    { name: 'Medicine', href: '#' },
    { name: 'Sport & Outdoor', href: '#' },
    { name: 'Babys & Toys', href: '#' },
    { name: 'Groceries & Pets', href: '#' },
    { name: 'Health & Beauty', href: '#' },
]

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        sale: '$20',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        sale: '$20',
        color: 'Black',
    },
    {
        id: 33,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        sale: '$20',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        sale: '$20',
        color: 'Black',
    },

]

export default function MainPage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const getTimeDiffrence = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownTime - currentTime;
        let days =
            Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
                ? `${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`
                : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
                10
                ? `${Math.floor(
                    (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`
                : `0${Math.floor(
                    (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`;
        const minutes =
            Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
                : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
        const seconds =
            Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
                ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
                : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
        if (timeDiffrence < 0) {
            setCountDownTIme({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
            clearInterval();
        } else {
            setCountDownTIme({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };

    const startCountDown = useCallback(() => {
        {
            const customDate = new Date();
            const countDownDate = new Date(
                customDate.getFullYear(),
                customDate.getMonth() + 1,
                customDate.getDate() + 6,
                customDate.getHours(),
                customDate.getMinutes(),
                customDate.getSeconds() + 1
            );
            setInterval(() => {
                getTimeDiffrence(countDownDate.getTime());
            }, 1000);
        }
    }, []);
    useEffect(() => {
        startCountDown();
    }, [startCountDown]);

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Page filter and thumbnail */}
                <main className="lg:mr-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <section aria-labelledby="products-heading" className="sm:pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block border-r-2 pt-8 pb-0">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3 py-8">
                                <img src={require('./Thumbnail.png')} alt="Description of the image" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Flash Sale */}
            <div className="mx-auto max-w-2xl px-4 py-16 lg:pt-0 lg:pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-center flex-col gap-4">
                    <h1 className="sm:text-3xl  text-2xl font-semibold leading-8 text-black text-center">
                        Flash Sale
                    </h1>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex gap-1 ">
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.days?.charAt(0)}
                            </span>
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.days?.charAt(1)}
                            </span>
                            <span
                                className={
                                    countDownTime?.days?.length <= 2
                                        ? "hidden"
                                        : "bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl"
                                }
                            >
                                {countDownTime?.days?.charAt(2)}
                            </span>
                        </div>
                        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
                        <div className="flex gap-1 shadow-lg">
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.hours?.charAt(0)}
                            </span>
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.hours?.charAt(1)}
                            </span>
                        </div>
                        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
                        <div className="flex gap-1">
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.minutes?.charAt(0)}
                            </span>
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.minutes?.charAt(1)}
                            </span>
                        </div>
                        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
                        <div className="flex gap-1">
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.seconds?.charAt(0)}
                            </span>
                            <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
                                {countDownTime?.seconds?.charAt(1)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900 line-through">{product.price}</p>
                                <p className="text-sm font-medium text-red-500">{product.sale}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Shop by Categories */}
            <div className="mx-auto max-w-2xl px-4 py-16 lg:pt-0 lg:pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">Shop by Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            Phones
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            Computers
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            SmartWatch
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            Camera
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            Microphone
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group flex p-16 border-2">
                        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl text-black font-roboto font-medium group-hover:bg-opacity-60 top-16 group-hover:opacity-50">
                            Printer
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:opacity-50 absolute top-16 w-10 h-10 transform -translate-y-full -translate-x-1/2 left-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Last Banner */}
            <div className="mx-auto max-w-2xl px-4 lg:py-16 lg:pt-0 lg:pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid gap-x-6 gap-y-10 grid-cols-1 xl:gap-x-8 mx-auto">
                    <a href='#'>
                        <img src={require('./Thumbnail.png')} alt="Description of the image" className="w-full" />
                    </a>
                </div>
            </div>

        </div>
    )
}