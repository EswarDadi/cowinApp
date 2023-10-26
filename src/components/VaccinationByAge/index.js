import {Component} from 'react'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

class VaccinationByAge extends Component {
  render() {
    const {vaccinationByAge} = this.props
    return (
      <div>
        <h1>Vaccination by age</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill=" #2d87bb" />
              <Cell name="44-60" fill=" #a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default VaccinationByAge
