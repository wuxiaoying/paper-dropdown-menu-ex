Polymer
  disabled: false

  observe:
    '$.dropdown.opened': 'onClose'

  domReady: ->
    @selector = this.children[0].querySelector '.selector'
    @$.dropdown.appendChild this.children[0]
    @input = @$.decorator.input
    return

  updateLabelVisibility: (value) ->
    @$.decorator.updateLabelVisibility value
    return

  update: (value) ->
    @$.decorator.update value
    return

  keyHandler: (e, detail) ->
    return if not @selector

    @$.dropdown.opened = true
    switch detail.key
      when 'down'
        @selector.selectNext()
      when 'up'
        @selector.selectPrevious()

    e.stopPropagation()
    return

  onClose: (e, detail) ->
    if not detail
      @$.dropdown.focus()
    return
