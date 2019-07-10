'use strict';

let dataFile = 'data/page-1.json';

function PhotoObj(photo) {
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
}

PhotoObj.allPhotos = [];

PhotoObj.prototype.renderWithHandleBars = function(){
  const source = $('#photo-template').html();
  const template = Handlebars.compile(source);
  const html = template(this);
  $('#photos').append(html);
};


PhotoObj.readJson = () => {
  $.get(dataFile, 'json')
    .then(data => {
      data.forEach(p => {
        PhotoObj.allPhotos.push(new PhotoObj(p));
      });
    })
    .then(PhotoObj.loadPhotos);
};

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
  sortedPhotos.forEach(photo => photo.renderWithHandleBars());
};

$(() => PhotoObj.readJson());

$('select[name="creatures"]').on('change', function(){
  let $selection = $(this).val();
  $('section').hide(); 
  $(`section[class="${$selection}"]`).show();
});
