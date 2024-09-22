import './index.css'

const IndiaStats = props => {
  const {covidData, statesList} = props

  let activeCases = 0
  let recoveredCases = 0
  let deceasedCases = 0
  let confirmedCases = 0

  statesList.forEach(eachState => {
    if (covidData[eachState.state_code]) {
      const {total} = covidData[eachState.state_code]
      confirmedCases += total.confirmed ? total.confirmed : 0
      recoveredCases += total.recovered ? total.recovered : 0
      deceasedCases += total.deceased ? total.deceased : 0
    }
  })

  activeCases += confirmedCases - (recoveredCases + deceasedCases)

  return (
    <div className="stats-container">
      <div className="confirmed card" testid="countryWideConfirmedCases">
        <p className="stats-type confirmed-cases">Confirmed</p>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-asia-india-54419959&psig=AOvVaw34JLjAqqIvtedDA77rbQbP&ust=1726906980304000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiszJ76i9GIAxUYS2wGHaZuBQAQjRx6BAgAEBg"
          alt="country wide confirmed cases pic"
        />
        <p className="confirmed-cases cases">{confirmedCases}</p>
      </div>
      <div className="active card">
        <p className="stats-type active-cases" testid="countryWideActiveCases">
          Active
        </p>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcovid19tracker.in%2F&psig=AOvVaw0UPQoltCtv03oHdFd-J5qa&ust=1726907054334000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDvj7uM0YgDFQAAAAAdAAAAABAK"
          alt="country wide active cases pic"
        />
        <p className="active-cases cases">{activeCases}</p>
      </div>
      <div className="recovered card">
        <p
          className="stats-type recovered-cases"
          testid="countryWideRecoveredCases"
        >
          Recovered
        </p>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpib.gov.in%2FPressReleasePage.aspx%3FPRID%3D1692852&psig=AOvVaw3I1g1AZGsEzsrhyGgeVzZX&ust=1726907192414000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi6xuCM0YgDFQAAAAAdAAAAABAE"
          alt="country wide recovered cases pic"
        />
        <p className="recovered-cases cases">{recoveredCases}</p>
      </div>
      <div className="deceased card">
        <p
          className="stats-type deceased-cases"
          testid="countryWideDeceasedCases"
        >
          Deceased
        </p>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpib.gov.in%2FPressReleasePage.aspx%3FPRID%3D1696087&psig=AOvVaw3zcGcWTuk4KPDFvgQT9ena&ust=1726907254759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCP8YGN0YgDFQAAAAAdAAAAABAE"
          alt="country wide deceased cases pic"
        />
        <p className="deceased-cases cases">{deceasedCases}</p>
      </div>
    </div>
  )
}

export default IndiaStats
