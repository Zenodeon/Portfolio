function OpenProjectView()
{
    alert("yes");
}

const carouselElements = document.querySelectorAll('[data-bs-ride="false"]');
carouselElements.forEach((element) => {
  const carousel = bootstrap.Carousel.getOrCreateInstance(element);
  carousel.pause();
});

/*
const myCarousel = document.getElementById('carousel-1')

myCarousel.addEventListener('slide.bs.carousel', event => {
     //StopVideoPlaybacks();
})

function StopVideoPlaybacks() 
{
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.stop();
		} else {
            console.log(video);
			var src = video.src;
			video.src = src;
		}
	});
};*/