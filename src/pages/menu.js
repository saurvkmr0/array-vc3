const menus = [
    {
        id: 1,
        name: 'Home',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Home 01',
                links: '/'
            },
            // {
            //     id: 2,
            //     sub: 'Home 02',
            //     links: '/home_v2'
            // },
            {
                id: 3,
                sub: 'Home 02',
                links: '/home_v3'
            }
        ]
    },
    {
        id: 2,
        name: 'Portfolio',
        links: '#',
        // namesub: [
        //     {
        //         id: 1,
        //         sub: 'Project 01',
        //         links: '/project_v1'
        //     },
        //     {
        //         id: 2,
        //         sub: 'Project 02',
        //         links: '/project_v2'
        //     },
        //     {
        //         id: 3,
        //         sub: 'Project 03 ',
        //         links: '/project_v3'
        //     },
        //     {
        //         id: 4,
        //         sub: 'Project 04',
        //         links: '/project_v4'
        //     },
        //     {
        //         id: 5,
        //         sub: 'Project 05',
        //         links: '/project_v5'
        //     },
        //     {
        //         id: 6,
        //         sub: 'Project List',
        //         links: '/project_list'
        //     },
        //     {
        //         id: 7,
        //         sub: 'Project Details',
        //         links: '/project_details'
        //     },
        //     {
        //         id: 8,
        //         sub: 'Submit Project',
        //         links: '/project_submit'
        //     },

        // ]
    },
    {
        id: 3,
        name: 'Team',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Token',
                links: '/token'
            },
            {
                id: 2,
                sub: 'Connect Wallet',
                links: '/connect'
            },
            {
                id: 3,
                sub: 'Core Team',
                links: '/team_details'
            },{
                id: 4,
                sub: 'Submit IGO on chain',
                links: '/submit_igo'
            },
            {
                id: 5,
                sub: 'FAQs',
                links: '/faqs'
            },
            {
                id: 6,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 7,
                sub: 'Register',
                links: '/register'
            },
            {
                id: 8,
                sub: 'Forget Password',
                links: '/forgetPass'
            },
        ]
    },
    {
        id: 4,
        name: 'Testimonial',
        links: '/roadmap',
    },
    {
        id: 5,
        name: 'Resources',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Blog Grid',
                links: '/blog_grid'
            },
            {
                id: 2,
                sub: 'Blog List',
                links: '/blog_list'
            },
            {
                id: 3,
                sub: 'Blog Detail',
                links: '/blog_details'
            }
        ],
    },
    {
        id: 6,
        name: 'Contact',
        links: 'contact', 
    },
    
]

export default menus;