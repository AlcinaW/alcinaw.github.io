// Generate the SVG pattern background of stars
let starDiv, coordinatesTop, coordinatesLeft, sparkleWrapper;

//set min and max em sizes of stars, and number of stars to be generated
let min = 15;
let max = 55;
let starNum = 30;

//on loadm create the div with the SVGs to be inserted
window.onload = function() {
  sparkleWrapper = document.createElement('div');
  sparkleWrapper.className = "sparkleWrapper";

  //loop through the number of times to create the stars, and add to the sparkleWrapper div
  for (let i = 0; i < starNum; i++) {
    let height = Math.floor(Math.random() * (max - min +1)) + min;
    let width = Math.floor(Math.random() * (max - min+1)) + min;
    let coordinatesTop = Math.floor(Math.random() * (max - min+1)) + min;
    let coordinatesLeft = Math.floor(Math.random() * (max - min + 75)) + min;

    starDiv = '<div class="sparkleDiv" id="" style="position: absolute; height: ' + height + 'em; width: ' + width + 'em; top: ' + coordinatesTop + 'em; left: ' + coordinatesLeft + 'em;"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.71 42"><title>Persona-star_v2</title><g id="star"><polygon id="star-bg" points="18.29 0 27.43 11.71 41.71 11.71 33.43 23.71 38 37.43 24 33.14 12 42 12 27.14 0 18.57 14 14 18.29 0" fill="#646464"/><g id="star-ring-1"><path d="M18.8,2.77l7.61,9.75.39.5H39.24L32.36,23l-.37.53.21.62L36,35.45,24.38,31.9l-.63-.19-.53.39L13.3,39.42v-13l-.54-.39L2.85,19,14.4,15.24,15,15l.2-.65L18.8,2.77M18.29,0,14,14,0,18.57l12,8.57V42l12-8.86,14,4.29L33.43,23.71l8.29-12H27.43L18.29,0Z"/></g><g id="star-ring-2"><path d="M19.78,8l5.51,6.89.38.48h.61l8.22.11-4.82,7.16-.35.52.19.6L32,31.68l-8.29-2.43-.61-.18-.52.37-7,5-.11-8.74v-.65L15,24.69l-6.83-5,8.19-2.79.62-.21.2-.62L19.78,8m-.5-2.71L16,15.66,5.41,19.25l8.84,6.48L14.39,37l9-6.47L34,33.62,30.76,23.38l6.16-9.16L26.3,14.08l-7-8.79Z"/></g><g id="star-ring-3"><path d="M20.74,13.19l3.43,4.1.37.44.58,0,4.69.19L27,22.35l-.32.5.16.57L28.16,28l-5.05-1.35-.57-.15-.49.33L18,29.56l-.19-5.28,0-.61-.48-.37-3.82-3,4.89-1.8.58-.21.2-.58,1.6-4.57m-.47-2.59-2.35,6.73-7.1,2.61,5.68,4.39L16.77,32l6-4.08,7.28,1.94-2-6.76,4-6.32-7-.28-4.9-5.86Z"/></g><g id="star-ring-4"><path d="M21.66,18.2l1.45,1.52.32.34.46.06,1.39.18-1,1.8-.23.42.09.47.28,1.38-2-.39-.47-.09-.42.24-1.27.72-.21-2L20,22.29,19.62,22l-1.05-1,1.84-.82.45-.2.2-.45.59-1.33m-.39-2.3L19.88,19l-3.65,1.63,2.51,2.3.42,4,3-1.7,3.92.76-.66-3.28,1.91-3.48L24,18.82,21.27,15.9Z"/></g><g id="star-ring-5"><polygon points="21.84 20.65 21.64 21.3 20.99 21.51 21.55 21.91 21.55 22.6 22.1 22.19 22.75 22.39 22.54 21.75 22.92 21.2 22.26 21.2 21.84 20.65 21.84 20.65"/></g></g></svg></div>';

    //add starDiv to the sparkleWrapper for each loop
    sparkleWrapper.innerHTML += starDiv;
  }

    console.log(sparkleWrapper);
    //append the completed div to the body of the page
    document.body.appendChild(sparkleWrapper);
}
