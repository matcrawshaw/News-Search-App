let parametersForm = $("#parametersForm")
let searchButton = $("#searchButton");
let clearButton = $("#clearButton");
let articlesCont = $("#articlesCont");

    $(searchButton).on("click", function (e) {
        articlesCont.empty();
        e.preventDefault();

        let userSearch = $("#userSearch").val().trim();
        let numArticles = $("#numArticles").val();
        let startYearVal = $("#startYear").val();
        let endYearVal = $("#endYear").val();
        let startYear = moment(startYearVal, "YYYY").format("YYYY0101");
        if (startYear === "Invalid date") {
            startYear = "";
        }
        let endYear = moment(endYearVal, "YYYY").format("YYYY1231");
        if (endYear === "Invalid date") {
            endYear = "";
        }

        console.log("userSearch: " + userSearch);
        console.log("numArticles: " + numArticles);
        console.log("startYear: " + startYear);
        console.log("endYear: " + endYear);

        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + "&?begin_date=" + startYear + "&?end_date=" + endYear + "&api-key=ftsh42q2Uw4BCIx7TcwJd9qxcABol0Gh"
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let results = response.response.docs;

            console.log(results);

            for (var i = 0; i < numArticles; i++) {
                const articleTitle = $("<h3>").text(results[i].headline.main);
                console.log(results[i].headline.main);
                articlesCont.append(articleTitle);
                const leadParagraph = $("<p>").text(results[i].lead_paragraph);
                articlesCont.append(leadParagraph)
            }
        }).then(function() {
            $("#userSearch").val("");
            $("#numArticles").val("1");
            $("#startYear").val("");
            $("#endYear").val("");
        });

    });

    $(clearButton).on("click", function () {
        articlesCont.empty();
    })
