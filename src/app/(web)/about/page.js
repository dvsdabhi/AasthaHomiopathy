// import React from 'react'

// const page = () => {
//   return (
//     <div>About page</div>
//   )
// }

// export default page

import { Card } from '@/components/ui/card'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image";

const breadcrumbs = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
]

const page = () => {
  return (
    <>
      <section className="flex justify-center relative rounded-2xl w-full">
        <div className="w-full max-w-7xl p-5">
          <div className='text-center'>
            <div className='bg-[url(/bg3.jpg)] rounded-2xl'>
              <h1 className='text-3xl md:text-5xl font-bold text-white p-10 md:p-20 backdrop-blur-[3px]'>About Us</h1>
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
            <p className='text-gray-500 my-10'>
              Aastha homeopathy clinic provide holistic cure that treat person as a whole not sickness ,
              we provide personalized homeopathic treatment rooted in compassion , care  , deep understanding of natural remedies.
              Our clinic offers quality treatments for different kinds of health conditions such as allergies,
              respiratory issues, digestive issues, lifestyle disorders, hormonal imbalances and skin concerns,
              joints and muscles  related issue ensuring you receive the best care possible.
              Book your appointment with dr Priyank shekhaliya  consulting homeopathy doctor is surat.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-10'>
              <h1 className='text-4xl font-bold'>Benefits of Homeopathic</h1>
              <p>
                100% in treating such kinds of problems permanently with some very wonderful homoeopathic medicines and proper management.
                Homeopathy is a medical system based on the belief that the body can cure itself.
                Those who practice it use tiny amounts of natural substances, like plants and minerals.
                They believe these stimulate the healing process.
              </p>
              <div>
                <div className='flex gap-5 items-center'>
                  <span><FaCheckCircle className='text-xl text-[#18b3b9]' /></span>
                  <h4 className='text-xl font-medium'>Consultation</h4>
                </div>
                <div className='flex gap-5 items-center'>
                  <span><FaCheckCircle className='text-xl text-[#18b3b9]' /></span>
                  <h4 className='text-xl font-medium'>Proper Management</h4>
                </div>
                <div className='flex gap-5 items-center'>
                  <span><FaCheckCircle className='text-xl text-[#18b3b9]' /></span>
                  <h4 className='text-xl font-medium'>Customer Satisfaction</h4>
                </div>
              </div>
            </div>
            <Card className='py-0 rounded-4xl'>
              <Image src="/about/ab2.jpg" alt="" className='w-full h-full object-cover rounded-4xl' width={2} height={5} />
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default page;