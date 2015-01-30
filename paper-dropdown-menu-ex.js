(function() {
  Polymer({
    domReady: function() {
      this.$.dropdown.appendChild(this.children[0]);
      this.input = this.$.decorator.input;
    },
    updateLabelVisibility: function(value) {
      this.$.decorator.updateLabelVisibility(value);
    }
  });

}).call(this);
