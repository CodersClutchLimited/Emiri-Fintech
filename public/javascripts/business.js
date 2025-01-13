const content = {
    section1: {
        title: "Custom Fintech software development",
        body: "Innowise creates custom-built solutions for financial, banking, and insurance<br>industries, bringing in 16+ years of experience in IT.",
        image: "https://diceus.com/wp-content/uploads/2023/09/og_cover_1-1.jpg"
    },
    section2: {
        title: "FinTech software support",
        body: "Our company provides software maintenance services to ensure its<br>reliability, operability, security, and regulation compliance.",
        image: "https://img.freepik.com/free-photo/corporate-clients-evaluating-investment-opportunity-real-estate_482257-94925.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section3: {
        title: "FinTech consulting services",
        body: "As a leading IT advisory, Innowise offers expert guidance on navigating financial<br>technology, from market analysis to regulatory requirements and strategic<br>planning.",
        image: "https://img.freepik.com/premium-photo/diverse-businesspeople-coworkers-standing-conference-table-analyzing-financial-graphs-paperwork_482257-7558.jpg?w=1060"
    },
    section4: {
        title: "FinTech integration services",
        body: "We connect FinTech solutions with your existing systems so they work together<br>smoothly — automating data flow and giving you better insights across all your<br>platforms.",
        image: "https://img.freepik.com/premium-photo/businessman-showing-smartphone-with-pie-chart-screen-by-futuristic-designs-presenting-business-data-man-with-cellphone-introducing-new-ideas-strategies-progress_424947-5834.jpg?w=1380"
    },
    section5: {
        title: "FinTech cybersecurity services",
        body: "If you need stronger data protection, we’re here to help — we can audit your current<br>setup, add data encryption, and set up role-based access to keep your FinTech<br>systems secure.",
        image: "https://img.freepik.com/premium-photo/financial-security-text-luminous-inscription-financial-security-concept3d-render_507676-4825.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section6: {
        title: "Banking software development",
        body: "Our A-level developers build banking software solutions that guarantee robust<br>data security, compliance with regulatory standards, and accessible banking<br>services to the customers.",
        image: "https://img.freepik.com/premium-photo/online-banking-digital-money-technology-conceptual_31965-19058.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section7: {
        title: "Insurance software development",
        body: "At Innowise, we develop insurance software that automates and streamlines<br>everything from claims and policy management to underwriting, billing, and<br>actuarial modeling.",
        image: "https://img.freepik.com/free-psd/internet-cloud-technology-concept_53876-15432.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section8: {
        title: "Digital financial transformation",
        body: "Our skilled teams of software engineers help businesses comprehend the pros of<br>digitization and embrace business transformation to step on another level of<br>financial efficiency.",
        image: "https://img.freepik.com/premium-photo/rpa-financial-servicesrobotic-process-automation-banking-intelligent-automation-digital-transformation-finance-error-reduction-time-savings-financial-services_1082696-4477.jpg?w=1060"
    },
    section9: {
        title: "Blockchain software development",
        body: "Our experts use blockchain to build decentralized trading and asset management<br>platforms where security is unbreakable and transparency isn’t just a feature —<br>it’s the foundation.",
        image: "https://img.freepik.com/free-photo/big-data-blockchain-technology-isometric-mobile-phone-data-visualization_587448-4817.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section10: {
        title: "Cryptocurrency software development",
        body: "Innowise offers top-tier crypto software development services, ensuring<br>unwavering security and convenience for users to manage their digital assets.",
        image: "https://img.freepik.com/free-vector/nft-nonfungible-tokens-concept-dark-blue-background_1419-2249.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section11: {
        title: "Legacy app and system modernization",
        body: "With our profound assistance, upgrading obsolete software and adding new<br>features to the existing solutions go smoothly, with no interruptions to the<br>business.",
        image: "https://img.freepik.com/premium-photo/top-view-realistic-smartphone-screen-with-url-square-frame-shape-copy-space-black-background_1302-35617.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    },
    section12: {
        title: "Financial data management",
        body: "We help companies design secure, compliant solutions that automate the<br>collection, storage, and analysis of financial information to improve risk<br>management for businesses.",
        image: "https://img.freepik.com/free-photo/financial-advisor-expert-highlighting-important-terms-retirement-plan_482257-91506.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
    }
};

// Add event listeners to the links
document.querySelectorAll('.left-column a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Remove active class from all links
        document.querySelectorAll('.left-column a').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the clicked link
        event.target.classList.add('active');

        // Get the associated section
        const section = event.target.getAttribute('data-section');
        const contentArea = document.getElementById('content');

        // Update content dynamically
        contentArea.innerHTML = `
        <div class="ajebo section-content">
        <div class="aday divares">
            <h2 class="content-title font-bold text-2xl">${content[section].title}</h2>
            <p class="content-para text-lg">${content[section].body}</p>
            <img src="${content[section].image}" alt="${content[section].title}" class="section-image mt-4">
            </div>
        </div>
        `;
    });
});