myApp.filter('status', function () {

    return function (status) {

        if (status==1){

            return "Paid";
        }

        if(status==2){

            return "unpaid";
        }

        if (status==3){

            return "due";
        }

    };
});
