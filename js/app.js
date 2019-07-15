'use strict';

const filePath1 = 'data/page-1.json';
const filePath2 = 'data/page-2.json';
const dataFile1 = 'page-1';
const dataFile2 = 'page-2';

function PhotoObj(photo, file) {
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
  this.file = file;
}

PhotoObj.allPhotos = [];

PhotoObj.prototype.renderWithHandleBars = function(file){
  if(file === dataFile1){
    PhotoObj.allPhotos.filter(file => file === this.file)
    const source = $('#photo-template').html();
    const template = Handlebars.compile(source);
    const html = template(this);
    $('#photos').append(html);
  } 
  else if(file === dataFile2){
    PhotoObj.allPhotos.filter(file => file === this.file)
    const source = $('#photo-template').html();
    const template = Handlebars.compile(source);
    const html = template(this);
    $('#photos').append(html);
  }
};


PhotoObj.makeAnimal = function(data, file){
  data.forEach(animal => {
    PhotoObj.allPhotos.push(new PhotoObj(animal, file));
  })
}


PhotoObj.readJson = (filePath) => {
  if(filePath === filePath1){
    $.get(filePath1, 'json')
      .then(data => {
        PhotoObj.makeAnimal(data, dataFile1)
      })
      .then(PhotoObj.loadPhotos)
      .then(PhotoObj.loadKeyWords)

  } else if (filePath === filePath2){
    $.get(filePath2, 'json')
      .then(data => {
        PhotoObj.makeAnimal(data, dataFile2)
      })
      .then(PhotoObj.loadPhotos)
      .then(PhotoObj.loadKeyWords)

  } else {
    $.get(filePath1, 'json')
      .then(data => {
        PhotoObj.makeAnimal(data, dataFile1)
      })

    $.get(filePath2, 'json')
    .then(data => {
      PhotoObj.makeAnimal(data, dataFile2)
    })
    .then(PhotoObj.loadPhotos)
    .then(PhotoObj.loadKeyWords)
  }
};

// 
PhotoObj.loadPhotos = () => {
  let sortedPhotos = PhotoObj.allPhotos.sort((a, b) => {
    if(a.title.toUpperCase() < b.title.toUpperCase()){
      return -1;
    } else if (a.title.toUpperCase() === b.title.toUpperCase()){
      return 0;
    } else {
      return 1;
    }
  })
  console.log(PhotoObj.allPhotos)
  sortedPhotos.forEach(photo => {
    let file = photo.file
    photo.renderWithHandleBars(file)
  })
};

PhotoObj.loadKeyWords = () => {
  PhotoObj.allPhotos.forEach(photo => {
    $('#creatures').append('<option class="keyword"></option>');
    let optionClone = $('option[class="keyword"]');
    optionClone.html(photo.keyword);
    optionClone.attr('class', photo.keyword);
    optionClone.attr('value', photo.keyword);
  })
}

$('select[name="creatures"]').on('change', function(){
  let $selection = $(this).val();
  $('section').hide(); 
  $(`section[class="${$selection} page-photos"]`).show();
});

$(() => PhotoObj.readJson());

$('#page-two').on('click', function(){
  PhotoObj.allPhotos = [];
  $('.page-photos').remove(); 
  PhotoObj.readJson(filePath2)
})

$('#page-one').on('click', function(){
  PhotoObj.allPhotos = [];
  $('.page-photos').remove(); 
  PhotoObj.readJson(filePath1)
})

