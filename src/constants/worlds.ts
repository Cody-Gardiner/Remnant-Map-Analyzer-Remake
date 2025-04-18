export const MainLocations = {
  CityOverworldZone1: 'Fairview',
  CityOverworldZone2: 'Westcourt',
  WastelandOverworldZone1: 'TheEasternWind',
  WastelandOverworldZone2: 'TheScouringWaste',
  JungleOverworldZone1: 'TheVerdantStrand',
  JungleOverworldZone2: 'TheScalding Glade',
  SwampOverworldZone1: 'TheFetidGlade',
  SwampOverworldZone2: 'TheMistFen',
  SnowOverworldZone1: 'DrolniirWoods',
  SnowOverworldZone2: 'DeepfrostExpanse',
}

export const SubLocations = {
  //Earth
  RootWraith: 'TheHiddenSanctum',
  RootBrute: 'SunkenPassage',
  Brabus: 'CutthroatChannel',
  RootTumbleweed: 'TheTangledPass',
  Splitter: 'ResearchStationAlpha',
  RootEnt: 'TheChokingHollow',
  RootDragon: 'TheAshYard',
  HuntersHideout: 'HiddenGrotto',
  MadMerchant: 'Junktown',
  LastWill: "Sorrow'sField",
  RootShrine: 'TheGallows',
  LizAndLiz: 'TheWarren',
  RootCultist: 'MarrowPass',

  // Rhom
  SwarmMaster: 'TheIronRift',
  HoundMaster: 'TheBurrows',
  Sentinel: 'ShackledCanyon',
  Vyr: 'TheArdentTemple',
  WastelandGuardian: 'LoomOfTheBlackSun',
  TheHarrow: 'TheBunker',
  TheLostGantry: 'ConcourseOfTheSun',
  ArmorVault: 'VaultOfTheHeralds',
  TheCleanRoom: 'ThePurgeHall',

  // Corsus
  SlimeHulk: 'TheDrownedTrench',
  Tyrant: 'TheCapillary',
  FlickeringHorror: 'HallOfWhispers',
  BarbTerror: 'NeedleLair',
  QueensTemple: 'IskalTemple',
  SwampGuardian: 'TheGrotto',
  Wisp: 'CircletHatchery',
  FetidPool: 'FetidPools',
  BrainBug: 'StrangePass',
  Fatty: ' TheShack',

  // Yaesha
  KinCaller: 'TheHallOfJudgement',
  BlinkFiend: "Widow'sPass",
  BlinkThief: 'VerdantStrand',
  StormCaller: "Heretic'sNest",
  ImmolatorAndZephyr: 'WitheringVillage',
  Wolf: "Ravager'sHaunt",
  DoeShrine: "Widow'sVestry",
  WolfShrine: 'TempleOfTheRavager',
  TheRisen: "Ahanae'sLament",
  TotemFather: 'TheScaldingGlade',
  StuckMerchant: 'MerchantDungeon',

  //Reisum
  UrikkiBlademasters: 'ValenhagMines',
  ShieldWarden: "Exiles'sTrench",
  BlizzardMage: 'WutheringKeep',
  TheJackal: 'WildReach',
  WarningTotems: "Magir'sDirge",
  ShamanFlames: 'GraveOfTheElders',
  RatRider: 'CrimsonHold',
  FrozenLords: "Judgement'sSpear",
  IceSkimmer: 'TheFrieranSea',
  CreepersPeeper: "Watcher'sHollow",
} as const

export const Campaign = {
  Ward13: '/Game/Campaign_Main/Quest_Campaign_Ward13.Quest_Campaign_Ward13',
  City: '/Game/Campaign_Main/Quest_Campaign_City.Quest_Campaign_City',
  Subject2923: {
    WardPrime:
      '/Game/Campaign_Clementine/Quests/WardPrime/Quest_WardPrime_Template.Quest_WardPrime_Template',
    Overworld:
      '/Game/World_Rural/Templates/Template_Rural_Overworld_02.Template_Rural_Overworld_02',
  },
} as const

export const Mode = {
  Campaign: {
    tag: '#main',
    name: 'Main',
  },
  Adventure: {
    tag: '#adventure',
    name: 'Adventure',
  },
} as const
