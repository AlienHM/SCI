var click = 'herrp'
var HOST_URL = 'http://localhost:3000/'
$.ajax({
    type: 'POST',
    dataType: 'json',
    beforeSend: function() {

    },
    // headers: {
    //     "X-CSRFToken": TOKEN
    // },
    url: HOST_URL + "index",
    crossDomain: true,
    data: {
        test: JSON.stringify(click)

    },

    error: function(err) {

    },
    success: (response_data) => {
        console.log(response_data);
    }
})