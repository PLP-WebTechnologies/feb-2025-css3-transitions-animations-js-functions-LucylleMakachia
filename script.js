const animatedButton = document.getElementById('animatedButton');
const enableAnimationCheckbox = document.getElementById('enableAnimation');
const animationPreferenceKey = 'enableButtonAnimation';

// Function to store user preference in localStorage
function storeAnimationPreference(enabled) {
    localStorage.setItem(animationPreferenceKey, enabled);
}

// Function to retrieve user preference from localStorage
function getAnimationPreference() {
    const preference = localStorage.getItem(animationPreferenceKey);
    return preference === 'true'; // Convert string to boolean
}

// Function to trigger the animation
function triggerAnimation() {
    if (enableAnimationCheckbox.checked) {
        animatedButton.classList.add('animated');
        // Remove the class after the animation finishes
        setTimeout(() => {
            animatedButton.classList.remove('animated');
        }, 500); // Duration matches the CSS animation
    }
}

// Event listener for the button click
animatedButton.addEventListener('click', triggerAnimation);

// Load the animation preference from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const shouldAnimate = getAnimationPreference();
    enableAnimationCheckbox.checked = shouldAnimate;
});

// Event listener for the checkbox change
enableAnimationCheckbox.addEventListener('change', (event) => {
    storeAnimationPreference(event.target.checked);
});