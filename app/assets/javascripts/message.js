$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var addImage = message.image.url ? addImage = `<img src="${message.image.url}" class="lower-message__image">`:'';
    var html =`<div class="message" data-id = "${message.id}">
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
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    })
  })
  
  var reloadMessages = function(){
    var last_message_id = $('.message').last().data('id');
    var href = 'api/messages'
    $.ajax({
      url: href,
      type: "GET",
      data: {id: last_message_id},
      dataType: "json"
    })
    .done(function(messages) {
      messages.forEach(function(message) {
        var insertHTML = buildHTML(message)
        $('.messages').append(insertHTML)
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  };

    var interval = setInterval(function() {
    if (location.href.match(/\/groups\/\d+\/messages/)){
    reloadMessages();
    } else {
    clearInterval(interval);
    }
  } , 5000 );

});