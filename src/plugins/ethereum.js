import Web3 from 'web3'
import WizardList from '~/assets/scripts/WizardList'

export default async (ctx, inject) => {
  if (process.server) return

  if (window.ethereum) {
    inject('plainEthereum', window.ethereum)
  }

  if (window.web3) {
    inject('plainWeb3', window.web3)
  }

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    try {
      await window.ethereum.enable()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      return
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    return
  }

  const web3 = new Web3(window.web3.currentProvider)
  inject('web3', web3)

  const wizardList = new WizardList(web3)

  const ethereum = {
    wizardList
  }
  inject('ethereum', ethereum)
}
