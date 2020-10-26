$('#form--quote').submit(function(e) {
    e.preventDefault();
    formSubmit(e.currentTarget.name);
  });

  function formSubmit(name) {
    var serializedData = $(document.forms[name]).serializeObject();
    var url = 'https://script.google.com/macros/s/AKfycbyQxJjxg33HZYDFEYzgS8dMqRsZJ85vOuyMQmpqW-xO7DlofYA/exec'; // get this url
    
    var jqxhr = $.ajax({
      url,
      method: "GET",
      dataType: "json",
      data: serializedData,
      success: function(data){
        console.log('success', data);
      }
    });
  }