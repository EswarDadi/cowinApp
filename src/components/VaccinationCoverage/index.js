import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccineCoverage = props => {
  const {vaccinationCoverageDetails} = props
  return (
    <div>
      <h1>Vaccination Coverage</h1>
      <BarChart width={1000} height={300} data={vaccinationCoverageDetails}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccineCoverage
