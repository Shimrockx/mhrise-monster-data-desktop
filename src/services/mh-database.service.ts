import { LargeMonster } from './../models/large-monster.model'

class MHDatabase {
  private largeMonstersName: string[] = [
    'Aknosom',
    'Almudron',
    'Anjanath',
    'Apex_Arzuros',
    'Apex_Diablos',
    'Apex_Mizutsune',
    'Apex_Rathalos',
    'Apex_Rathian',
    'Apex_Zinogre',
    'Arzuros',
    'Barioth',
    'Barroth',
    'Basarios',
    'Bazelgeuse',
    'Bishaten',
    'Chameleos',
    'Crimson_Glow_Valstrax',
    'Diablos',
    'Goss_Harag',
    'Great_Baggi',
    'Great_Izuchi',
    'Great_Wroggi',
    'Jyuratodus',
    'Khezu',
    'Kulu-Ya-Ku',
    'Kushala_Daora',
    'Lagombi',
    'Magnamalo',
    'Mizutsune',
    'Nargacuga',
    'Narwa_The_Allmother',
    'Pukei-Pukei',
    'Rajang',
    'Rakna-Kadaki',
    'Rathalos',
    'Rathian',
    'Royal_Ludroth',
    'Somnacanth',
    'Teostra',
    'Tetranadon',
    'Thunder_Serpent_Narwa',
    'Tigrex',
    'Toadversary',
    'Tobi-Kadachi',
    'Volvidon',
    'Wind_Serpent_Ibushi',
    'Zinogre',
  ]
  private largeMonsters: LargeMonster[] = []

  constructor() {
    this.constructLargeMonsters()
  }

  private constructLargeMonsters() {
    for (let i = 0; i < this.largeMonstersName.length; i++) {
      let largeMonster: LargeMonster = {
        id: i,
        name: this.largeMonstersName[i].replace(/\_/g, ' '),
        path_hzv: `https://raw.githubusercontent.com/RoboMechE/MHRise-Database/main/monster/${this.largeMonstersName[i]}_HZV.png`,
        zone_chart: `https://raw.githubusercontent.com/RoboMechE/MHRise-Database/main/monster/assets/zone_charts/${this.largeMonstersName[i]}.png`,
        icon: `https://raw.githubusercontent.com/RoboMechE/MHRise-Database/main/monster/assets/icons/${this.largeMonstersName[i]}_Icon.png`,
      }

      this.largeMonsters.push(largeMonster)
    }
  }

  public getLargeMonsters(): LargeMonster[] {
    return this.largeMonsters
  }

  public getLargeMonstersByName(name: string): LargeMonster[] {
    name = name.toLocaleLowerCase()

    let findedMonsters: LargeMonster[] = []
    for (let i = 0; i < this.largeMonsters.length; i++) {
      if (this.largeMonsters[i].name.toLocaleLowerCase().includes(name)) {
        findedMonsters.push(this.largeMonsters[i])
      }
    }

    return findedMonsters
  }
}

export default new MHDatabase()
