import './index.css'

import {Component} from 'react'
import {Loader} from 'react-loader-spinner'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationCoverage from '../VaccinationCoverage'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    cowinData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCowinResults()
  }

  getCowinResults = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachVaccine => ({
          vaccineDate: eachVaccine.vaccine_date,
          dose1: eachVaccine.dose_1,
          dose2: eachVaccine.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age.map(each => ({
          count: each.count,
          gender: each.age,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(eachGender => ({
          count: eachGender.count,
          gender: eachGender.gender,
        })),
      }
      this.setState({
        cowinData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVaccinationData = () => {
    const {cowinData} = this.state

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
            alt="website logo"
            className="website-logo"
          />
          <h1 className="main-heading">Co-WIN</h1>
          <h1>CoWIN Vaccination in India</h1>
        </div>

        <VaccinationCoverage
          vaccinationCoverageDetails={cowinData.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccinationByGender={cowinData.vaccinationByGender}
        />
        <VaccinationByAge vaccinationByAge={cowinData.vaccinationByAge} />
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVaccinationData()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }
}
export default CowinDashboard
