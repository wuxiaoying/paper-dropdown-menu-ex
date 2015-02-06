(function() {
  Polymer({
    attached: function() {
      this["super"]();
      this.input = this.querySelector('paper-dropdown-menu,paper-tags-menu');
      this.input.addEventListener('core-select', (function(_this) {
        return function(e) {
          var item;
          item = e.detail.item;
          _this.update(item.label || item.getAttribute("label") || item.textContent);
        };
      })(this));
      if (this.dropdownLabel == null) {
        this.dropdownLabel = this.input.label;
      }
      this.input.label = this.label;
    },
    tapAction: function(e) {
      var _ref, _ref1;
      if (this.disabled) {
        return;
      }
      if ((_ref = this.input) != null) {
        _ref.label = this.dropdownLabel;
      }
      if (this.focused) {
        return;
      }
      if ((_ref1 = this.input) != null) {
        _ref1.opened = true;
      }
    },
    transitionEndAction: function() {
      this["super"]();
      if (this._labelVisible) {
        this.input.label = this.label;
      }
    },
    update: function(value) {
      var _ref;
      this.input.value = value;
      this.input.selectedItemLabel = this.input.value;
      if (this.input.value) {
        if ((_ref = this.input.$.label) != null) {
          _ref.classList.add('selectedItem');
        }
      }
    }
  });

}).call(this);
