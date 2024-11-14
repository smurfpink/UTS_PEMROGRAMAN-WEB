// Function to add smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section and scroll to it smoothly
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Function to animate the CTA button when hovered
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.1)';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
});

// Function to reveal project details on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});
