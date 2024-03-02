document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');

    // Example data (replace with your own)
    const videos = [
        { title: 'Palmpay Adder', url: 'VID_20240229_171015_097.mp4' },
        { title: 'Sportybet X app', url: 'VID_20240229_170757_398.mp4' },
        { title: 'Latest YAHOO BOYS Apartment ads Tutorial for FAST $20,000 CASHOUT', url: 'VID_20240225_123949_736.mp4' },
        { title: 'HERE IS A VIDEO OF How to do fake Alart to any bank and they will receive the money for 20 minutes(part1),If you want the website and a personal tutorial of how to do it safely it will cost you ( 20k )', url: 'VID-20240301-WA0003.mp4', whatsappLink: 'https://api.whatsapp.com/send?phone=+2347043934781&text=i%20want%20to%20purchase%20the%20fake%20alert%20website' },
        { title: 'Video Title 5', url: 'video5.mp4' },
        // Add more videos here...
        { title: 'Video Title 6', url: 'video6.mp4' },
        { title: 'Video Title 7', url: 'video7.mp4' },
        { title: 'Video Title 8', url: 'video8.mp4' },
        { title: 'Video Title 9', url: 'video9.mp4' },
        { title: 'Video Title 10', url: 'video10.mp4' },
        { title: 'Video Title 11', url: 'video11.mp4' },
        { title: 'Video Title 12', url: 'video12.mp4' },
        { title: 'Video Title 13', url: 'video13.mp4' },
        { title: 'Video Title 14', url: 'video14.mp4' },
        { title: 'Video Title 15', url: 'video15.mp4' }
    ];

    // Populate video container with video items
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        let innerHTML = `
            <h3>${video.title}</h3>
            <video controls>
                <source src="${video.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        if (video.whatsappLink) {
            // If there's a WhatsApp link, add it as a redirection link
            innerHTML += `<a href="${video.whatsappLink}" target="_blank">Message On WhatsApp</a>`;
        }
        videoItem.innerHTML = innerHTML;
        videoContainer.appendChild(videoItem);
    });
});
// Open slide menu
    function openSlideMenu() {
        document.getElementById('slideMenu').style.width = '200px';
    }

    // Close slide menu
    function closeSlideMenu() {
        document.getElementById('slideMenu').style.width = '0';
    }
    function navigate(page) {
    // Implement navigation logic based on the page parameter
    const pages = {
        'dashboard': 'freeltccoin.html',
        'dark net apps': 'darknetapp.html',
        'dark net videos': 'darknetvideos.html',
        'buy': 'buyminer.html'
    };
    const targetPage = pages[page];
    if (targetPage) {
        window.location.href = targetPage; // Redirect to the target page
    } else {
        console.error('Invalid page parameter:', page);
    }
}
