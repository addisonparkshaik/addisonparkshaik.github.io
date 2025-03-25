document.addEventListener('DOMContentLoaded', function () {
    const titles = ['Expectation Document', 'Basic HTML Styling', 'CSS Hover', 'Welcome to JS',
        ' Calculator with JS', 'GitHub Integration', ' Console Output', 'String Operation',
        'Conditions', 'Call-Stack with Array', 'Star with Loops', 'Class Work',
        'Class Work - Objects', 'Class Work - Objects 2', 'Class Work - Functions',
        'Class Work - Class & Bootstrap'];
    const nav = document.querySelector('nav');
    titles.forEach((title, index) => {
        const button = document.createElement('button');
        button.textContent = title;
        button.addEventListener('click', () => loadContent(index + 1));
        nav.appendChild(button);
    });
});

function loadContent(taskNumber) {
    const content = document.getElementById('content');
    content.innerHTML = '<iframe src="work/classwork' + taskNumber + '/classwork' + taskNumber + '.html" style="width:100%; height:400px; border:none;"></iframe>';
}
