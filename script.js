// script.js
var currentPhotoIndex = 0;
var currentGallery = [];

function openModal(galleryName, index) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    currentGallery = getPhotoGallery(galleryName);
    currentPhotoIndex = index;
    
    modal.style.display = "block";
    modalImage.src = currentGallery[index].path;
    captionText.innerHTML = currentGallery[index].caption;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function changePhoto(n) {
    currentPhotoIndex += n;
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = currentGallery.length - 1;
    }
    if (currentPhotoIndex >= currentGallery.length) {
        currentPhotoIndex = 0;
    }

    modalImage.src = currentGallery[currentPhotoIndex].path;
    captionText.innerHTML = currentGallery[currentPhotoIndex].caption;
}

function getPhotoGallery(galleryName) {
    // Replace with the actual paths and captions for your photos
    var galleries = {
        'Leafy_Learn': [
            { path: 'images/Portfolio/LeafyLearn/leafy_title_shot.png', caption: 'Leafy Learn, 2024 made with Unity and Maya' },
            { path: 'images/Portfolio/LeafyLearn/game_play.png', caption: 'Sample Game Play' },
            { path: 'images/Portfolio/LeafyLearn/characters.png', caption: 'Forest Guide/Teacher Mushu the Bear and the player\'s character' },
            { path: 'images/Portfolio/LeafyLearn/game_map.png', caption: 'Players must traverse the whole game map and complete different levels' },
            { path: 'images/Portfolio/LeafyLearn/title_screen.png', caption: 'Check out leafy learn here:  https://leafylearn.site/' }
        ],
        'Draeger_abstractRender': [
            { path: 'images/Portfolio/Maya/Draeger_abstractRender.jpg', caption: 'Birth of Aphrodite, 2022 made in Maya' }
        ],
        'kitchen': [
            { path: 'images/Portfolio/Maya/kitchen_shot1.jpg', caption: 'My Kitchen, 2022 Maya' },
            { path: 'images/Portfolio/Maya/kitchen_shot2.jpg', caption: 'My Kitchen, 2022 Maya' },
            { path: 'images/Portfolio/Maya/shotFinal5Edited.jpg', caption: 'My Kitchen, 2022 Maya' },
            { path: 'images/Portfolio/Maya/shot3FinalEditedAO.png', caption: 'My Kitchen, 2022 Maya' },
        ],
        'bowlingAlley': [
            { path: 'images/Portfolio/Unity/moneyshot1 2.png', caption: 'Future Lanes, 2023 Unity' },
            { path: 'images/Portfolio/Unity/moneyshot2 2.png', caption: 'Future Lanes, 2023 Unity' },

        ],
        'animals': [
            { path: 'images/Portfolio/Unity/penguin.gif', caption: 'Low Poly Penguins, 2023 Unity' },
            { path: 'images/Portfolio/Unity/fox.gif', caption: 'Low Poly Fox, 2023 Unity' },
            { path: 'images/Portfolio/Unity/squirrel.png', caption: 'Low Poly Squirrel, 2023 Unity' }
        ],
        'turtle': [
            { path: 'images/Portfolio/Unity/MoneyShot1.png', caption: 'Turtle Craze, 2023 Unity' },
            { path: 'images/Portfolio/Unity/MoneyShot2.png', caption: 'Turtle Craze, 2023 Unity' },
            { path: 'images/Portfolio/Unity/turtleGame.gif', caption: 'Turtle Craze, 2023 Unity' }
        ],
        'voyager': [
            { path: 'images/Portfolio/Unity/VR Final Project/anotherPic.png', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/VR Final Project/PIC.png', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/VR Final Project/Screen Shot 2023-03-02 at 4.14.08 PM.png', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/VR Final Project/Screen Shot 2023-03-02 at 4.15.48 PM.png', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/VR Final Project/starterIsland.png', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/finalGamePlay.gif', caption: 'Voyager, 2023 Unity' },
            { path: 'images/Portfolio/Unity/gamePlayFinal.gif', caption: 'Voyager, 2023 Unity' }
        ],
        'hills': [
            { path: 'images/Portfolio/Procreate/Screenshot 2023-11-17 at 4.27.11 PM.png', caption: 'Video made for animation class: https://youtu.be/X6fk_jn_BFI' }
        ],
        'trash': [
            { path: 'images/Portfolio/Procreate/Screenshot 2023-11-30 at 4.37.22 PM.png', caption: 'Video made for animation class: https://youtu.be/X6fk_jn_BFI' }
        ],
        'woods': [
            { path: 'images/Portfolio/Drawings/woodsDrawing.png', caption: '6B Pencil, 2020' },
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.38.45 PM.png', caption: 'Charcoal, 2020' },
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.39.43 PM.png', caption: 'Charcoal, 2020' }
        ],
        'finalSeries': [
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.41.54 PM.png', caption: 'Charcoal, 2020' }
        ],
        'finalSeries1': [
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.43.34 PM.png', caption: 'Charcoal, 2020' }
        ],
        'finalSeries2': [
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.45.05 PM.png', caption: 'Charcoal, 2020' }
        ],
        'remake': [
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.46.22 PM.png', caption: 'Charcoal and Yellow Pastel, 2020' }
        ],
        'speedSketch': [
            { path: 'images/Portfolio/Drawings/Screenshot 2023-12-01 at 1.47.07 PM.png', caption: '6B Pencil, 2020' }
        ],
        'rainbowRocks': [
            { path: 'images/Portfolio/Paintings/rainbowRocks.png', caption: 'Acrylics, 2020' }
        ],
        'garden': [
            { path: 'images/Portfolio/Paintings/gardenPainting.png', caption: 'Acrylics, 2020' }
        ],
        'selfPortrait': [
            { path: 'images/Portfolio/Paintings/Screenshot 2023-12-01 at 1.49.42 PM.png', caption: 'Oil Paints, 2022' }
        ],
        'mirage': [
            { path: 'images/Portfolio/Paintings/Screenshot 2023-12-01 at 1.49.25 PM.png', caption: 'Acrylics on wood, 2020' }
        ],
        'screwdriver': [
            { path: 'images/Portfolio/Drawings/screwdriver.png', caption: 'Charcoal and red pastel, 2020' }
        ],
        'colorPortraits': [
            { path: 'images/Portfolio/PortraitSeries/Untitled 39.png', caption: 'Sketchbook, 2020' },
            { path: 'images/Portfolio/PortraitSeries/Untitled 42.png', caption: 'Sketchbook, 2020' },
            { path: 'images/Portfolio/PortraitSeries/Untitled 40.png', caption: 'Sketchbook, 2020' },
            { path: 'images/Portfolio/PortraitSeries/Untitled 41.png', caption: 'Sketchbook, 2020' }
        ]
        // Add more galleries as needed
    };

    return galleries[galleryName] || [];
}
