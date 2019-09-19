$(function(){
  function buildHTML(message){
    var addImage = message.image.url ? addImage = `<img src="${message.image.url}" class="lower-message__image">`:'';
    var html =`<div class="message">
                <div class="message__upper-info">
                  <div class="message__upper-info__talker">
                    ${message.user_name}
                  </div>
                  <div class="message__upper-info__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                    <p>
                      ${addImage}
                    </p>
                </div>
              </div>`
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      $('.submit-btn').removeAttr('disabled');
      scrollBottom();
      function scrollBottom(){
        var target = $('.message').last();
        var position = target.offset().top + $('.messages').scrollTop();
        $('.messages').animate({ scrollTop: position }, 300, 'swing');
        }
      })
    .fail(function(data){
      alert('エラーが発生しました');
    })
  })
});