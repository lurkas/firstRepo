  $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
    },
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "Musician";
      $.each( items, function( index, item ) {
        var li;
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        li = that._renderItemData( ul, item );
        if ( item.category ) {
          li.attr( "aria-label", item.category + " : " + item.label );
        }
      });
    }
  });

  $(function() {
    var data = [
      { label: "anders", Musician: "Musician" },
      { label: "andreas", Musician: "Musician" },
      { label: "antal", Musician: "Musician" },
      { label: "John Mayer", category: "Musician" },
      { label: "Sheryl Crow", category: "Musician" },
      { label: "Kanye West", category: "Musician" },
      { label: "anders andersson", category: "People" },
      { label: "andreas andersson", category: "People" },
      { label: "andreas johnson", category: "People" }
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });
  });

  $('.product').gallerify({
    margin:10,
    mode:'default',
    lastRow:'adjust',
  });

  

