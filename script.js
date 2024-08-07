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

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const arrow = document.querySelector('.arrow');

    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default action

      // Toggle the dropdown menu
      dropdownMenu.classList.toggle('show');

      // Toggle the arrow direction
      arrow.classList.toggle('up');
    });
  });
