"use client"

import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { Check, Copy, GraduationCap, Mail } from "lucide-react"

import "../css/profile.css"
import { useEffect, useRef, useState } from "react"

export function Hero() {
    return (
        <div id="home" className="bg-background">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground-1 sm:text-5xl md:text-6xl">
                            <span className="block">Hi, I'm</span>
                            <span className="block text-foreground-2">Brynpryl P. Bandiola</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-foreground-3 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Full Stack Developer | Cloud Enthusiast | Continuous Learner
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 pt-8">
                            <i className="devicon-terraform-plain-wordmark colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-amazonwebservices-line-wordmark colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-docker-plain-wordmark colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-linux-plain text-amber-600 text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-java-plain-wordmark colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-angular-plain text-red-600 text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-spring-original-wordmark colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-django-plain text-green-800 text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-djangorest-plain colored text-3xl sm:text-4xl md:text-5xl"></i>
                            <i className="devicon-git-plain colored text-3xl sm:text-4xl md:text-5xl"></i>
                        </div>
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
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const emailRef = useRef(null)

    const email = "brynprylbandiola@gmail.com" // Replace with your actual email

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // Reset copied state after 2 seconds
        })
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isModalOpen])
    return (
        <div className="bg-card p-6 rounded-lg shadow-md">
            <img
                src="/static_assets/bryn.jpg"
                style={{ height: "150px", width: "150px", objectFit: "cover" }}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-foreground-2 text-xl font-semibold text-center mb-2">Brynpryl P. Bandiola</h2>
            <p className="text-foreground-3 text-center mb-4">Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/brynpryl0426" className="text-gray-400 hover:text-gray-600" target="_blank">
                    <GitHubLogoIcon className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/brynpryl" className="text-gray-400 hover:text-gray-600" target="_blank">
                    <LinkedInLogoIcon className="h-6 w-6" />
                </a>
                <button
                    onClick={openModal}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Show email"
                >
                    <Mail className="h-6 w-6" />
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="email-modal">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">My Email Address</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500" ref={emailRef}>
                                    {email}
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                >
                                    {isCopied ? (
                                        <>
                                            <Check className="w-5 h-5 inline mr-2" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-5 h-5 inline mr-2" />
                                            Copy to Clipboard
                                        </>
                                    )}
                                </button>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export function Description() {
    return (
        <div id="description" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto profile">
                <h2 className="text-3xl font-extrabold text-foreground-1 mb-4">About Me</h2>
                <p className="text-lg text-foreground-2">
                    I'm a passionate Full Stack Developer with 2 years of experience in building web applications.
                    I specialize in JavaScript, React, Angular, Spring Boot, Django, and AWS cloud services. My goal is to create
                    efficient, scalable, and user-friendly applications that solve real-world problems.
                </p>
            </div>
        </div>
    )
}

export function Education() {
    const educationItems = [
        {
            degree: "Bachelor of Science in Information Technology",
            school: "STI College Koronadal",
            year: "2018 - 2022",
        },
        {
            degree: "Science, Technology, Engineering, and Mathematics",
            school: "Notre Dame of Marbel University",
            year: "2016 - 2018",
        },
    ]

    return (
        <div id="education" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground-2 mb-8 flex items-center">
                    <GraduationCap className="mr-2" />
                    Education
                </h2>
                <div className="space-y-8">
                    {educationItems.map((item, index) => (
                        <div key={index} className="border-l-4 border-zinc-100 pl-4">
                            <h3 className="text-xl font-bold text-foreground-1">{item.degree}</h3>
                            <p className="text-foreground-2">{item.school}</p>
                            <p className="text-foreground-3">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}