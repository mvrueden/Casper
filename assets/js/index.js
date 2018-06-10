$(".search-results").addClass("results-hide");
$("#search-field").ghostHunter({
    results: "#search-results",
    onKeyUp: true,
    displaySearchInfo: true,
    includepages: true,
    result_template : "<a href='{{link}}'><li class='search-result-item gh-search-item'>{{title}} <span class='label label-primary'>{{featured}}</span> <span class='label label-default'>{{tags}}</span></li></a>",
    info_template: "<p class='search-result-item'>Number of posts found: {{amount}}</p>",
    before: function(){
        $(".search-results").removeClass("results-hide");
    },
    item_preprocessor: function(item) {
        var ret = {};
        ret.featured = item.featured === true ? 'featured' : '';
        return ret;
    }
});