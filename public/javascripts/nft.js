const content = {
    section1: {
        title: "NFT marketplace development",
        body: "Our software engineering team builds feature-rich marketplaces for non-fungible tokens from scratch. Innowise’s specialists cover all the technical and design aspects, from UI/UX design to KYC implementation. We develop web solutions along with mobile applications, keeping them accessible for users regardless of the platform they choose.",
        image: "https://innowise.com/wp-content/uploads/2022/10/Frame-49126.png"
    },

    section2: {
        title: "NFT website development",
        body: "NFT websites present blockchain-based eCommerce platforms with tons of unique capabilities. For example, businesses can promote their client brands by either duplicating real-life goods as digital assets minted into non-fungible tokens or designing unique digital goods of any scale. When packed into a unique and user-friendly NFT website design, such projects become powerful tools for user acquisition as well as revenue and brand awareness growth.",
        image: "https://innowise.com/wp-content/uploads/2022/10/jonathan-borba-QoCP9hbrgvA-unsplash-1.png"
    },

    section3: {
        title: "NFT app development",
        body: "For Web3 Projects, our software engineers also develop NFT applications for all the major platforms showing great usability, a rich set of features, and beautiful UI. Our software experts decrease churn rates and increase customer loyalty by giving users a fruitful experience and covering their tiniest needs. Whether it’s an array of native apps or one cross-platform solution, we got you covered.",
        image: "https://innowise.com/wp-content/uploads/2022/10/3.png"
    },

    section4: {
        title: "NFT staking projects",
        body: "Innowise’s talents can maintain the whole process of developing a platform utilizing non-fungible tokens for staking, from creating an engaging interface to fine-tuning each feature and integrating the platform into your ecosystem if needed. Our team will make your project a good competition for popular NFT staking platforms like Kraken, Gemini, KuCoin, Coinbase, etc.",
        image: "https://innowise.com/wp-content/uploads/2022/10/4.png"
    },
    
    section5: {
        title: "Auction portal development",
        body: "Our experts and world-class developers will bring you a bidding platform ready to hold secure and transparent NFT auctions having all the required functionality for admins, sellers, and buyers. Besides must-have features, we can enrich bidding platforms with AI-powered feed for buyers, real-time statistics, and automated workflows to streamline the NFT auction process.",
        image: "https://innowise.com/wp-content/uploads/2022/10/5.png"
    },

    section6: {
        title: "NFT Lending platform development",
        body: "As an expert in software development and FinTech, Innowise can create a platform for managing loans with non-fungible tokens acting as collaterals. Our talents cover everything from outstanding design and user experience to swift response and impeccable security. We will build a solution that will make managing loans via non-fungible tokens easy, effective, and accessible to a broad audience.",
        image: "https://innowise.com/wp-content/uploads/2022/10/6.png"
    },

    section7: {
        title: "NFT minting platform",
        body: "Innowise’s software development talents build and deploy platforms for the process of creating non-fungible tokens and releasing them to the blockchain, called minting. We set up the smart contract with all the required data, including platform and creator fees, and design a user-friendly interface regardless of the platform being a part of a blockchain ecosystem or a standalone solution.",
        image: "https://innowise.com/wp-content/uploads/2022/10/7.png"
    },

    section8: {
        title: "NFT games development",
        body: "Innowise can handle the process of full-fledged NFT game development. We create gaming platforms and implement the ability for the players to earn non-fungible tokens that can further be traded. NFT play-to-earn is believed to be the future of the gaming industry due to the high involvement of players in the gaming and asset trading processes. Our tech experts can develop the NFT-based game for any major platform (Web, Android, iOS).",
        image: "https://innowise.com/wp-content/uploads/2022/10/8.png"
    },

    section9: {
        title: "NFT Art gallery development",
        body: "With our profound expertise in design and software development, we can tailor an art gallery with a design matching your collection of tokenized digital art and help it catch people’s attention. Innowise dispatches various kinds of NFT art galleries: from one-page websites to immersive interactive worlds for the Metaverse. Our solutions build the bridge between digital art lovers and brands that want to promote themselves through this path.",
        image: "https://innowise.com/wp-content/uploads/2022/10/9.png"
    },

    section10: {
        title: "NFT streaming platform",
        body: "We can build a platform for content streaming on the NFT-based model. With this type of solution, we empower you and your users with the ability to tokenize and monetize content like videos, music, podcasts, and even live shows in a brand new way. The ways of monetizing the platform are numerous. Users can sell access to content on a subscription, single payment, or pay-for-view basis. Also, the solution will act as a content ownership registry since every piece of content will be tokenized.",
        image: "https://innowise.com/wp-content/uploads/2022/10/10.png"
    },

    section11: {
        title: "NFT art design",
        body: "Innowise’s NFT artists can develop the design of your tokenized assets that comply with your brand identity and follow your vision of it. These tokenized art pieces can be further shown and distributed via already existing or customly built NFT marketplaces to give customers the possibility to possess a unique digital item created by your company and show loyalty to your brand. Increase your brand recognition by creating unique avatars, exclusive metaverse goods, or replicating existing ones into NFTs.",
        image: "https://innowise.com/wp-content/uploads/2022/10/11.png"
    },
    

    // section12: {
    //     title: "Financial data management",
    //     body: "We help companies design secure, compliant solutions that automate the<br>collection, storage, and analysis of financial information to improve risk<br>management for businesses.",
    //     image: "https://img.freepik.com/free-photo/financial-advisor-expert-highlighting-important-terms-retirement-plan_482257-91506.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    // }
};

// Add event listeners to the links
document.querySelectorAll('.left-column a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelectorAll('.left-column a').forEach(item => {
            item.classList.remove('active');
        });

        event.target.classList.add('active');

        const section = event.target.getAttribute('data-section');
        const contentArea = document.getElementById('content');

        contentArea.innerHTML = `
        <div class="sectar section-content">
            <h2 class="content-title font-bold text-2xl">${content[section].title}</h2>
            <p class="content-para text-lg">${content[section].body}</p>
            <img src="${content[section].image}" alt="${content[section].title}" class="section-image mt-4">
        </div>
        `;
    });
});

// table content smaller screen responsiveness handler
document.querySelectorAll('.accordion-title-unique').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Toggle visibility of the content
        content.classList.toggle('active');

        // Optionally close other sections if required
        document.querySelectorAll('.accordion-content-unique').forEach(section => {
            if (section !== content) {
                section.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.cosmic-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.stellar-button-next',
            prevEl: '.stellar-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            730: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        },
    });
});