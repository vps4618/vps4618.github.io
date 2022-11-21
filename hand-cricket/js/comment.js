"use strict";

// loads comments when page loads
// get request
const xhrGet = new XMLHttpRequest();
xhrGet.open("GET", "https://handcricketcomments.glitch.me/api/comments");
xhrGet.responseType = "json";
xhrGet.onload = () => {
  if (
    xhrGet.readyState == 4 &&
    (xhrGet.status == 200 || xhrGet.status == 201)
  ) {
    const commentsArray = xhrGet.response.records;
    if (commentsArray.length === 0) {
      commentsSection.innerHTML += `<div class="item">
      <p class="id">*</p>
      <p class="name">No comments</p>
      <p  class="comment">*</p>
  </div>`;
    } else {
      commentsArray.map((comment) => {
        commentsSection.innerHTML += `<div class="item">
                                        <p class="id">${
                                          comment.id
                                        }</p>
                                        <p class="name">${
                                          comment.firstName +
                                          " " +
                                          comment.lastName
                                        } <small>${
          comment.dateTime
        }</small></p>
                                        <p  class="comment">${
                                          comment.comment
                                        }</p>
                                    </div>`;
      });
    }
  } else if (xhrGet.status === 403) {
    commentsSection.innerHTML = `<div class="item">
                                            <p class="id">*</p>
                                            <p class="name">forbidden</p>
                                            <p  class="comment">*</p>
                                        </div>`;
  } else if (xhrGet.status === 429) {
    commentsSection.innerHTML = `<div class="item">
                                            <p class="id">*</p>
                                            <p class="name">Too many requests</p>
                                            <p  class="comment">*</p>
                                        </div>`;
  } else {
    const data = xhrGet.response;
    const error = JSON.parse(data);
    commentsSection.innerHTML = `<div class="item">
                                            <p class="id">*</p>
                                            <p class="name">${error}</p>
                                            <p  class="comment">*</p>
                                        </div>`;
  }
};

xhrGet.send();

const form = document.getElementById("form");
const commentButton = document.getElementById("commentButton");
const message = document.getElementById("message");
const commentsSection = document.getElementById("commentsSection");

// sounds
const buttonClickSound = new Audio("../sounds/buttonClick.mp3");
const playerWinningCricketSound = new Audio("../sounds/playerWinningCricket.mp3");

function showForm() {
  buttonClickSound.play();
  form.style.display = "block";
  commentButton.style.display = "none";
}

function submitComment() {
  playerWinningCricketSound.play();
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let comment = document.getElementById("commentInput").value;
  let today = new Date();
  let fullYear = today.getFullYear().toString();
  let month = today.getMonth().toString();
  let day = today.getDate().toString();
  let hour = today.getHours().toString();
  let minutes = today.getMinutes().toString();

  let dateTime =
    fullYear + "-" + month + "-" + day + " > " + hour + " : " + minutes;

  if (firstName === "") {
    message.innerHTML = "firstName field empty !";
    message.className = "error";
    return;
  } else if (lastName === "") {
    message.innerHTML = "lastName field empty !";
    message.className = "error";
    return;
  } else if (comment === "") {
    message.innerHTML = "comment field empty !";
    message.className = "error";
    return;
  } else {
    try {
      // post comment
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://handcricketcomments.glitch.me/api/comments");
      xhr.setRequestHeader("Content-Type", "application/json");
      const body = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        comment: comment,
        dateTime: dateTime,
      });
      xhr.onload = () => {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
          message.innerHTML = JSON.parse(xhr.responseText).message;
          message.className = "info";

          setTimeout(() => {
            // get request
            const xhrGet = new XMLHttpRequest();
            xhrGet.open(
              "GET",
              "https://handcricketcomments.glitch.me/api/comments"
            );
            xhrGet.responseType = "json";
            xhrGet.onload = () => {
              if (
                xhrGet.readyState == 4 &&
                (xhrGet.status == 200 || xhrGet.status == 201)
              ) {
                const commentsArray = xhrGet.response.records;
                commentsSection.innerHTML = "";
                if (commentsArray.length === 0) {
                  commentsSection.innerHTML += `<div class="item">
                  <p class="id">*</p>
                  <p class="name">No comments</p>
                  <p  class="comment">*</p>
              </div>`;
                } else {
                  commentsArray.map((comment) => {
                    commentsSection.innerHTML += `<div class="item">
                                                    <p class="id">${
                                                      comment.id
                                                    }</p>
                                                    <p class="name">${
                                                      comment.firstName +
                                                      " " +
                                                      comment.lastName
                                                    } <small>${
                      comment.dateTime
                    }</small></p>
                                                    <p  class="comment">${
                                                      comment.comment
                                                    }</p>
                                                </div>`;
                  });
                }
              } else if (xhrGet.status === 403) {
                commentsSection.innerHTML = `<div class="item">
                                                        <p class="id">*</p>
                                                        <p class="name">forbidden</p>
                                                        <p  class="comment">*</p>
                                                    </div>`;
              } else if (xhrGet.status === 429) {
                commentsSection.innerHTML = `<div class="item">
                                                        <p class="id">*</p>
                                                        <p class="name">Too many requests</p>
                                                        <p  class="comment">*</p>
                                                    </div>`;
              } else {
                const data = xhrGet.response;
                const error = JSON.parse(data);
                commentsSection.innerHTML = `<div class="item">
                                                        <p class="id">*</p>
                                                        <p class="name">${error}</p>
                                                        <p  class="comment">*</p>
                                                    </div>`;
              }
            };

            xhrGet.send();

            message.innerHTML = "";
            form.style.display = "none";
            commentButton.style.display = "block";
          }, 2000);
        } else {
          message.innerHTML = JSON.parse(xhr.responseText).error;
          message.className = "error";

          setTimeout(() => {
            message.innerHTML = "";
            form.style.display = "none";
            commentButton.style.display = "block";
          }, 2000);
        }
      };
      xhr.send(body);
    } catch (err) {
      message.innerHTML = "error";
      message.className = "error";

      setTimeout(() => {
        message.innerHTML = "";
        form.style.display = "none";
        commentButton.style.display = "block";
      }, 2000);
    }
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("commentInput").value = "";
  }
}

function cancelComment(){
  buttonClickSound.play();
  
  document.getElementById("firstNameInput").value = "";
  document.getElementById("lastNameInput").value = "";
  document.getElementById("commentInput").value = "";
  form.style.display = "none";
  commentButton.style.display = "block";
}