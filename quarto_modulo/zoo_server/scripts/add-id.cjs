// HO DOVUTO RINOMIARE IL FILE DA .js IN .cjs PER FARLO FUNZIONARE 
// HO DOVUTO RINOMIARE IL FILE DA .js IN .cjs PER FARLO FUNZIONARE 
// HO DOVUTO RINOMIARE IL FILE DA .js IN .cjs PER FARLO FUNZIONARE 
// HO DOVUTO RINOMIARE IL FILE DA .js IN .cjs PER FARLO FUNZIONARE 
// HO DOVUTO RINOMIARE IL FILE DA .js IN .cjs PER FARLO FUNZIONARE 

let animali = require('../db/animali.json') 

let id = 1
animali = animali.map(animale => {
    animale.id = id
    id++
    return animale
})

require('fs').writeFileSync('../db/animali.json', JSON.stringify(animali, null, '  '))