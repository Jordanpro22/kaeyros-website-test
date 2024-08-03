const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(container => {
    const question = container.querySelector('.question');
    const answer = container.querySelector('.answer');

    question.addEventListener('click', () => {
        // Toggle the 'active' class on the container
        container.classList.toggle('active');

        // Collapse other active question containers (optional)
        questionContainers.forEach(otherContainer => {
            if (otherContainer !== container && otherContainer.classList.contains('active')) {
                otherContainer.classList.remove('active');
            }
        });
    });
});
