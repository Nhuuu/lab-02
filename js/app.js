'use strict';

function PhotoObj(photo) {
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
}

PhotoObj.allPhotos = [];

PhotoObj.prototype.render = function(){
  $('main').append('<div class="clone"></div>');
  let photoClone = $('div[class="clone"]');

  let photoHtml = $('#photo-template').html();

  photoClone.html(photoHtml);

  photoClone.find('h2').text(this.title);
  photoClone.find('img').attr('src', this.image_url)
  photoClone.find('p.description').text(this.description);
  photoClone.find('p.horns').text(this.horns);
  photoClone.removeClass('clone');
  photoClone.attr('class', this.keyword);
};

PhotoObj.readJson = () => {
  $.get('../data/page-1.json', 'json')
    .then(data => {
      data.forEach(p => {
        PhotoObj.allPhotos.push(new PhotoObj(p));
      });
    })
    .then(PhotoObj.loadPhotos);
};

PhotoObj.loadPhotos = () => {
  // TODO: sort the array by titles first
  let sortedPhotos = PhotoObj.allPhotos.sort((a, b) => {
    return a, b;
  });
  sortedPhotos.forEach(photo => photo.render());
  $('#photo-template').hide();
};

$(() => PhotoObj.readJson());

$('select[name="creatures"]').on('change', function(){
  let $selection = $(this).val();
  $('div').hide(); // hides all div tags
  $(`div[class="${$selection}"]`).show();
});
