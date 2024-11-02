import { CodeIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { BriefcaseIcon, Code, Mail } from "lucide-react"
import { useState } from 'react'

export function Skills() {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["Java", "Python", "C#", "TypeScript", "JavaScript"],
        },
        {
            category: "Frontend",
            skills: ["Angular", "React", "HTML5", "CSS3"],
        },
        {
            category: "Backend",
            skills: ["Spring Boot", "Django"],
        },
        {
            category: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL"],
        },
        {
            category: "Cloud & DevOps",
            skills: ["AWS", "Terraform", "Docker", "Git"],
        },
    ]

    return (
        <div id="skills" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground-2 mb-8 flex items-center">
                    <Code className="mr-2" />
                    Skills
                </h2>
                <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-foreground-1 mb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-background-2 text-foreground-2 px-3 py-1 rounded-full text-sm font-medium"
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
            title: "Application Developer",
            company: "Seven Seven Global Services, Inc.",
            period: "2022 - Present",
            responsibilities: [
                "Design, implement, and maintain APIs to support core features, ensuring efficient data exchange and service interoperability.",
                "Integrate and replace third-party services to enhance functionality and improve system capabilities.",
                "Configure and manage Docker containers and deployment processes for seamless production and staging rollouts.",
                "Collaborate with cross-functional teams to define, design, and ship new features.",
                "Coordinate deployment files and settings across multiple integrations and services for efficient resource management.",
                "Improve application performance through caching strategies and optimized data handling practices.",
                "Customize and update UI components to align with user needs and system requirements.",
                "Troubleshoot and resolve issues related to data processing, user inputs, and system interactions.",
                "Address logical errors and improve error-handling protocols to ensure data accuracy and application stability.",
                "Implement access control measures and update security settings, such as CORS configurations, to safeguard application data.",
                "Handle database migrations and schema changes to accommodate new features and system updates.",
                "Utilize version control systems, such as Git, to manage codebase and track changes across multiple branches.",
            ],
        }
    ]

    return (
        <div id="experience" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground-2 mb-8 flex items-center">
                    <BriefcaseIcon className="mr-2" />
                    Work Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-zinc-100 pl-4 pb-4">
                            <h3 className="text-xl font-bold text-foreground-1">{exp.title}</h3>
                            <p className="text-foreground-2">{exp.company}</p>
                            <p className="text-foreground-3 mb-2">{exp.period}</p>
                            <ul className="list-disc list-inside text-zinc-300">
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
    const [activeCategories, setActiveCategories] = useState<string[]>(['All'])
    const allCategories = ['All', 'Web', 'Mobile', 'Desktop', 'AWS', 'API', 'Data Analysis']

    const projects = [
        {
            id: 1,
            title: 'AWS Lambda Function',
            description: 'Serverless function for image processing',
            categories: ['Web', 'AWS'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['AWS Lambda', 'Node.js', 'Sharp.js']
        },
        {
            id: 2,
            title: 'Java Spring Boot API',
            description: 'RESTful API for a blog platform',
            categories: ['Web', 'API'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
        },
        {
            id: 3,
            title: 'Python Data Analysis Dashboard',
            description: 'Interactive dashboard for data visualization',
            categories: ['Web', 'Data Analysis'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['Python', 'Pandas', 'Plotly', 'Dash']
        },
        {
            id: 4,
            title: 'C# Desktop Application',
            description: 'Windows Forms app for inventory management',
            categories: ['Desktop'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['C#', '.NET Framework', 'Windows Forms', 'SQLite']
        },
        {
            id: 5,
            title: 'React Native Mobile App',
            description: 'Cross-platform mobile app for task management',
            categories: ['Mobile'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['React Native', 'Expo', 'Redux', 'Firebase']
        },
        {
            id: 6,
            title: 'Vue.js SPA',
            description: 'Single Page Application for e-commerce',
            categories: ['Web'],
            image: '/placeholder.svg?height=200&width=300',
            technologies: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Stripe API']
        },
    ]

    const toggleCategory = (category: string) => {
        setActiveCategories(prev => {
            if (category === 'All') {
                return ['All'];
            }
            const newCategories = prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev.filter(c => c !== 'All'), category];
            return newCategories.length === 0 ? ['All'] : newCategories;
        });
    };

    const filteredProjects = activeCategories.includes('All')
        ? projects
        : projects.filter(project =>
            project.categories.some(category => activeCategories.includes(category))
        );

    return (
        <div id="projects" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground-1 mb-8">My Projects</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`px-4 py-2 rounded-full ${activeCategories.includes(category)
                                ? 'bg-background-3 text-foreground-3'
                                : 'bg-background-1 text-foreground-2 hover:bg-background-2 hover:text-foreground-3'
                                }`}
                            aria-pressed={activeCategories.includes(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-card overflow-hidden shadow rounded-lg flex flex-col">
                            <div className="relative h-48 w-full">
                                <img src={project.image} alt={`Screenshot of ${project.title}`} className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h3 className="text-lg font-medium text-foreground-2">{project.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.categories.map((category, index) => (
                                        <span key={index} className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-semibold">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                            {tech}
                                        </span>
                                    ))}
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
        <div id="contact" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground mb-8">Contact Me</h2>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg text-foreground-2 text-center max-w-2xl">
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