$(function() {
    var query;
    var result = $('.result');
    var result1 = $('.result1');
    //clicking the button for fetching data 
    $('#search').on('click', function() {
        //taking the value from text field
        query = $('#title').val();
        $.ajax({
            type: 'get',
            url: "http://www.omdbapi.com/?t=" + query,
            success: function(data) {
                //retriving data from json file
                if (data.Response === "True") {
                    result.html('<ul><li><img src="' + data.Poster + '"/></li>');
                    result1.html('<li>' + "Title:" + " " + data.Title + '</li>' +
                        '<li>' + "Type:" + " " + data.Type + '</li>' +
                        '<li>' + "Year:" + " " + data.Year + '</li>' +
                        '<li>' + "Released:" + " " + data.Released + '</li>' +
                        '<li>' + "Runtime:" + " " + data.Runtime + '</li>' +
                        '<li>' + "Language:" + " " + data.Language + '</li>' +
                        '<li>' + "Director:" + " " + data.Director + '</li>' +
                        '<li>' + "Genre:" + " " + data.Genre + '</li></ul>');
                } else {
                	//if error found
                    alert('not found');
                }
            },
            error: function(data) {
                if (get.response == false) {
                    console.log("not found");
                }
            }

        });

    });

});
