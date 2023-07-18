function revealImage() {
    var button = document.getElementById('button');
    var imageContainer = document.getElementById('imageContainer');
    var missImage = document.getElementById('missImage');
  
    button.style.display = 'none';
    missImage.src = 'https://i.pinimg.com/originals/09/b6/25/09b6252e417ff5e1354ae4a793947330.jpg';
    missImage.style.display = 'block';
  }
  
