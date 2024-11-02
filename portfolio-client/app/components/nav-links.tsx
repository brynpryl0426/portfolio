"use client"

export function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="border-transparent text-foreground-1 hover:border-gray-300 hover:text-foreground-2 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        >
            {children}
        </a>
    )
}

export function MobileNavLink({ href, children }) {
    return (
        <a
            href={href}
            className="border-transparent text-foreground-1 hover:bg-gray-50 hover:border-gray-300 hover:text-foreground-2 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
            {children}
        </a>
    )
}