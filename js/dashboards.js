$(document).ready(function() {
        $.urlParam = function(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        }
        $(function() {
            var id = $.urlParam('id');
            var url = "http://membershipwebapi977290.azurewebsites.net/api/Members/" + id;
            console.log(url);
            $.get(url, function(inf, status) {
                console.log(inf);
                $('.account').attr('href', "account.html?id=" + inf.Id);
                $(".myProfile").attr('href', "myProfile.html?id=" + inf.Id);
                $(".manage-emp").attr('href', "manage-emp.html?id=" + inf.Id);
                $('.username').html(inf.UserName);
                $(".add-emp").attr('href', "add-emp.html?id=" + inf.Id);
                $(".dashboard").attr('href', "dashboard.html?id=" + inf.Id);
                $(".adduser").attr('href', "adduser.html?id=" + inf.Id);
            });
        });
});
