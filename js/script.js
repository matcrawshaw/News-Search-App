let parametersForm = $("#parametersForm")
let searchButton = $("#searchButton");
let clearButton = $("#clearButton");
let articlesCont = $("#articlesCont");

    $(searchButton).on("click", function (e) {
        e.preventDefault();
        
        let userSearch = $("#userSearch").val().trim();
        let numArticles = $("#numArticles").val();
        let startYear = $("#startYear").val();
        let endYear = $("#endYear").val();

        console.log("userSearch: " + userSearch);
        console.log("numArticles: " + numArticles);
        console.log("startYear: " + startYear);
        console.log("endYear: " + endYear);

        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + "&api-key=ftsh42q2Uw4BCIx7TcwJd9qxcABol0Gh"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let results = response.response.docs;

            console.log(results);

            for (var i = 0; i < results.length; i++) {
                const articleTitle = $("<h3>").text(results[i].headline.main);
                console.log(results[i].headline.main);
                articlesCont.append(articleTitle);
            }
        })
    }
    )

    $(clearButton).on("click", function () {
        articlesCont.empty();
    })