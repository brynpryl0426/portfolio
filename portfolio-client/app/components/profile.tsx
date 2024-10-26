"use client"

import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { GraduationCap } from "lucide-react"

export function Hero() {
    return (
        <div id="home" className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Hi, I'm</span>
                            <span className="block text-indigo-600">Brynpryl P. Bandiola</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Full Stack Developer | Cloud Enthusiast | Continuous Learner
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProfileCard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img
                src="/bryn.jpg"
                style={{ height: "150px", width: "150px", objectFit: "cover" }}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">Brynpryl P. Bandiola</h2>
            <p className="text-gray-600 text-center mb-4">Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                    <GitHubLogoIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                    <LinkedInLogoIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                    <TwitterLogoIcon className="h-6 w-6" />
                </a>
            </div>
        </div>
    )
}

export function Description() {
    return (
        <div id="description" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-500">
                    I'm a passionate Full Stack Developer with 5 years of experience in building web applications.
                    I specialize in JavaScript, React, Node.js, and AWS cloud services. My goal is to create
                    efficient, scalable, and user-friendly applications that solve real-world problems.
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or enjoying outdoor activities.
                </p>
            </div>
        </div>
    )
}

export function Education() {
    const educationItems = [
        {
            degree: "Master of Science in Computer Science",
            school: "University of Technology",
            year: "2018 - 2020",
        },
        {
            degree: "Bachelor of Science in Software Engineering",
            school: "State University",
            year: "2014 - 2018",
        },
    ]

    return (
        <div id="education" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                    <GraduationCap className="mr-2" />
                    Education
                </h2>
                <div className="space-y-8">
                    {educationItems.map((item, index) => (
                        <div key={index} className="border-l-4 border-indigo-600 pl-4">
                            <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                            <p className="text-gray-600">{item.school}</p>
                            <p className="text-gray-500">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}