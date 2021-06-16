const app = new Vue({

    el: '#app',

    data: {
        headMenuLinks: [
            {
                linkMenu: "Home"
            },
            {
                linkMenu: "About"
            },
            {
                linkMenu: "Project"
            },
            {
                linkMenu: "Services"
            },
            {
                linkMenu: "Blog"
            },
            {
                linkMenu: "Contact"
            },
        ],
        album_photos: [
            {
                url:"./dist/images/Sponsorship_proposal.jpg"
            },
            {
                url:"./dist/images/Dry.jpg"
            },
            {
                url:"./dist/images/Vizeon.jpg"
            }

        ]

    },

    methods: {

    },

    mounted() {

    }

})