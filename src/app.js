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
        counterImage: 0,

        cardSectionOne:[

            {
                titolo: "STATISTICAL CONSULTING",
                icon:"./dist/images/line-chart.png",
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a"
            },
            {
                titolo: "DIGITAL CONSULTING",
                icon:"./dist/images/promotion.png",
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a"
            },
            {
                titolo: "BANKING CONSULTING",
                icon:"./dist/images/purse.png",
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a"
            },
            {
                titolo: "ENTERPRISE CONSULTING",
                icon:"./dist/images/target.png",
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a"
            }

        ],

        album_photos: [
                {
                    url: "./dist/images/Dry.jpg"
                },
                {
                   url: "./dist/images/Sponsorship_proposal.jpg"
                },
                {
                    url: "./dist/images/Vizeon.jpg"
                },
        ],

        testimonials:[
            {   
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes theupper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little",
                nome:"Vera Duncan",
                reference:"Amazon.Inc"
            },
            {   
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes theupper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little",
                nome:"Vera Duncan",
                reference:"Amazon.Inc"
            },
            {   
                descr:"When, while lovely valley teems with vapour around meand eridian sun strikes theupper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little",
                nome:"Vera Duncan",
                reference:"Amazon.Inc"
            }

        ],
        blogNews:[
            {
                img:"./dist/images/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg",
                data:"July 4, 2019",
                writer:"by paul",
                title:"Canadian Fonsulting Firm acquired by UK Giant",
                comment:" When, while lovely valley teems with vapour around meand eridian sun strikes theupper impenetrable foliage of my trees, and but a"
            },
            {
                img:"./dist/images/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg",
                data:"July 4, 2019",
                writer:"by paul",
                title:"Canadian Fonsulting Firm acquired by UK Giant",
                comment:" When, while lovely valley teems with vapour around meand eridian sun strikes theupper impenetrable foliage of my trees, and but a"
            }

        ]       
    },

    methods:{
        
    },

    mounted() {
    }

})