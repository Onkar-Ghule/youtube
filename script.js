let option=document.querySelector(".ri-menu-line")
let sideNavbar=document.querySelector(".side-navbar")
let smallSideNavbar=document.querySelector(".small-side-navbar")
let mainContent=document.querySelector(".main-content")
let swiperWidth=document.querySelector(".mySwiper")


let videoContainer=document.querySelector(".video-container")
function createSingleVideo(i) {
    const singleVideo = document.createElement('div');
    singleVideo.classList.add("single-video");
    if ((i + 1) % 4 === 0) {
        singleVideo.classList.add("hidden-video");
    }
    const actualVideo = document.createElement('div');
    actualVideo.classList.add("video-content");
    singleVideo.appendChild(actualVideo);

    const videoInfo = document.createElement("div");
    videoInfo.classList.add("video-info");
    singleVideo.appendChild(videoInfo);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    videoInfo.appendChild(logo);

    const actualInfo = document.createElement("div");
    actualInfo.classList.add("actual-info");
    videoInfo.appendChild(actualInfo);

    const info = document.createElement("p");
    info.classList.add("info");
    actualInfo.appendChild(info);

    const channelInfo = document.createElement("p");
    channelInfo.classList.add("channel-info");
    actualInfo.appendChild(channelInfo);
 
    const views = document.createElement("p");
    views.classList.add("views");
    actualInfo.appendChild(views);

    // Creating video element
    const videoElement = document.createElement('video');
    videoElement.classList.add('hoverVideo');
    videoElement.src = database[i].source;
    videoElement.poster = database[i].poster;
    videoElement.muted = true;
    videoElement.addEventListener('mouseover', function() {
        videoElement.play();
    });

    videoElement.addEventListener('mouseout', function() {
        videoElement.pause();
    });

    videoContainer.appendChild(videoElement);
    const logoElement = document.createElement("img");
    logoElement.src = database[i].logo;

    info.innerText = database[i].info;
    channelInfo.innerText = database[i].channelInfo1;
    views.innerText = database[i].Views;

    actualVideo.appendChild(videoElement);
    logo.appendChild(logoElement);

    return singleVideo;
}
for (let i = 0; i < database.length; i++) {
    if (i % 4 === 0) {
        var videos = document.createElement("div");
        videos.classList.add("videos");
        videoContainer.appendChild(videos);
    }   
    const singleVideo = createSingleVideo(i);
    videos.appendChild(singleVideo);
}
let hiddenVideo=document.querySelectorAll(".hidden-video")  
let singleWidth=document.querySelectorAll(".single-video")
option.addEventListener('click', () => {
    smallSideNavbar.classList.toggle('hide-small-navbar');
    sideNavbar.classList.toggle('show-big-navbar');

    if(sideNavbar.classList.contains('show-big-navbar')) {
        mainContent.style.width = '80vw';
        hiddenVideo.forEach((hidden)=>{
         hidden.style.display="none"
        })
         singleWidth.forEach((single)=>
         {
            single.style.width="40vw"
            single.style.height="20vw"
         });
    }
    else {
        mainContent.style.width = '93vw';
        hiddenVideo.forEach((hidden)=>{
            hidden.style.display="block"
           })
           
    }
})

