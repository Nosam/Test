let stories = JSON.parse(localStorage.getItem('stories')) || [];

function displayStories() {
    const storyContainer = document.getElementById('story-container');
    storyContainer.innerHTML = '';
    stories.forEach((story, index) => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerText = story;
        storyContainer.appendChild(storyDiv);
    });
}

function addStory() {
    const newStory = document.getElementById('new-story').value;
    if (newStory.trim() !== '') {
        stories.push(newStory);
        localStorage.setItem('stories', JSON.stringify(stories));
        displayStories();
        document.getElementById('new-story').value = '';
    }
}

// Display stories on page load
displayStories();
