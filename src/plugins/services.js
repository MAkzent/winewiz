import WizardListService from '~/services/WizardListService'

export default ({ app }, inject) => {
  const wizardListService = new WizardListService(app.$axios)

  inject('wizardListService', wizardListService)
}
