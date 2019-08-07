import wizardList from '~/assets/data/wizardList.json'

export default class WizardListService {
  _generateWizMap() {
    const wizMap = {}
    wizardList.forEach(wiz => {
      if (!wizMap[wiz.owner]) {
        wizMap[wiz.owner] = {
          amount: 1,
          totalStrength: this._normalizePower(wiz.power),
          wizards: [wiz]
        }
      } else {
        wizMap[wiz.owner].amount++
        wizMap[wiz.owner].totalStrength += this._normalizePower(wiz.power)
        wizMap[wiz.owner].wizards.push(wiz)
      }
    })
    return wizMap
  }

  _generatePowerRanking(wizMap) {
    const powerRanking = []
    for (const account in wizMap) {
      powerRanking.push({
        account: account,
        amount: wizMap[account].amount,
        totalStrength: wizMap[account].totalStrength,
        wizards: wizMap[account].wizards
      })
    }
    return powerRanking.sort((x, z) => z.totalStrength - x.totalStrength)
  }

  _normalizePower(rawPowerString) {
    return Math.floor(Number(rawPowerString) / 1000000000000)
  }

  powerRanking() {
    const wizMap = this._generateWizMap()
    return this._generatePowerRanking(wizMap)
  }

  getWizard(tokenId) {
    const wizard =
      wizardList.find(wizard => wizard.tokenId === Number(tokenId)) || {}
    return {
      affinity: wizard.affinity || 'none',
      owner: wizard.owner || 'none',
      power: this._normalizePower(wizard.power) || 0,
      tokenId: wizard.tokenId || 0
    }
  }

  getPlayer(playerId) {
    const wizMap = this._generateWizMap()
    return wizMap[playerId]
  }
}
