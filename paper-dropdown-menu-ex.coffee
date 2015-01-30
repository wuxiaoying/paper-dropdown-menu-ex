Polymer
  domReady: ->
    @$.dropdown.appendChild this.children[0]
    @input = @$.decorator.input
    return

  updateLabelVisibility: (value) ->
    @$.decorator.updateLabelVisibility value
    return
