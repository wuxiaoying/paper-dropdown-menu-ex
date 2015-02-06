(function() {
  Polymer({
    disabled: false,
    observe: {
      '$.dropdown.opened': 'onClose'
    },
    domReady: function() {
      this.selector = this.children[0].querySelector('.selector');
      this.$.dropdown.appendChild(this.children[0]);
      this.input = this.$.decorator.input;
    },
    updateLabelVisibility: function(value) {
      this.$.decorator.updateLabelVisibility(value);
    },
    update: function(value) {
      this.$.decorator.update(value);
    },
    keyHandler: function(e, detail) {
      if (!this.selector) {
        return;
      }
      this.$.dropdown.opened = true;
      switch (detail.key) {
        case 'down':
          this.selector.selectNext();
          break;
        case 'up':
          this.selector.selectPrevious();
      }
      e.stopPropagation();
    },
    onClose: function(e, detail) {
      if (!detail) {
        this.$.dropdown.focus();
      }
    }
  });

}).call(this);
