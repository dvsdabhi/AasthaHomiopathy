import React from 'react'
import Link from "next/link";

const services = ["Allergies", "Skin Disorders", "Digestive Issues", "Hormonal Imbalance", "Child Health"];

const thirdcomponent = () => {
    return (
        <section className="bg-white p-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">Our Treatments</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((treatment) => (
                        <div key={treatment} className="bg-green-50 p-4 rounded shadow hover:bg-green-100">
                            <p className="font-medium text-green-700">{treatment}</p>
                        </div>
                    ))}
                </div>
                <Link href="/treatments">
                    <button className="mt-5 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition cursor-pointer">
                        View all
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default thirdcomponent