const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-yX6gMYSJz4b1beoYHebJw7gY'}};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1&sparkline=false', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
// const options = {
//     method: 'GET',
//     headers: { 'x-cg-demo-api-key': 'CG-yX6gMYSJz4b1beoYHebJw7gY' }
//   };
  
//   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1&sparkline=false', options)
//     .then(response => response.json())
//     .then(response => {
//       const tableBody = document.querySelector('#crypto-table tbody');
  
//       response.forEach(cryptoData => {
//         const row = document.createElement('tr');
  
//         const imageCell = document.createElement('td');
//         const image = document.createElement('img');
//         image.src = cryptoData.image;
//         image.alt = cryptoData.name;
//         imageCell.appendChild(image);
//         row.appendChild(imageCell);
  
//         const nameCell = document.createElement('td');
//         nameCell.textContent = cryptoData.name;
//         row.appendChild(nameCell);
  
//         const symbolCell = document.createElement('td');
//         symbolCell.textContent = cryptoData.symbol;
//         row.appendChild(symbolCell);
  
//         const priceChange24hCell = document.createElement('td');
//         priceChange24hCell.textContent = cryptoData.price_change_24h;
//         row.appendChild(priceChange24hCell);
  
//         const marketCapChange24hCell = document.createElement('td');
//         marketCapChange24hCell.textContent = cryptoData.market_cap_change_24h;
//         row.appendChild(marketCapChange24hCell);
  
//         const priceChangePercentage24hCell = document.createElement('td');
//         priceChangePercentage24hCell.textContent = cryptoData.price_change_percentage_24h;
//         row.appendChild(priceChangePercentage24hCell);
  
//         const marketCapCell = document.createElement('td');
//         marketCapCell.textContent = cryptoData.market_cap;
//         row.appendChild(marketCapCell);
  
//         tableBody.appendChild(row);
//       });
//     })
//     .catch(err => console.error(err));