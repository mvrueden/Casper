$(".search-results").addClass("results-hide");
$("#search-field").ghostHunter({
    results: "#search-results",
    onKeyUp: true,
    displaySearchInfo: false,
    result_template : "<a href='{{link}}'><li class='search-result-item'>{{title}}</li></a>",
    before: function(){
        $(".search-results").removeClass("results-hide");
    }
});