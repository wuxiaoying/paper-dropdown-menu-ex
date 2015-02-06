Polymer
  attached: ->
    @super()
    @input = @querySelector 'paper-dropdown-menu,paper-tags-menu'
    @input.addEventListener 'core-select', (e) =>
      item = e.detail.item
      @update item.label or item.getAttribute("label") or item.textContent
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

  update: (value) ->
    @input.value = value
    @input.selectedItemLabel = @input.value
    @input.$.label?.classList.add 'selectedItem' if @input.value
    return
