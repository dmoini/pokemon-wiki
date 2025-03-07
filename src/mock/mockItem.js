// https://pokeapi.co/api/v2/item/poke-ball
const MOCK_ITEM = {
  attributes: [
    { name: "holdable", url: "https://pokeapi.co/api/v2/item-attribute/5/" },
    {
      name: "usable-in-battle",
      url: "https://pokeapi.co/api/v2/item-attribute/4/",
    },
    { name: "consumable", url: "https://pokeapi.co/api/v2/item-attribute/2/" },
    { name: "countable", url: "https://pokeapi.co/api/v2/item-attribute/1/" },
  ],
  baby_trigger_for: null,
  category: {
    name: "standard-balls",
    url: "https://pokeapi.co/api/v2/item-category/34/",
  },
  cost: 200,
  effect_entries: [
    {
      effect:
        "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      short_effect: "Tries to catch a wild Pokémon.",
    },
  ],
  flavor_text_entries: [
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      text: "用于投向野生宝可梦\n并将其捕捉的球。\n它是胶囊样式的。",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      text:
        "野生の　ポケモンに　投げて\n捕まえるための　ボール。\nカプセル式に　なっている。",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon. It’s thrown like\na ball at a Pokémon, comfortably encapsulating\nits target.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      text:
        "Strumento dotato di capsula usato per catturare\nPokémon selvatici. Si lancia contro il bersaglio\ncome una palla.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      text:
        "Dispositivo con diseño capsular que atrapa\nPokémon salvajes. Se lanza como una bola\ncontra el blanco.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      text:
        "Damit fängst du wilde Pokémon. Du wirfst ihn wie\neinen normalen Ball. Das Design ähnelt dem einer\nKapsel.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      text:
        "Un objet semblable à une capsule, qui capture\nles Pokémon sauvages. Il suffit pour cela de le\njeter comme une balle.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      text: "用於投向野生寶可夢\n並將其捕捉的球。\n它是膠囊樣式的。",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      text: "야생 포켓몬에게 던져서\n잡기 위한 볼.\n캡슐식으로 되어 있다.",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      text:
        "やせいの　ポケモンに　なげて\nつかまえる　ための　ボール。\nカプセルしきに　なっている。",
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      text: "用于投向野生宝可梦\n并将其捕捉的球。\n它是胶囊样式的。",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      text:
        "野生の　ポケモンに　投げて\n捕まえるための　ボール。\nカプセル式に　なっている。",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon. It’s thrown like\na ball at a Pokémon, comfortably encapsulating\nits target.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      text:
        "Strumento dotato di capsula usato per catturare\nPokémon selvatici. Si lancia contro il bersaglio\ncome una palla.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      text:
        "Dispositivo con diseño capsular que atrapa\nPokémon salvajes. Se lanza como una bola\ncontra el blanco.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      text:
        "Damit fängst du wilde Pokémon. Du wirfst ihn wie\neinen normalen Ball. Das Design ähnelt dem einer\nKapsel.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      text:
        "Un objet semblable à une capsule, qui capture\nles Pokémon sauvages. Il suffit pour cela de le\njeter comme une balle.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      text: "用於投向野生寶可夢\n並將其捕捉的球。\n它是膠囊樣式的。",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      text: "야생 포켓몬에게 던져서\n잡기 위한 볼.\n캡슐식으로 되어 있다.",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      text:
        "やせいの　ポケモンに　なげて\nつかまえる　ための　ボール。\nカプセルしきに　なっている。",
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      text:
        "野生の　ポケモンに　投げて\n捕まえるための　ボール。\nカプセル式に　なっている。",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt’s thrown like a ball at a Pokémon,\ncomfortably encapsulating its target.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      text:
        "Strumento dotato di capsula usato per catturare\nPokémon selvatici. Si lancia contro il bersaglio\ncome una palla.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      text:
        "Dispositivo con diseño capsular que atrapa\nPokémon salvajes. Se lanza como una bola\ncontra el blanco.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      text:
        "Damit fängst du wilde Pokémon. Du wirfst ihn wie\neinen normalen Ball. Das Design ähnelt dem einer\nKapsel.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      text:
        "Un objet semblable à une capsule, qui capture\nles Pokémon sauvages. Il suffit pour cela de le\njeter comme une balle.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      text: "야생 포켓몬에게 던져서\n잡기 위한 볼.\n캡슐식으로 되어 있다.",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      text:
        "やせいの　ポケモンに　なげて\nつかまえる　ための　ボール。\nカプセルしきに　なっている。",
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt is thrown like a ball at the target.\nIt is designed as a capsule system.",
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt is thrown like a ball at the target.\nIt is designed as a capsule system.",
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      text:
        "Un objet pareil à une capsule, qui\ncapture les Pokémon sauvages. Il suffit\npour cela de le jeter comme une balle.",
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt is thrown like a ball at the target.\nIt is designed as a capsule system.",
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt is thrown like a ball at the target.\nIt is designed as a capsule system.",
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A device for catching wild Pokémon.\nIt is thrown like a ball at the target.\nIt is designed as a capsule system.",
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text:
        "A BALL thrown to catch a wild\nPOKéMON. It is designed in a\ncapsule style.",
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text: "A tool used for\ncatching wild\nPOKéMON.",
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/",
      },
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      text: "A tool used for\ncatching wild\nPOKéMON.",
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/",
      },
    },
  ],
  fling_effect: null,
  fling_power: null,
  game_indices: [
    {
      game_index: 4,
      generation: {
        name: "generation-vii",
        url: "https://pokeapi.co/api/v2/generation/7/",
      },
    },
    {
      game_index: 4,
      generation: {
        name: "generation-vi",
        url: "https://pokeapi.co/api/v2/generation/6/",
      },
    },
    {
      game_index: 4,
      generation: {
        name: "generation-v",
        url: "https://pokeapi.co/api/v2/generation/5/",
      },
    },
    {
      game_index: 4,
      generation: {
        name: "generation-iv",
        url: "https://pokeapi.co/api/v2/generation/4/",
      },
    },
    {
      game_index: 4,
      generation: {
        name: "generation-iii",
        url: "https://pokeapi.co/api/v2/generation/3/",
      },
    },
  ],
  held_by_pokemon: [],
  id: 4,
  machines: [],
  name: "poke-ball",
  names: [
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      name: "精灵球",
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      name: "モンスターボール",
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Poké Ball",
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      name: "Poké Ball",
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      name: "Poké Ball",
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      name: "Pokéball",
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      name: "Poké Ball",
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      name: "精靈球",
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      name: "몬스터볼",
    },
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "モンスターボール",
    },
  ],
  sprites: {
    default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
  },
};

module.exports = { MOCK_ITEM };
