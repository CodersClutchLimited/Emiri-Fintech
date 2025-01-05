document.addEventListener("DOMContentLoaded", function () {
    const cardContent = {
        "data-content": {
            title: "Front-end",
            text: "User experience drives modern web design. Our frontend services deliver sleek, intuitive, and responsive interfaces for all devices.",
            rightContent: ["React", "Angular", "Vue.js", "Javascript"]
        },
        "database-content": {
            title: "Back-end",
            text: "Efficiency powers modern web development. Our backend services provide robust, secure, and scalable solutions to handle your application's core functionality.",
            rightContent: [
                "Java", ".NET", "Python", "PHP", "Rust", "C/C++", "Node.js", "Unity", "Ruby", "Golang", "Unreal Engine", "Cobol"
            ]
        },
        "app-content": {
            title: "Mobile",
            text: "Innovation drives mobile app development. Our services create responsive, feature-rich, and user-friendly apps for seamless on-the-go experiences.",
            rightContent: [
                "iOS", "Android", "Flutter", "React Native", "Xamarin", ".NET MAUI", "Swift", "Kotlin"
            ]
        },
        "server-content": {
            title: "Cloud",
            text: "Scalability powers cloud solutions. Our services ensure secure, efficient, and reliable cloud computing for your data and applications.",
            rightContent: ["AWS", "Azure", "GCP", "Sharepoint"]
        },
        "security-content": {
            title: "ERP & CRM",
            text: "Our ERP solutions streamline business processes with efficient, integrated systems, while our CRM services help you manage and nurture customer relationships for growth and satisfaction.",
            rightContent: ["SAP", "MS Dynamics 365", "Odoo", "Salesforce"]
        },
        "modernization-content": {
            title: "Cybersecurity",
            text: "Our cybersecurity services protect your digital assets with advanced, proactive solutions, ensuring secure systems and data against evolving threats.",
            rightContent: ["AWS Lambda", "Azure Functions", "Kubernetes", "Docker"]
        }
    };

    // Image logos mapping (use your own images or URLs here)
    const imageMapping = {
        "React": "https://innowise.com/wp-content/uploads/2022/06/Property-1Default.svg",
        "Angular": "https://innowise.com/wp-content/uploads/2024/12/Angular.svg",
        "Vue.js": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant3.svg",
        "Javascript": "https://innowise.com/wp-content/uploads/2024/12/JavaScript.svg",
        "Java": "https://innowise.com/wp-content/uploads/2024/12/Java-1.svg",
        ".NET": "https://innowise.com/wp-content/uploads/2024/12/NET.svg",
        "Python": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant12.svg",
        "PHP": "https://innowise.com/wp-content/uploads/2024/12/PHP.svg",
        "Rust": "https://innowise.com/wp-content/uploads/2024/12/Rust.svg",
        "C/C++": "https://innowise.com/wp-content/uploads/2022/11/icon-2-1.svg",
        "Node.js": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant6.svg",
        "Unity": "https://innowise.com/wp-content/uploads/2024/12/unity.svg",
        "Ruby": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant8.svg",
        "Golang": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant18.svg",
        "Unreal Engine": "https://innowise.com/wp-content/uploads/2024/12/Unreal-Engine.svg",
        "Cobol": "https://innowise.com/wp-content/uploads/2024/12/cobol.svg",
        "iOS": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant16.svg",
        "Android": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant14.svg",
        "Flutter": "https://innowise.com/wp-content/uploads/2022/06/Property-1Variant11.svg",
        "React Native": "https://innowise.com/wp-content/uploads/2022/06/Property-1Default.svg",
        "Xamarin": "https://innowise.com/wp-content/uploads/2022/08/Xamarin.svg",
        ".NET MAUI": "https://innowise.com/wp-content/uploads/2024/12/net-maui.svg",
        "Swift": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjmG0ywYg29fNTPW6eUbJUm2a9PhstE-cRw&s",
        "Kotlin": "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
        "AWS": "https://innowise.com/wp-content/uploads/2024/12/AWS.svg",
        "Azure": "https://innowise.com/wp-content/uploads/2024/12/Microsoft-Azure.svg",
        "GCP": "https://innowise.com/wp-content/uploads/2024/12/Google-Cloud-Platform-GCP.svg",
        "Sharepoint": "https://www.freeiconspng.com/thumbs/sharepoint-icon/sharepoint-icon-4.png",
        "SAP": "https://innowise.com/wp-content/uploads/2024/12/SAP.svg",
        "MS Dynamics 365": "https://innowise.com/wp-content/uploads/2024/12/Dynamics365.svg",
        "Odoo": "https://innowise.com/wp-content/uploads/2024/12/Odoo.svg",
        "Salesforce": "https://innowise.com/wp-content/uploads/2024/12/salesforce.svg",
        "AWS Lambda": "https://ih1.redbubble.net/image.318843514.7809/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "Azure Functions": "https://azure.microsoft.com/svghandler/functions/?width=600&height=315",
        "Kubernetes": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        "Docker": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimEU07zYKTD37UKQp1UIV1lU6578hDyXTbg&s"
    };

    // Function to set content dynamically
    function setContent(target) {
        const content = cardContent[target];
        if (content) {
            // Update left side content
            document.getElementById("content-title").innerText = content.title;
            document.getElementById("content-text").innerHTML = content.text;

            // Update right side content
            const rightSideContainer = document.getElementById("right-side-content");
            rightSideContainer.innerHTML = ""; // Clear existing right side content

            content.rightContent.forEach(item => {
                const p = document.createElement("p");
                p.classList.add( "text-black","bg-white", "border", "rounded-lg", "p-3", "mb-2", "mr-2", "text-center");

                // Add the logo image to the p tag
                const img = document.createElement("img");
                img.src = imageMapping[item] || "path/to/default-logo.png"; // Default logo if no match
                img.alt = item;
                img.classList.add("inline-block","h-9");
                p.appendChild(img);

                // Add the technology name
                const span = document.createElement("span");
                span.innerText = ` ${item}`;
                p.appendChild(span);

                rightSideContainer.appendChild(p);
            });
        }
    }

    // Add event listeners to each mini card
    document.querySelectorAll(".mini-card").forEach(card => {
        card.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all mini cards
            document.querySelectorAll(".mini-card").forEach(item => item.classList.remove("bg-black", "text-white"));

            // Add active class to clicked card
            this.classList.add("bg-black", "text-white");

            // Update content based on the clicked card
            const target = this.getAttribute("data-target");
            setContent(target);
        });
    });

    // Initialize content with the first card ("Data")
    const firstCard = document.querySelector(".mini-card");
    if (firstCard) {
        firstCard.classList.add("bg-black", "text-white");
        const initialTarget = firstCard.getAttribute("data-target");
        setContent(initialTarget);
    }
});
