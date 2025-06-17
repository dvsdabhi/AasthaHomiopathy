// import React from 'react'

// const page = () => {
//   return (
//     <div>Treatments page</div>
//   )
// }

// export default page


import React from 'react'
import { GiStethoscope } from "react-icons/gi";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const breadcrumbs = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Treatments',
        href: '/treatments',
    },
];

const page = () => {
    return (
        <>
            <section className="flex justify-center relative rounded-2xl w-full">
                <div className="w-full max-w-7xl p-5">
                    <div className='text-center'>
                        <div className='bg-[url(/bg3.jpg)] rounded-2xl'>
                            <h1 className='text-3xl md:text-5xl font-bold text-white p-10 md:p-20 backdrop-blur-[3px]'>Our Treatments</h1>
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
                        {/* <h1 className='text-5xl font-normal'>Our Treatments</h1> */}
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                            <div className='flex flex-col gap-10'>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Nervous System</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Digestion</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Skin problems</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>ENT(ear, nose and throat )</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Musculoskeleton complaints</h3>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10 my-10'>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Gynaecological complaints</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Harmonal disorders like diabetes</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Surgical complaints like tumors, cyst, etc.</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Sexual complaints</h3>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <div className='bg-[#f9f8ff] w-[70px] h-370px] p-3 text-[#18b3b9] hover:text-white hover:bg-[#18b3b9] rounded-md'>
                                        <span><GiStethoscope className='hover:text-white text-5xl' /></span>
                                    </div>
                                    <h3 className='text-xl font-medium hover:text-[#18b3b9]'>Various acute and chronic diseases</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;