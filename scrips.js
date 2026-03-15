document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Matue', image: './img/artista-matue.jpeg' },
        { name: 'Veigh', image: './img/artista-veigh1.jpeg' },
        { name: 'Leo Foguete', image: './img/artista-leofoguete1.jpeg' },
        { name: 'Memphis', image: './img/artista-memphis.png' },
        { name: 'Teto', image: './img/artista-teto.jpeg' }, 
        { name: 'Charlie Brown Jr', image: './img/artista-charliebrowjr.webp' },
    ];

    const albumsData = [
        { name: 'Máquina Do Tempo', artist: 'Matue', image: './img/album-maquinadotempo.jpg' },
        { name: 'Venci o Mundo', artist: 'Veigh', image: './img/album-venciomundo.png' },
        { name: 'Ultima Noite', artist: 'Leo Foguete', image: './img/album-ultimanoite.jpg' },
        { name: 'Maior Que o Tempo', artist: 'Teto', image: './img/album-maiorqueotempo.png' },
        { name: 'Falando Com As Favelas', artist: 'Memphis', image: './img/album-falandocomasfavelas.jpg' },
        { name: '100% Charlie Brown Jr', artist: 'Charlie Brown Jr', image: './img/album-100charliebrownjr.png' },
    ];
    const artistsGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');


    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')



       artistCard.innerHTML = `
    <img src="${artist.image}" alt="Imagem do ${artist.name}">
    <h3>${artist.name}</h3>
    <p>Artista</p>
`
        
        artistsGrid.appendChild(artistCard);


    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')



        albumCard.innerHTML = `
            <img src="${album.image}" alt="Imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard);


    })






})