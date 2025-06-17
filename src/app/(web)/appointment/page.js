// import React from 'react'

// const page = () => {
//   return (
//     <div> appointement page</div>
//   )
// }

// export default page

import React from 'react'
import { SparklesText } from "../../../components/magicui/sparkles-text";
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
        title: 'Contact-us',
        href: '/contact',
    },
];

const page = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='bg-[url(/bg3.jpg)] rounded-2xl text-center'>
                        <h1 className='text-3xl md:text-5xl font-bold text-white p-10 md:p-20 backdrop-blur-[3px]'>Book Appointment</h1>
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
                    <SparklesText className='text-center p-5 text-4xl'>Appointment</SparklesText>
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="lg:mb-0 mb-10">
                            <div className="group w-full h-full">
                                <div className="relative h-full">
                                    <Image src="/appointment/pexels-bertellifotografia-29509467.jpg" alt="ContactUs tailwind section" className="w-full h-[700px] lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover" width={1} height={1} />
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h3 className="text-xl font-bold mb-4 text-gray-800">Clinic Hours</h3>
                                            <ul className="space-y-1">
                                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                                                    <li key={day} className="flex gap-5 md:justify-between">
                                                        <span className="text-gray-600 w-full max-w-[100px]">{day}</span>
                                                        <span className="font-medium">10:00 AM - 1:00 PM, 5:00 PM - 9:00 PM</span>
                                                    </li>
                                                ))}
                                                <li className="flex justify-between pt-2 border-t border-gray-100">
                                                    <span className="text-gray-600">Sunday</span>
                                                    <span className="font-medium">10:00 AM - 1:00 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl space-y-5">
                            <div className="bg-[#18b3b9] text-white font-manrope font-semibold p-5 mb-5 rounded-lg">
                                <h1 className="text-2xl font-semibold">Schedule Appointment</h1>
                                <p>Book your visit with us</p>
                            </div>
                            <div className='space-y-2'>
                                <div className="space-y-2">
                                    <label>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                </div>


                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="checkup">Routine Checkup</option>
                                        <option value="treatment">Treatment</option>
                                        <option value="emergency">Emergency</option>
                                    </select>
                                </div>


                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Additional Notes
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        // rows="3"
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Any special requests or information..."
                                    ></textarea>
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm hover:font-bold font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#18b3b9] text-primary-foreground hover:bg-[#18b7b1] h-10 px-4 py-2 w-full cursor-pointer"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;