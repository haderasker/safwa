export default [
    {
        url: "/",
        name: "sidebar.home",
        slug: "home",
        icon: "HomeIcon",
        roles: ['admin', 'teacher', 'student']
    },
    {
        url: "/academic-year",
        name: "sidebar.academic-year",
        slug: "academic-year",
        icon: "PackageIcon",
        roles: ['admin']
    },
    {
        url: "/exams",
        name: "sidebar.exams",
        slug: "exams",
        icon: "BookOpenIcon",
        roles: ['admin']
    },
    {
        url: "/results",
        name: "sidebar.results",
        slug: "results",
        icon: "BarChartIcon",
        roles: ['admin']
    },
    {
        url: "/courses",
        name: "sidebar.courses",
        slug: "courses",
        icon: "ServerIcon",
        roles: ['admin', 'teacher']
    },
    {
        url: "/lessons",
        name: "sidebar.lessons",
        slug: "lessons",
        icon: "FileTextIcon",
        roles: ['admin', 'teacher']
    },
    {
        url: "/teachers",
        name: "sidebar.teachers",
        slug: "teachers",
        icon: "UsersIcon",
        roles: ['admin']
    },
    {
        url: "/students",
        name: "sidebar.students",
        slug: "students",
        icon: "UsersIcon",
        roles: ['admin']
    },
    {
        url: "/notifications",
        name: "sidebar.notifications",
        slug: "notifications",
        icon: "BellIcon",
        roles: ['admin', 'teacher']
    },
    {
        url: "/student-courses",
        name: "sidebar.student-courses",
        slug: "student-courses",
        icon: "ServerIcon",
        roles: ['student']
    },
    {
        url: "/student-exams",
        name: "sidebar.student-exams",
        slug: "student-exams",
        icon: "FileTextIcon",
        roles: ['student']
    },
    {
        url: "/student-results",
        name: "sidebar.student-results",
        slug: "student-results",
        icon: "BarChartIcon",
        roles: ['student']
    },
    {
        url: "/comments",
        name: "sidebar.comments",
        slug: "comments",
        icon: "MessageCircleIcon",
        roles: ['admin', 'teacher']
    },
    {
        url: "/settings",
        name: "sidebar.settings",
        slug: "settings",
        icon: "SettingsIcon",
        roles: ['admin']
    }

]
