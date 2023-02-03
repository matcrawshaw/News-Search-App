let searchButton = $("#searchButton");
let numArticles =


    $(searchButton).on("click", function (e) {
        e.preventDefault();

        articlesCont = $("#articlesCont")

        let userSearch = $("#userSearch").val().trim()

        console.log(userSearch);

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

        });

    }
    )
