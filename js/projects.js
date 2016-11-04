//http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

window.onload = function() {
    var url = 'https://api.github.com/users/nullruto/repos';
    $.getJSON(url, function(data) {
        $.each(data, function(key, val) {
            var name = val["name"];
            var giturl = val["git_url"];
            var language = val["language"];
            var pushdate = val["pushed_at"];
            var creationdate = val["created_at"];
            $(".gitbody").append(String.format("<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>", name, language, giturl));
        });
    });
}
