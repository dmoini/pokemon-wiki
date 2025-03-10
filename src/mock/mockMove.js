// https://pokeapi.co/api/v2/move/pound
const MOCK_MOVE = {
  accuracy: 100,
  contest_combos: {
    normal: {
      use_after: null,
      use_before: [
        { name: "double-slap", url: "https://pokeapi.co/api/v2/move/3/" },
        { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
        { name: "feint-attack", url: "https://pokeapi.co/api/v2/move/185/" },
      ],
    },
    super: { use_after: null, use_before: null },
  },
  contest_effect: { url: "https://pokeapi.co/api/v2/contest-effect/1/" },
  contest_type: {
    name: "tough",
    url: "https://pokeapi.co/api/v2/contest-type/5/",
  },
  damage_class: {
    name: "physical",
    url: "https://pokeapi.co/api/v2/move-damage-class/2/",
  },
  effect_chance: null,
  effect_changes: [],
  effect_entries: [
    {
      effect: "Inflicts regular damage.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      short_effect: "Inflicts regular damage with no additional effect.",
    },
  ],
  flavor_text_entries: [
    {
      flavor_text: "使用长长的尾巴或手等\n拍打对手进行攻击。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "長い　しっぽや　手などを　使って\n相手を　はたいて　攻撃する。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with a long tail, a\nforeleg, or the like.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "Colpisce il bersaglio con la coda o le zampe\nanteriori.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "Golpea con las patas o la cola.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "Ein Hieb mit den Vorderbeinen oder dem Schweif.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "Écrase l’ennemi avec les pattes avant ou la queue,\npar exemple.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "使用長長的尾巴或手等\n拍打對手進行攻擊。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "긴 꼬리나 손 등을 사용하여\n상대를 때려서 공격한다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "ながい　しっぽや　てなどを　つかって\nあいてを　はたいて　こうげきする。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text: "使用长长的尾巴或手等\n拍打对手进行攻击。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "長い　しっぽや　手などを　使って\n相手を　はたいて　攻撃する。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with a long tail, a\nforeleg, or the like.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text: "Colpisce il bersaglio con la coda o le zampe\nanteriori.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text: "Golpea con las patas o la cola.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text: "Ein Hieb mit den Vorderbeinen oder dem Schweif.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "Écrase l’ennemi avec les pattes avant ou la queue,\npar exemple.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text: "使用長長的尾巴或手等\n拍打對手進行攻擊。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text: "긴 꼬리나 손 등을 사용하여\n상대를 때려서 공격한다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "ながい　しっぽや　てなどを　つかって\nあいてを　はたいて　こうげきする。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "長い　しっぽや　手などを　使って\n相手を　はたいて　攻撃する。\n",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with\na long tail, a foreleg, or the like.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Colpisce il bersaglio con la coda o le zampe\nanteriori.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Golpea con las patas o la cola.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Ein Hieb mit den Vorderbeinen oder dem Schweif.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text:
        "Écrase l’ennemi avec les pattes avant ou la queue,\npar exemple.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "긴 꼬리나 손 등을 사용하여\n상대를 때려서 공격한다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text:
        "ながい　しっぽや　てなどを　つかって\nあいてを　はたいて　こうげきする。\n",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text:
        "長い　しっぽや　手などを　使って\n相手を　はたいて　攻撃する。\n",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with\na long tail, a foreleg, or the like.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Colpisce il bersaglio con la coda o le zampe\nanteriori.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Golpea con las patas o la cola.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Ein Hieb mit den Vorderbeinen oder dem Schweif.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text:
        "Écrase l’ennemi avec les pattes avant ou la queue,\npar exemple.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "긴 꼬리나 손 등을 사용하여\n상대를 때려서 공격한다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text:
        "ながい　しっぽや　てなどを　つかって\nあいてを　はたいて　こうげきする。\n",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with\na long tail or a foreleg, etc.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/",
      },
    },
    {
      flavor_text:
        "The target is physically pounded with\na long tail or a foreleg, etc.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      flavor_text: "Écrase l’ennemi avec les pattes\navant, la queue, etc.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      flavor_text:
        "The foe is physically\npounded with a long\ntail or a foreleg,\netc.\n",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/",
      },
    },
    {
      flavor_text:
        "The foe is physically\npounded with a long\ntail or a foreleg,\netc.\n",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/",
      },
    },
    {
      flavor_text:
        "The foe is physically\npounded with a long\ntail or a foreleg,\netc.\n",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/",
      },
    },
    {
      flavor_text:
        "A physical attack\ndelivered with a\nlong tail or a\nforeleg, etc.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/",
      },
    },
    {
      flavor_text: "Pounds the foe with\nforelegs or tail.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/",
      },
    },
    {
      flavor_text: "Pounds the foe with\nforelegs or tail.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/",
      },
    },
    {
      flavor_text: "Pounds with fore­\nlegs or tail.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/",
      },
    },
    {
      flavor_text: "Pounds with fore­\nlegs or tail.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/",
      },
    },
  ],
  generation: {
    name: "generation-i",
    url: "https://pokeapi.co/api/v2/generation/1/",
  },
  id: 1,
  machines: [],
  meta: {
    ailment: { name: "none", url: "https://pokeapi.co/api/v2/move-ailment/0/" },
    ailment_chance: 0,
    category: {
      name: "damage",
      url: "https://pokeapi.co/api/v2/move-category/0/",
    },
    crit_rate: 0,
    drain: 0,
    flinch_chance: 0,
    healing: 0,
    max_hits: null,
    max_turns: null,
    min_hits: null,
    min_turns: null,
    stat_chance: 0,
  },
  name: "pound",
  names: [
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      name: "拍击",
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      name: "はたく",
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Pound",
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      name: "Botta",
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      name: "Destructor",
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      name: "Pfund",
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      name: "Écras’Face",
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      name: "拍擊",
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      name: "막치기",
    },
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "はたく",
    },
  ],
  past_values: [],
  power: 40,
  pp: 35,
  priority: 0,
  stat_changes: [],
  super_contest_effect: {
    url: "https://pokeapi.co/api/v2/super-contest-effect/5/",
  },
  target: {
    name: "selected-pokemon",
    url: "https://pokeapi.co/api/v2/move-target/10/",
  },
  type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
};

module.exports = { MOCK_MOVE };
