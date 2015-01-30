Polymer
  attached: ->
    @super()
    @input = @querySelector 'paper-dropdown-menu'
    @input.addEventListener 'core-select', (e) =>
      item = e.detail.item
      @input.value = item.label or item.getAttribute("label") or item.textContent
      @input.selectedItemLabel = @input.value
      @input.$.label.classList.add 'selectedItem' if @input.value
      return

    @dropdownLabel ?= @input.label
    @input.label = @label
    return

  tapAction: (e) ->
    return if @disabled
    @input?.label = @dropdownLabel
    return if @focused
    @input?.opened = true

    return

  transitionEndAction: ->
    @super()
    if @._labelVisible
      @input.label = @label
    return
