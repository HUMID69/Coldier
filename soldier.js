const soldier = {
    name: 'Alpha',
    hp: 10,
    weapon: {
        weaponName: 'ak47',
        cartridges: 0,
    },
    supplies: 1,
    fire() {
        this.weapon.cartridges--
        console.log('б1ов-б1ов')
        if (this.weapon.cartridges === 0) {
            console.log('Обойма пуста. Перезарядитесь.')
        }
    },
    recharge() {
      this.weapon.cartridges = 30
      this.supplies--
      console.log('перезарядка...')
      if (this.supplies === 0) {
        console.log('Не осталоссь боеприпасов.')
      }
    },
    hurt() {
      this.hp--
      if(this.hp === 0) {
        console.log('Ты проиграл')
      }
    },
}