$(document).ready(function() {
    $.getJSON('glossary.json', function(data) {
        data.forEach(function(item) {
            var termElement = $('<div class="term"></div>').text(item.term);
            var definitionElement = $('<div class="definition"></div>').text(item.definition);
            termElement.append(definitionElement);
            $('#glossary-container').append(termElement);

            termElement.click(function() {
                $(this).find('.definition').slideToggle();
            });
        });
    });
});
