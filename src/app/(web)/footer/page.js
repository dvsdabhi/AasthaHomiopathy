import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"

const page = () => {
    return (
        <footer className="bg-white text-gray-800 py-10 mt-20 border-t">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: About */}
                <div>
                    <Link href="/home"><Image className="h-12 w-auto cursor-pointer" height={1} width={1} src="/logo.png" alt="logo" /></Link>
                    <p className="mt-5 text-sm text-gray-700">
                        Trusted Homeopathy for a Healthier Tomorrow,
                        Rooted in Nature, Backed by Science
                    </p>
                </div>

                {/* Section 2: Links */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/home" className="hover:text-blue-600">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                        <li><Link href="/treatments" className="hover:text-blue-600">Treatments</Link></li>
                        <li><Link href="/blogs" className="hover:text-blue-600">Blogs</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                        <li><Link href="/appointment" className="hover:text-blue-600">Book-AppoiLinktement</Link></li>
                    </ul>
                </div>

                {/* Section 3: Social */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Connect</h3>
                    <div className="flex space-x-4 text-xl">
                        <Link href="https://github.com/dvsdabhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-black"><FaWhatsapp /></Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-blue-700"><FaInstagram /></Link>
                        <Link href="/" className="hover:text-green-600"><FaGlobe /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs text-gray-800 mt-10">
                © {new Date().getFullYear()} Aastha Homeopathy. All rights reserved.
            </div>
        </footer>
    );
}

export default page