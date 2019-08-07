/* eslint-disable no-unused-vars */
import WizardListAbi from '~/assets/contracts/WizardListAbi.json'

const SUGGESTED_GAS_LIMIT = 50000
const START_WIZARD_ID = 1235
const CONTRACT_ADDRESS = '0x2F4Bdafb22bd92AA7b7552d270376dE8eDccbc1E'

export default class WizardList {
  constructor(web3) {
    this.web3 = web3
    this.contract = new this.web3.eth.Contract(WizardListAbi, CONTRACT_ADDRESS)
    this.fire = 0
    this.wind = 0
    this.water = 0
    this.neutral = 0
  }

  initWizards() {
    this.contract.methods
      .nextWizardId()
      .call()
      .then(x => {
        return this.web3.utils.hexToNumber(x)
      })
      .then(maxWizardId => {
        const promises = []

        for (let x = START_WIZARD_ID; x < maxWizardId; x++) {
          promises.push(
            this.contract.methods
              .getWizard(x)
              .call()
              .then(record => {
                return this.processBlockchainRecord(record, x)
              })
          )
        }
        return Promise.all(promises)
      })
    // .then(records => {
    //   records.forEach(async record => {
    //     console.log('logging')
    //     // await knex('wizard_list').insert({
    //     //   tokenId: record.tokenId,
    //     //   owner: record.owner,
    //     //   affinity: record.affinity,
    //     //   power: record.power
    //     // })
    //   })
    //   return records
    // })
  }

  processBlockchainRecord(record, tokenId) {
    return {
      tokenId: tokenId,
      owner: record.owner,
      affinity: this.translateAffinity(record.affinity),
      power: record.power.toString()
    }
  }

  translateAffinity(affinity) {
    if (affinity === 1) {
      this.neutral++
      return 'neutral'
    } else if (affinity === 2) {
      this.fire++
      return 'fire'
    } else if (affinity === 3) {
      this.wind++
      return 'wind'
    } else if (affinity === 4) {
      this.water++
      return 'water'
    }
  }
}
