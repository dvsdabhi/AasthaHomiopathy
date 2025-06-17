// import React from 'react'

// const page = () => {
//   return (
//     <div> contact page</div>
//   )
// }

// export default page


import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
    title: 'Contact-us',
    href: '/contact',
  },
];

const ContactPage = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='bg-[url(/bg3.jpg)] rounded-2xl text-center'>
            <h1 className='text-3xl md:text-5xl font-bold text-white p-10 md:p-20 backdrop-blur-[3px]'>Contact us</h1>
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
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <Image src="/contact/pexels-karolina-grabowska-4386466.jpg" width={1} height={2} alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover" />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-amber-50 rounded-lg p-6 block text-[#18b3b9]">
                      <div className="flex items-center mb-6">
                        <FaPhoneVolume className='text-xl' />
                        <h5 className="text-black text-base font-normal leading-6 ml-6">+91 8866663066</h5>
                      </div>
                      <div className="flex items-center mb-6">
                        <MdMarkEmailUnread className='text-2xl' />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">priyankshekhaliya@gmail.com</h5>
                      </div>
                      <div className="flex items-center mb-6">
                        <HiOutlineLocationMarker className='text-4xl' />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">105/B, first floor rajlaxmi empire, dabholi char rasta, surat 395004 </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-[#18b3b9] font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
              <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
              <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
              <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone" />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                    <label className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                    <label className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                      <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> Phone
                    </label>
                  </div>
                </div>
              </div>
              <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" />
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 bg-[#18b3b9] hover:bg-[#6adbdf] shadow-sm cursor-pointer">Send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage