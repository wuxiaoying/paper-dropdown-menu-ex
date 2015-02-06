(function() {
  Polymer({
    positionTarget: function() {
      this.style.left = "0";
      this.style.top = this.parentElement.clientHeight + 5 + "px";
      this.style.right = "0";
    }
  });

}).call(this);
