Polymer
  disabled: false

  domReady: ->
    @$.dropdown.appendChild this.children[0]
    @input = @$.decorator.input
    return

  updateLabelVisibility: (value) ->
    @$.decorator.updateLabelVisibility value
    return

  update: (value) ->
    @$.decorator.update value
    return
