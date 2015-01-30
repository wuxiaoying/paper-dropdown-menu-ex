(function() {
  Polymer({
    attached: function() {
      this.$.dropdown.appendChild(this.children[0]);
    }
  });

}).call(this);