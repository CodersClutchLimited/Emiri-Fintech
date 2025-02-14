document.addEventListener("DOMContentLoaded", () => {
    // Define team member data
    const teamMembers = [
        {
            "id": 1,
            "name": "Longs Michael James, II",
            "position": "Co-Founder & CEO",
            "company": "Arab Bank (Switzerland) Ltd.",
            "description": "Stéphanie has over 10 years of experience in HR management, specializing in workforce development and organizational leadership. She is passionate about building strong teams and fostering professional growth.",
            "content": "Since 2009, she has been the Head of Treasury at Arab Bank (Switzerland) Ltd. Appointed to the Executive Committee in 2014, she is now in charge of Treasury, Trading, Digital Assets, Financial Institutions, and Marketing.",
            "image": "https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064827.jpg?ga=GA1.1.1951979353.1732287376&semt=ais_hybrid"
        },
        {
            "id": 2,
            "name": "Richard Kofi Asante",
            "position": "Co-Founder",
            "company": "Innovative Solutions Inc.",
            "description": "John has over 15 years of experience in software development and leading tech teams. He excels in driving innovation and digital transformation within organizations.",
            "content": "John has spearheaded multiple groundbreaking projects at Innovative Solutions Inc., shaping the company’s technological roadmap and ensuring the adoption of cutting-edge solutions.",
            "image": "https://codersclutch.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-11-at-09.57.09-uai-720x720.jpeg"
        },
        {
            "id": 3,
            "name": "Eric kabutey",
            "position": "Co-Founder & CTO",
            "company": "Global Tech Enterprises",
            "description": "Maria has been leading marketing strategies for over 12 years, with a focus on digital marketing and brand development.",
            "content": "At Global Tech Enterprises, Maria has been responsible for driving innovative marketing campaigns that have increased brand visibility and customer engagement worldwide.",
            "image": "https://codersclutch.com/wp-content/uploads/2024/12/cto-e1734026678161-uai-720x720.jpg"
        },
        {
            "id": 4,
            "name": "Isata P.B Dainkeh",
            "position": "Director - Public Relations",
            "company": "Middle East Financial Group",
            "description": "With over 20 years of experience in financial planning and analysis, Ahmed is known for his expertise in managing complex financial structures and investment strategies.",
            "content": "Ahmed joined Middle East Financial Group in 2015 and has played a critical role in streamlining financial operations and guiding the company through various market challenges.",
            "image": "https://codersclutch.com/wp-content/uploads/2024/10/hhhkkknb-uai-720x720.jpeg"
        },
        {
            "id": 5,
            "name": "Abdoulie Jeng",
            "position": "Director - Business Development & Marketing",
            "company": "Tech Innovations Ltd.",
            "description": "Sophie specializes in the design and development of new products, with a strong background in consumer research and market analysis.",
            "content": "She has led several successful product launches at Tech Innovations Ltd., ensuring that customer needs are at the heart of every product designed.",
            "image": "https://codersclutch.com/wp-content/uploads/2025/01/gg-1-uai-720x720.jpg"
        },
        {
            "id": 6,
            "name": "Muhammed Sillah",
            "position": "Director - Public Relations & Global Product Delivery",
            "company": "NextGen Digital",
            "description": "Liam has 14 years of experience in digital marketing, with a focus on data-driven strategies that optimize customer acquisition and brand growth.",
            "content": "At NextGen Digital, Liam has led the company’s expansion into new markets, leveraging innovative digital campaigns that increased the brand’s reach by over 40%.",
            "image": "https://codersclutch.com/wp-content/uploads/2025/01/jgh.jpg"
        },
        // {
        //     "id": 7,
        //     "name": "Emma Rodriguez",
        //     "position": "Lead Data Scientist",
        //     "company": "Tech Innovations Ltd.",
        //     "description": "Emma specializes in data analytics and machine learning, using big data to drive business decisions and enhance customer experiences.",
        //     "content": "She leads a team of analysts at Tech Innovations, developing predictive models and advanced analytics to inform strategic initiatives and operational efficiencies.",
        //     "image": "https://t3.ftcdn.net/jpg/02/44/03/14/240_F_244031424_vuoomQH4eR1DD2lY4RcZsXEesy2KGFm1.jpg"
        // },
        // {
        //     "id": 8,
        //     "name": "Carlos Ramirez",
        //     "position": "Operations Manager",
        //     "company": "Global Logistics Partners",
        //     "description": "Carlos has extensive experience in supply chain management and logistics, ensuring smooth operations and optimizing efficiency across global networks.",
        //     "content": "He has successfully streamlined operations at Global Logistics Partners, reducing costs and improving the speed of deliveries to clients worldwide.",
        //     "image": "https://t4.ftcdn.net/jpg/03/07/57/35/240_F_307573513_Tfy0Uxi7doNQMu4sU68OGFLZoENqLF5e.jpg"
        // }
    ]


    const teamContainer = document.getElementById("team-container");

    // Dynamically create team member cards and modals
    teamMembers.forEach(member => {
        // Create team card
        const teamCard = document.createElement("div");
        teamCard.classList.add("relative", "group", "p-0", "overflow-hidden");

        const img = document.createElement("img");
        img.classList.add("w-full", "h-96", "object-cover");
        img.src = member.image;
        img.alt = `Team member: ${member.name}`;
        teamCard.appendChild(img);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("absolute", "flex", "flex-row", "justify-between", "items-center", "bottom-0", "left-0", "w-full", "text-white", "p-4", "transform", "translate-y-full", "group-hover:translate-y-0", "transition-transform", "duration-300");
        
        // Apply background color and opacity inline
        cardInfo.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        

        const infoText = document.createElement("div");
        const namePosition = document.createElement("h3");
        namePosition.classList.add("text-sm", "font-normal");
        namePosition.textContent = member.position;

        const name = document.createElement("p");
        name.textContent = member.name;

        infoText.appendChild(namePosition);
        infoText.appendChild(name);

        cardInfo.appendChild(infoText);

        const button = document.createElement("button");
        button.classList.add("flex", "items-center", "justify-center", "mt-1", "toggle-info-btn");
        button.setAttribute("data-info", member.id);

        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-plus", "text-3xl", "transition-transform", "duration-300");
        
        // Apply custom color inline
        icon.style.color = "#ea2175";  // Example: custom red color
        
        button.appendChild(icon);
        

        cardInfo.appendChild(button);
        teamCard.appendChild(cardInfo);

        // Create modal for the team member
        const modal = document.createElement("div");
        modal.id = `teamModal-${member.id}`;
        modal.classList.add("hidden", "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center");
        

        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

        const modalContent = document.createElement("div");
        modalContent.classList.add("w-11/12", "text-xs", "max-w-4xl", "rounded-lg", "overflow-hidden");
        
        modalContent.style.backgroundColor = "#f7fff2"
        modalContent.style.color = "#222"

        const modalInner = document.createElement("div");
        modalInner.classList.add("relative", "w-full", "p-6");

        const flexContainer = document.createElement("div");
        flexContainer.classList.add("flex", "flex-col", "md:flex-row", "gap-4", "px-3");

        const leftSection = document.createElement("div");
        leftSection.classList.add("flex-1");

        const modalName = document.createElement("h3");
        modalName.classList.add("text-2xl", "font-bold", "mb-2", "text-dark-blue");
        modalName.textContent = member.name;

        const modalPosition = document.createElement("h2");
        modalPosition.classList.add("text-xl", "font-semibold", "mb-2", "text-dark-blue");
        modalPosition.textContent = member.position;

        const modalCompany = document.createElement("p");
        modalCompany.classList.add("text-lg", "text-teal", "font-semibold", "mb-3");
        modalCompany.textContent = member.company;

        const modalDescription = document.createElement("p");
        modalDescription.classList.add("leading-relaxed", "text-lg", "mb-2");
        modalDescription.textContent = member.description;

        leftSection.appendChild(modalName);
        leftSection.appendChild(modalPosition);
        leftSection.appendChild(modalCompany);
        leftSection.appendChild(modalDescription);

        // const rightSection = document.createElement("div");
        // rightSection.classList.add("flex-1", "text-lg", "leading-relaxed");
        // rightSection.textContent = member.content;

        // flexContainer.appendChild(leftSection);
        // flexContainer.appendChild(rightSection);
        const rightSection = document.createElement("div");
rightSection.classList.add("flex-1", "text-lg", "leading-relaxed");

// Add a heading for the second column
const rightHeading = document.createElement("h3");
rightHeading.classList.add("text-xl", "font-semibold", "mb-3", "text-dark-blue");
rightHeading.textContent = "Additional Information";

rightHeading.style.display = "none";

// Add paragraphs for the content
const contentParagraphs = member.content.split(".").filter(paragraph => paragraph.trim() !== "").map(paragraph => {
    const p = document.createElement("p");
    p.classList.add("mb-2");
    p.textContent = paragraph.trim() + ".";
    return p;
});

// Append heading and content paragraphs to the right section
rightSection.appendChild(rightHeading);
contentParagraphs.forEach(paragraph => rightSection.appendChild(paragraph));

// Append both sections to the flex container
flexContainer.appendChild(leftSection);
flexContainer.appendChild(rightSection);

        modalInner.appendChild(flexContainer);

        const closeButtonContainer = document.createElement("div");
        closeButtonContainer.classList.add("p-4", "flex", "justify-end");

        const closeButton = document.createElement("button");
        closeButton.id = `closeModal-${member.id}`;
        closeButton.classList.add("px-4", "py-2", "text-white", "font-semibold", "rounded-lg");
        closeButton.textContent = "Close";

        closeButton.style.backgroundColor = "#ca2e55"

        closeButtonContainer.appendChild(closeButton);
        modalContent.appendChild(modalInner);
        modalContent.appendChild(closeButtonContainer);
        modal.appendChild(modalContent);

        teamContainer.appendChild(teamCard);
        teamContainer.appendChild(modal);

        // Add event listener for modal toggle
        button.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });

        // Add event listener for close button
        closeButton.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        // Close modal if clicked outside
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });
    });
});