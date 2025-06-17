// import React from 'react'

// const page = () => {
//   return (
//     <div>blog page</div>
//   )
// }

// export default page

import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"

const breadcrumbs = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Blogs',
        href: '/blogs',
    },
];

const page = () => {
    return (
        <>
            <section className="py-5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='bg-[url(/bg3.jpg)] rounded-2xl text-center'>
                        <h1 className='text-3xl md:text-5xl font-bold text-white p-10 md:p-20 backdrop-blur-[3px]'>Our blogs</h1>
                    </div>
                    <Breadcrumb className='my-10'>
                        <BreadcrumbList>
                            {breadcrumbs.map((item, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </div>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                    {/* <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2> */}
                    <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                        <div className="cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#18b3b9]">
                            <div className="flex items-center mb-6">
                                <Image src="/about/ab2.jpg" width={1} height={2} alt="Harsh image" className="rounded-lg w-full object-cover" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech 101: Exploring the Basics of Electronic Payments</h4>
                                <div className="flex items-center justify-between font-medium">
                                    <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                                    <span className="text-sm text-[#18b3b9]">2 year ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#18b3b9]">
                            <div className="flex items-center mb-6">
                                <Image src="/about/ab2.jpg" width={1} height={2} alt="John image" className="rounded-lg w-full object-cover" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech</h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">By John D.</h6>
                                    <span className="text-sm text-[#18b3b9]">2 year ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#18b3b9]">
                            <div className="flex items-center mb-6">
                                <Image src="/about/ab2.jpg" width={1} height={2} alt="Alexa image" className="rounded-lg w-full object-cover" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech Solutions for Student Loans: Easing the Burden of Education Debt</h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                                    <span className="text-sm text-[#18b3b9]">2 year ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#18b3b9]">
                            <div className="flex items-center mb-6">
                                <Image src="/about/ab2.jpg" width={1} height={2} alt="Alexa image" className="rounded-lg w-full object-cover" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech Solutions for Student Loans: Easing the Burden of Education Debt</h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                                    <span className="text-sm text-[#18b3b9]">2 year ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#18b3b9]">
                            <div className="flex items-center mb-6">
                                <Image src="/about/ab2.jpg" width={1} height={2} alt="Alexa image" className="rounded-lg w-full object-cover" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">Fintech Solutions for Student Loans: Easing the Burden of Education Debt</h4>
                                <div className="flex items-center justify-between  font-medium">
                                    <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                                    <span className="text-sm text-[#18b3b9]">2 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="/blogs" className="cursor-pointer border border-[#18b3b9] shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-[#bff1f3]">View All</a> */}
                </div>
            </section>
        </>
    )
}

export default page;
