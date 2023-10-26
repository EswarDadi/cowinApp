import {Component} from 'react'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

class VaccinationByGender extends Component {
  render() {
    const {vaccinationByGender} = this.props
    return (
      <div>
        <h1>Vaccination by gender</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByGender}
              startAngle={180}
              endAngle={0}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="female" fill="#5a8dee" />
              <Cell name="others" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="middle"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default VaccinationByGender
