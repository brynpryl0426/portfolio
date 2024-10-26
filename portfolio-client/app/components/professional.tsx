import { CodeIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { BriefcaseIcon, Code, Mail } from "lucide-react"
import { useState } from 'react'

export function Skills() {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["JavaScript", "Python", "Java", "C#", "TypeScript"],
        },
        {
            category: "Frontend",
            skills: ["React", "Vue.js", "HTML5", "CSS3", "Sass", "Tailwind CSS"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Django", "ASP.NET Core"],
        },
        {
            category: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
        },
    ]

    return (
        <div id="skills" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                    <Code className="mr-2" />
                    Skills
                </h2>
                <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function WorkExperience() {
    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovators Inc.",
            period: "2020 - Present",
            responsibilities: [
                "Lead a team of 5 developers in building and maintaining large-scale web applications",
                "Implemented microservices architecture using Node.js and Docker, improving system scalability",
                "Optimized database queries and implemented caching strategies, resulting in a 40% performance improvement",
            ],
        },
        {
            title: "Full Stack Developer",
            company: "WebSolutions Co.",
            period: "2018 - 2020",
            responsibilities: [
                "Developed and maintained multiple client websites using React and Express.js",
                "Integrated third-party APIs and implemented OAuth 2.0 for secure authentication",
                "Collaborated with UX designers to implement responsive and accessible user interfaces",
            ],
        },
        {
            title: "Junior Developer",
            company: "StartUp Dynamics",
            period: "2016 - 2018",
            responsibilities: [
                "Assisted in the development of a mobile-first web application using Vue.js and Firebase",
                "Implemented unit tests and participated in code reviews to ensure code quality",
                "Contributed to the company's internal tool for project management and time tracking",
            ],
        },
    ]

    return (
        <div id="experience" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                    <BriefcaseIcon className="mr-2" />
                    Work Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-indigo-600 pl-4 pb-4">
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-gray-500 mb-2">{exp.period}</p>
                            <ul className="list-disc list-inside text-gray-500">
                                {exp.responsibilities.map((resp, respIndex) => (
                                    <li key={respIndex}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Projects() {
    const [activeCategory, setActiveCategory] = useState('All')
    const categories = ['All', 'AWS', 'Java', 'Python', 'C#']

    const projects = [
        { id: 1, title: 'AWS Lambda Function', description: 'Serverless function for image processing', category: 'AWS' },
        { id: 2, title: 'Java Spring Boot API', description: 'RESTful API for a blog platform', category: 'Java' },
        { id: 3, title: 'Python Data Analysis', description: 'Data visualization using Pandas and Matplotlib', category: 'Python' },
        { id: 4, title: 'C# Desktop Application', description: 'Windows Forms app for inventory management', category: 'C#' },
        { id: 5, title: 'AWS S3 File Manager', description: 'Web interface for managing S3 buckets', category: 'AWS' },
        { id: 6, title: 'Java Android App', description: 'Mobile app for task management', category: 'Java' },
    ]

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <div id="projects" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">My Projects</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full ${activeCategory === category
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                                <div className="mt-4">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Contact() {
    return (
        <div id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Contact Me</h2>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg text-gray-500 text-center max-w-2xl">
                        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <GitHubLogoIcon className="h-8 w-8" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInLogoIcon className="h-8 w-8" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Email</span>
                            <Mail className="h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}