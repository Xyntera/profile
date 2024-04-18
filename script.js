// Sample JavaScript functions

// Function to add a new education field
function addEducationField() {
    const educationSection = document.getElementById('education');
    const newField = document.createElement('div');
    newField.innerHTML = `
        <p>Degree: <input type="text" placeholder="Degree"></p>
        <p>Institution: <input type="text" placeholder="Institution"></p>
        <p>Year: <input type="text" placeholder="Year"></p>
    `;
    educationSection.appendChild(newField);
}

// Function to add a new experience field
function addExperienceField() {
    const experienceSection = document.getElementById('experience');
    const newField = document.createElement('div');
    newField.innerHTML = `
        <p>Job Title: <input type="text" placeholder="Job Title"></p>
        <p>Company: <input type="text" placeholder="Company"></p>
        <p>Year: <input type="text" placeholder="Year"></p>
    `;
    experienceSection.appendChild(newField);
}

// Add more functions as needed
