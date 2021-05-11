const intervalId = setInterval(() => {
  if (cfg && cfg.item_definition && cfg.item_definition.item) {
    const item = cfg.item_definition.item.get('305044')
    item.name_chs = 'League Tablecloth Mod'
    item.desc_chs = 'Almost the same as putting the logos on stream using OBS, except way gnarly.'
    clearInterval(intervalId)
  }
}, 2000)