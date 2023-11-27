const url = 'https://www.boredapi.com/api/activity';

for (let i = 0; i < 5; i++) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const activityElement = document.createElement('div');
      activityElement.innerHTML = `
        <h2>${data.activity}</h2>
        <p>${data.type}</p>
      `;

      document.body.appendChild(activityElement);
    });
}