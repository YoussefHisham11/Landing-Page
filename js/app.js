// Make Landing Page load dynamically
document.addEventListener('DomContentLoaded', navList());
document.addEventListener('DOMContentLoaded', navListStyle());


// Create the Navigation Menu 
// activate current clicked item
function navList() {
  const section = document.getElementsByTagName('section');
  for (let i = 0; i < section.length; i++) {
    let linkList = document.createElement('li');
    let link = document.createElement('a');
    let sectioName = section[i].getAttribute('data-nav');
    let sectioNameAttribute = sectioName.replace(/\s/g, '').toLowerCase();

    link.innerText = sectioName;
    link.setAttribute('href', `#${sectioNameAttribute}`);
    link.setAttribute('id', 'link_no' + (i + 1))
    linkList.appendChild(link);
    document.getElementById('navbar__list').appendChild(linkList);
    document.getElementById('link_no' + (i + 1)).addEventListener('click', function() {
      scroll(i + 1);
      sectionActivate(i + 1);
      navActivate(i + 1);
    }) 
  }
}


// Scroll on Click
function scroll(no) {
  let section = document.getElementById('section' + no);
  let position = section.offsetTop;
  event.preventDefault();
  window.scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth'
  })
}


//Dynamic Style for Navigation 
function navListStyle () {
  let link = document.getElementsByTagName('a');
  let styles = `
    display: flex;
    color: #000;
    flex-direction: row;
    text-decoration: none;
    align-items: stretch;
    padding: 0.5em;
    background-color: rgb(220, 220, 220);
    margin: 0 0.5em 0 0.5em;
    transform:translateX(-0.5em);
    font-size: large;
  `;

  for (i = 0; i < link.length; i++) {
    link[i].setAttribute('style', styles);
  }

  mouseTouch();
}


//Dynamic Style on hover
function mouseTouch () {
  let link = document.getElementsByTagName('a');

  for (i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', function (event) {
      event.target.style.backgroundColor = "#000";
      event.target.style.color = "#fff";
    })
    //Blue color stays in case of activation
    if (link[i].style.backgroundColor == "rgb(47, 0, 255)") {
      link[i].addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = "rgb(220, 220, 220)";
        event.target.style.color = "#000";
      })
    }
  }
}


// Activate section on click
function sectionActivate(no) {
  let activesClass = 'your-active-class';
  let activeSections = document.getElementsByClassName(activesClass)[0];
  let newactiveSections = document.getElementById('section' + no);
  activeSections.removeAttribute('class');
  newactiveSections.setAttribute('class', activesClass);
}


// Activate clicked navigation menu element
function navActivate(no) {
  let activeNavs = document.getElementById('link_no' + no);
  let othersNavs = document.getElementsByTagName('a');
  for (i = 0; i <othersNavs.length; i++) {
    if (othersNavs[i].style.backgroundColor == "rgb(0, 0, 0)") {
      oldNav = othersNavs[i];
      oldNav.style.backgroundColor = "rgb(220, 220, 220)";
      oldNav.style.color = "#000";          
    }
  }
  activeNavs.style.backgroundColor = "rgb(0, 0, 0)";
  activeNavs.style.color = "#fff";
}