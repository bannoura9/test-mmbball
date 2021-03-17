$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      part: "id,snippet",
      key: "AIzaSyCAH8cKrD6ASDhtfMYIfEGzNU6v9mcltRI",
      channelId: "UCHBDAkjxufCaEfmRaf7Bj3Q",
      maxResults: 20,
    },
    function (data) {
      const containerDiv = document.querySelector("#recentlyAdded");
      $.each(
        data.items.filter((vid) => vid.id.kind === "youtube#video"),
        function (i, item) {
          console.log("vidd==>>", item);
          const videoDiv = `<div container dashOpacity mb-5">
          <div id="video-wrapper" class="card mb-1">
        <!-- HEADER -->
        <div class="mt-4">
          <img id="rec-videos-icon" src="../src/assets/icons/feature.png" alt="" />
          <h4 class="card-title fs-3">Recently Added Videos</h4>
          <h6 class="card-subtitle mb-3 text-black-50">Updated on March 2nd</h6>
        </div>
        <!-- VIDEO CONTAINER -->
        <div class="video-container">
          <!-- VIDEO #1 -->
          <div class="video">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/${
              item.id.videoId
            }" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="col-lg-6">
            <h5>${item.snippet.title}</h5>
            <div class="mt-2">
              <p class="card-text text-black-50 mb-3">Added ${item.snippet.publishedAt?.slice(
                0,
                -10
              )}</p>
            </div>
          </div>
        </div>
      </div>`;
          containerDiv.innerHTML += videoDiv;
          // const videoTag = document.createElement("video");
          // videoTag.src = `http://youtu.be/${item.id.videoId}`;
          // videoTag.controls = true;
          // liTag.appendChild(videoTag);
          // const videoTag = document.createElement("iframe");
          // videoTag.src = `https://www.youtube.com/embed/${item.id.videoId}`;
          // videoTag.width = 420;
          // videoTag.height = 315;
          // liTag.appendChild(videoTag);
          // ulTag.appendChild(liTag);
        }
      );
    }
  );
});
