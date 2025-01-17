// const content = {
//     section1: {
//         title: "Custom Fintech software development",
//         body: "Innowise creates custom-built solutions for financial, banking, and insurance<br>industries, bringing in 16+ years of experience in IT.",
//         image: "https://diceus.com/wp-content/uploads/2023/09/og_cover_1-1.jpg"
//     },
//     section2: {
//         title: "FinTech software support",
//         body: "Our company provides software maintenance services to ensure its<br>reliability, operability, security, and regulation compliance.",
//         image: "https://img.freepik.com/free-photo/corporate-clients-evaluating-investment-opportunity-real-estate_482257-94925.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section3: {
//         title: "FinTech consulting services",
//         body: "As a leading IT advisory, Innowise offers expert guidance on navigating financial<br>technology, from market analysis to regulatory requirements and strategic<br>planning.",
//         image: "https://img.freepik.com/premium-photo/diverse-businesspeople-coworkers-standing-conference-table-analyzing-financial-graphs-paperwork_482257-7558.jpg?w=1060"
//     },
//     section4: {
//         title: "FinTech integration services",
//         body: "We connect FinTech solutions with your existing systems so they work together<br>smoothly — automating data flow and giving you better insights across all your<br>platforms.",
//         image: "https://img.freepik.com/premium-photo/businessman-showing-smartphone-with-pie-chart-screen-by-futuristic-designs-presenting-business-data-man-with-cellphone-introducing-new-ideas-strategies-progress_424947-5834.jpg?w=1380"
//     },
//     section5: {
//         title: "FinTech cybersecurity services",
//         body: "If you need stronger data protection, we’re here to help — we can audit your current<br>setup, add data encryption, and set up role-based access to keep your FinTech<br>systems secure.",
//         image: "https://img.freepik.com/premium-photo/financial-security-text-luminous-inscription-financial-security-concept3d-render_507676-4825.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section6: {
//         title: "Banking software development",
//         body: "Our A-level developers build banking software solutions that guarantee robust<br>data security, compliance with regulatory standards, and accessible banking<br>services to the customers.",
//         image: "https://img.freepik.com/premium-photo/online-banking-digital-money-technology-conceptual_31965-19058.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section7: {
//         title: "Insurance software development",
//         body: "At Innowise, we develop insurance software that automates and streamlines<br>everything from claims and policy management to underwriting, billing, and<br>actuarial modeling.",
//         image: "https://img.freepik.com/free-psd/internet-cloud-technology-concept_53876-15432.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section8: {
//         title: "Digital financial transformation",
//         body: "Our skilled teams of software engineers help businesses comprehend the pros of<br>digitization and embrace business transformation to step on another level of<br>financial efficiency.",
//         image: "https://img.freepik.com/premium-photo/rpa-financial-servicesrobotic-process-automation-banking-intelligent-automation-digital-transformation-finance-error-reduction-time-savings-financial-services_1082696-4477.jpg?w=1060"
//     },
//     section9: {
//         title: "Blockchain software development",
//         body: "Our experts use blockchain to build decentralized trading and asset management<br>platforms where security is unbreakable and transparency isn’t just a feature —<br>it’s the foundation.",
//         image: "https://img.freepik.com/free-photo/big-data-blockchain-technology-isometric-mobile-phone-data-visualization_587448-4817.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section10: {
//         title: "Cryptocurrency software development",
//         body: "Innowise offers top-tier crypto software development services, ensuring<br>unwavering security and convenience for users to manage their digital assets.",
//         image: "https://img.freepik.com/free-vector/nft-nonfungible-tokens-concept-dark-blue-background_1419-2249.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section11: {
//         title: "Legacy app and system modernization",
//         body: "With our profound assistance, upgrading obsolete software and adding new<br>features to the existing solutions go smoothly, with no interruptions to the<br>business.",
//         image: "https://img.freepik.com/premium-photo/top-view-realistic-smartphone-screen-with-url-square-frame-shape-copy-space-black-background_1302-35617.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     },
//     section12: {
//         title: "Financial data management",
//         body: "We help companies design secure, compliant solutions that automate the<br>collection, storage, and analysis of financial information to improve risk<br>management for businesses.",
//         image: "https://img.freepik.com/free-photo/financial-advisor-expert-highlighting-important-terms-retirement-plan_482257-91506.jpg?uid=R176520851&ga=GA1.1.438080985.1725988205&semt=ais_hybrid"
//     }
// };

// Add event listeners to the links
// document.querySelectorAll('.left-column a').forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();

//         document.querySelectorAll('.left-column a').forEach(item => {
//             item.classList.remove('active');
//         });

//         event.target.classList.add('active');

//         const section = event.target.getAttribute('data-section');
//         const contentArea = document.getElementById('content');

//         contentArea.innerHTML = `
//         <div class="sectar section-content">
//             <h2 class="content-title font-bold text-2xl">${content[section].title}</h2>
//             <p class="content-para text-lg">${content[section].body}</p>
//             <img src="${content[section].image}" alt="${content[section].title}" class="section-image mt-4">
//         </div>
//         `;
//     });
// });

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



// js for nav navigator
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Reset all tabs to inactive state
            tabs.forEach((t) => {
                t.classList.remove("text-red-500", "border-b-2", "border-red-500");
                t.classList.add("text-gray-500", "border-transparent");
            });

            // Hide all tab content
            tabContents.forEach((content) => content.classList.add("hidden"));

            // Set the clicked tab to active state
            tab.classList.remove("text-gray-500", "border-transparent");
            tab.classList.add("text-red-500", "border-b-2", "border-red-500");

            // Show the associated content
            tabContents[index].classList.remove("hidden");
        });
    });
});

const navigatorWrapper = document.querySelector('.digital-navigator-wrapper');
  let isDragging = false;
  let startX;
  let scrollLeft;

  navigatorWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - navigatorWrapper.offsetLeft;
    scrollLeft = navigatorWrapper.scrollLeft;
  });

  navigatorWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  navigatorWrapper.addEventListener('mouseup', () => {
    isDragging = false;
  });

  navigatorWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - navigatorWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier controls the scroll speed
    navigatorWrapper.scrollLeft = scrollLeft - walk;
  });


//   digital carousel 1 functionality
var swiper = new Swiper('.cosmic-swiper', {
    slidesPerView: 3, // Default number of slides per view
    spaceBetween: 30, // Default space between slides
    loop: true,  // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.stellar-button-next',
        prevEl: '.stellar-button-prev',
    },
    breakpoints: {
        320: { // For small screens (e.g., smartphones)
            slidesPerView: 1,
            spaceBetween: 10,
        },
        730: { // For medium screens (e.g., tablets)
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // For larger screens (e.g., desktops)
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});



//   toggle section
// Track the currently open content
let openContent = null;

// Add event listeners to all plus icons
const plusIcons = document.querySelectorAll('.plus-icon');
plusIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const targetId = icon.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Close any other open content
        if (openContent && openContent !== content) {
            openContent.classList.add('hidden'); // Close the previous content
            toggleIcon(openContent.previousElementSibling.querySelector('.plus-icon'), true);
        }

        // Toggle the current content
        const isContentHidden = content.classList.toggle('hidden');
        toggleIcon(icon, isContentHidden);

        // Update the openContent tracker
        openContent = isContentHidden ? null : content;

        event.stopPropagation(); // Prevent the click from propagating to the body
    });
});

// Add a global click listener to close the open content when clicking elsewhere
document.addEventListener('click', () => {
    if (openContent) {
        openContent.classList.add('hidden'); // Hide the open content
        toggleIcon(openContent.previousElementSibling.querySelector('.plus-icon'), true); // Reset icon to plus
        openContent = null; // Reset tracker
    }
});

// Helper function to toggle the icon between plus and minus
function toggleIcon(icon, isClosed) {
    const iconElement = icon.querySelector('i'); // Select the <i> inside the span
    if (isClosed) {
        iconElement.classList.remove('ri-subtract-line'); // Remove minus icon
        iconElement.classList.add('ri-add-line'); // Add plus icon
    } else {
        iconElement.classList.remove('ri-add-line'); // Remove plus icon
        iconElement.classList.add('ri-subtract-line'); // Add minus icon
    }
}

// recognition section

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("digital-auto-slider-3");
    const sliderChildren = [...slider.children];
  
    // Clone slides to ensure seamless scrolling
    sliderChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      slider.appendChild(clone);
    });
  
    let scrollAmount = 0;
  
    function scrollSlider() {
      scrollAmount -= 1; // Adjust speed (higher negative value for faster scroll)
      if (Math.abs(scrollAmount) >= sliderChildren[0].offsetWidth) {
        scrollAmount = 0; // Reset scroll amount when a full slide has passed
        slider.appendChild(slider.children[0]); // Move first element to the end
      }
      slider.style.transform = `translateX(${scrollAmount}px)`; // Corrected this line
      requestAnimationFrame(scrollSlider);
    }
  
    scrollSlider();
  });

  // contact expert section
let openCont = null;

// Add event listeners to all plus icons
const plusIc = document.querySelectorAll('.plus-icon');
plusIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const targetId = icon.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Close any other open content
        if (openCont && openCont !== content) {
            openCont.classList.add('hidden'); // Close the previous content
            toggleIcon(openCont.previousElementSibling.querySelector('.plus-icon'), true);
        }

        // Toggle the current content
        const isContentHidden = content.classList.toggle('hidden');
        toggleIcon(icon, isContentHidden);

        // Update the openContent tracker
        openCont = isContentHidden ? null : content;

        event.stopPropagation(); // Prevent the click from propagating to the body
    });
});

// Add a global click listener to close the open content when clicking elsewhere
document.addEventListener('click', () => {
    if (openCont) {
        openCont.classList.add('hidden'); // Hide the open content
        toggleIcon(openCont.previousElementSibling.querySelector('.plus-icon'), true); // Reset icon to plus
        openContent = null; // Reset tracker
    }
});

// Helper function to toggle the icon between plus and minus
let allExpanded = false; // Flag to track if all sections are expanded

// Function to toggle a single section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const iconSpan = section.previousElementSibling.querySelector('span');
    
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden'); // Show section
        iconSpan.textContent = '−'; // Change icon to minus
    } else {
        section.classList.add('hidden'); // Hide section
        iconSpan.textContent = '+'; // Change icon to plus
    }
}
