window.onload = function() {
    var url = 'https://api.github.com/users/nullruto/repos';
    $.getJSON(url, function(data) {
        $.each(data, function(key, val) {
            var name = val["name"];
            var giturl = val["git_url"];
            var language = val["language"];
            var pushdate = val["pushed_at"];
            var creationdate = val["created_at"];
            $(".content").append("<br/>" + val["name"] + ": " + val["git_url"] + "<br/>");
        });
    });
}
