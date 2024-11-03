import { CodeIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { BriefcaseIcon, Check, ChevronLeft, ChevronRight, Code, Copy, ExternalLink, Mail, X } from "lucide-react"
import { useEffect, useRef, useState } from 'react'

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
                            <ul className="list-disc list-inside text-foreground-4">
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

    interface Project {
        id: number;
        title: string;
        description: string;
        categories: string[];
        images: string[];
        technologies: string[];
        longDescription?: string;
        challenges?: string;
        outcomes?: string;
    }

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const allCategories = ['All', 'Web', 'Mobile', 'Desktop', 'AWS', 'API', 'Data Analysis']

    const projects = [
        {
            id: 1,
            title: 'AWS Lambda Function',
            description: 'Serverless function for image processing',
            categories: ['Web', 'AWS'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['AWS Lambda', 'Node.js', 'Sharp.js'],
            longDescription: 'This project is a serverless function that processes images uploaded to an S3 bucket. It generates thumbnails and optimizes the images for web use. The function is triggered by an S3 event and uses the Sharp.js library for image processing.',
            challenges: 'One of the challenges faced in this project was optimizing the function for performance and cost efficiency. The function needed to process images quickly and efficiently to provide a seamless user experience. To address this challenge, the function was optimized to run in parallel and use memory-efficient algorithms for image processing.',
            outcomes: 'The serverless function was successfully deployed and integrated into the existing application infrastructure. It improved the image processing workflow by reducing the time and resources required to generate thumbnails and optimize images. The function also reduced costs by scaling based on demand and only running when triggered by an S3 event.'
        },
        {
            id: 2,
            title: 'Java Spring Boot API',
            description: 'RESTful API for a blog platform',
            categories: ['Web', 'API'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
            longDescription: 'This project is a RESTful API built with Java Spring Boot. It provides endpoints for creating, updating, and deleting blog posts. The API is secured with JWT authentication and uses a PostgreSQL database. The application is containerized with Docker for easy deployment.',
            challenges: 'One of the challenges faced in this project was designing the database schema to support complex relationships between blog posts, users, and comments. The schema needed to be flexible and scalable to accommodate future features and system updates. To address this challenge, the schema was normalized and indexed for efficient data retrieval and storage.',
            outcomes: 'The RESTful API was successfully deployed and integrated into the blog platform. It improved the user experience by providing a seamless interface for creating and managing blog posts. The API also enhanced security by implementing JWT authentication and access control measures. The application was containerized with Docker for easy deployment and scaling.'
        },
        {
            id: 3,
            title: 'Python Data Analysis Dashboard',
            description: 'Interactive dashboard for data visualization',
            categories: ['Web', 'Data Analysis'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['Python', 'Pandas', 'Plotly', 'Dash'],
            longDescription: 'This project is an interactive dashboard built with Python. It uses the Pandas library for data manipulation and the Plotly library for data visualization. The dashboard is created with the Dash framework and provides insights into key metrics and trends in the data.',
            challenges: 'One of the challenges faced in this project was optimizing the dashboard for performance and responsiveness. The dashboard needed to load quickly and display data in real-time to provide a seamless user experience. To address this challenge, the data processing and visualization components were optimized for speed and efficiency.',
            outcomes: 'The interactive dashboard was successfully deployed and integrated into the data analysis workflow. It improved data visualization and analysis by providing a user-friendly interface for exploring key metrics and trends. The dashboard enhanced collaboration and decision-making by enabling stakeholders to interact with the data and gain insights in real-time.'
        },
        {
            id: 4,
            title: 'C# Desktop Application',
            description: 'Windows Forms app for inventory management',
            categories: ['Desktop'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['C#', '.NET Framework', 'Windows Forms', 'SQLite'],
            longDescription: 'This project is a Windows Forms application built with C#. It provides functionality for managing inventory items, tracking stock levels, and generating reports. The application uses an SQLite database for data storage and retrieval.',
            challenges: 'One of the challenges faced in this project was designing the user interface to be intuitive and user-friendly. The application needed to provide a seamless experience for users to manage inventory items and generate reports. To address this challenge, the UI components were designed with a focus on usability and accessibility.',
            outcomes: 'The Windows Forms application was successfully deployed and integrated into the inventory management workflow. It improved efficiency and accuracy by providing a centralized platform for managing inventory items and tracking stock levels. The application enhanced reporting and decision-making by generating detailed reports on inventory data and trends.'
        },
        {
            id: 5,
            title: 'React Native Mobile App',
            description: 'Cross-platform mobile app for task management',
            categories: ['Mobile'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
            longDescription: 'This project is a cross-platform mobile app built with React Native. It allows users to create, update, and delete tasks, set reminders, and track progress. The app uses Redux for state management and Firebase for authentication and data storage.',
            challenges: 'One of the challenges faced in this project was optimizing the app for performance and responsiveness. The app needed to load quickly and provide a seamless user experience on both iOS and Android devices. To address this challenge, the app components were optimized for speed and efficiency, and the UI was designed with a focus on usability and accessibility.',
            outcomes: 'The cross-platform mobile app was successfully deployed and integrated into the task management workflow. It improved productivity and organization by providing a user-friendly interface for creating and managing tasks. The app enhanced collaboration and communication by enabling users to set reminders and track progress on tasks in real-time.'
        },
        {
            id: 6,
            title: 'Vue.js SPA',
            description: 'Single Page Application for e-commerce',
            categories: ['Web'],
            images: ['/placeholder.svg?height=200&width=300'],
            technologies: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Stripe API'],
            longDescription: 'This project is a single-page application built with Vue.js. It provides an e-commerce platform for selling products online. The application uses Vuex for state management and integrates with the Stripe API for payment processing.',
            challenges: 'One of the challenges faced in this project was optimizing the application for performance and scalability. The application needed to handle high traffic and provide a seamless user experience for customers. To address this challenge, the application components were optimized for speed and efficiency, and the UI was designed with a focus on usability and accessibility.',
            outcomes: 'The single-page application was successfully deployed and integrated into the e-commerce platform. It improved sales and customer engagement by providing a user-friendly interface for browsing products and making purchases. The application enhanced security and reliability by implementing secure payment processing with the Stripe API.'
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

    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

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
                        <ProjectCard key={project.id} project={project} openProjectDetails={openProjectDetails} />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} closeProjectDetails={closeProjectDetails} />
            )}
        </div>
    )
}

function ProjectCard({ project, openProjectDetails }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="bg-card overflow-hidden shadow rounded-lg flex flex-col">
            <div className="relative h-48 w-full">
                <img src={project.images[currentImageIndex]} alt={`Screenshot ${currentImageIndex + 1} of ${project.title}`} className="h-48 w-full object-cover" />
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 focus:outline-none"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 focus:outline-none"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-foreground-2">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground-3">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                        <span key={index} className="inline-block bg-background-3 text-foreground-2 rounded-full px-3 py-1 text-sm font-semibold">
                            {category}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-background-4 rounded-full px-3 py-1 text-sm font-semibold text-foreground-4">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-auto pt-4 flex justify-end">
                    <button
                        onClick={() => openProjectDetails(project)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        View Details
                        <ExternalLink className="ml-2 -mr-1 h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ProjectModal({ project, closeProjectDetails }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="project-modal">
            <div className="relative top-20 mx-auto w-11/12 md:w-3/4 lg:w-[90%] xl:w-[80%] h-[80vh] shadow-lg rounded-md overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={project.images[currentImageIndex]} alt={`Screenshot ${currentImageIndex + 1} of ${project.title}`} className="h-full w-full object-cover" />
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-6 w-6 text-foreground-4" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-6 w-6 text-foreground-4" />
                    </button>

                    {/* Sticky Close Button */}
                    <button
                        onClick={closeProjectDetails}
                        className="absolute top-4 right-4 bg-background bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none z-20"
                        aria-label="Close modal"
                    >
                        <X className="h-6 w-6 text-foreground-4" />
                    </button>

                    {/* Content Panel */}
                    <div className="absolute top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-full bg-background bg-opacity-3 p-6 overflow-y-auto">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground-1">{project.title}</h3>

                            <div>
                                <p className="text-foreground-4">{project.longDescription}</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground-1 mb-2">Challenges:</h4>
                                <p className="text-foreground-4">{project.challenges}</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground-1 mb-2">Outcomes:</h4>
                                <p className="text-foreground-4">{project.outcomes}</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground-1 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="inline-block bg-background-2 rounded-full px-3 py-1 text-sm font-semibold text-foreground-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
                        {project.images.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-background' : 'bg-white bg-opacity-50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Contact() {
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
        <div id="contact" className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-foreground mb-8">Contact Me</h2>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg text-foreground-2 text-center max-w-2xl">
                        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/brynpryl0426" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <GitHubLogoIcon className="h-8 w-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/brynpryl" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInLogoIcon className="h-8 w-8" />
                        </a>
                        <button onClick={openModal} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Email</span>
                            <Mail className="h-8 w-8" />
                        </button>
                    </div>
                </div>
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