import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import Image from "next/image"

const secondcomponent = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-12 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                <AnimatedGradientText
                    speed={2}
                    colorFrom="#4ade80"
                    colorTo="#06b6d4"
                    className="text-4xl font-semibold tracking-tight"
                >
                    Why Choose Aastha Homeopathy Clinic?
                </AnimatedGradientText>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p>
                            “Our clinic offers quality treatments for different kinds of health conditions such as allergies, respiratory issues, digestive disorders, hormonal imbalances and skin concerns ensuring you receive the best care possible. Schedule your appointment with Dr.Priyank Shekhaliya  experienced homeopathy Doctor in Surat.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            height={1}
                            width={1}
                            alt=""
                            src="/about.jpg"
                            className="mx-auto size-10 rounded-full"
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Dr. Priyank Shekhaliya</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default secondcomponent