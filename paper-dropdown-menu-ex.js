(function() {
  Polymer({
    domReady: function() {
      this.$.dropdown.appendChild(this.children[0]);
    }
  });

}).call(this);
