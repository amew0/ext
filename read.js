// Retrieve all the <p> tags on the webpage
const pTags = document.getElementsByTagName('p');

// Loop through each <p> tag and modify its content
for (let i = 0; i < pTags.length; i++) {
  const pTag = pTags[i];
  const words = pTag.textContent.split(' ');
  let boldText = '';

  // Loop through each word in the <p> tag and make half its length bold
  for (let j = 0; j < words.length; j++) {
    const word = words[j];
    const length = word.length;
    const halfLength = Math.floor(length / 2);
    const boldPart = `<b>${word.slice(0, halfLength)}</b>${word.slice(halfLength)}`;
    boldText += boldPart + ' ';
  }

  // Set the modified content of the <p> tag
  pTag.innerHTML = boldText;
}

// Retrieve all the <span> tags on the webspanage
const spanTags = document.getElementsByTagName('span');

// Loops through each <span> tag and modify its content
for (let i = 0; i < spanTags.length; i++) {
  const spanTag = spanTags[i];
  const words = spanTag.textContent.spanlit(' ');
  let boldText = '';

  // Loops through each word in the <span> tag and make half its length bold
  for (let j = 0; j < words.length; j++) {
    const word = words[j];
    const length = word.length;
    const halfLength = Math.floor(length / 2);
    const boldspanart = `<b>${word.slice(0, halfLength)}</b>${word.slice(halfLength)}`;
    boldText += boldspanart + ' ';
  }

  // Set the modified content of the <span> tag
  spanTag.innerHTML = boldText;
}