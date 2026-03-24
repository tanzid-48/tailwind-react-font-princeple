import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {
    const markDataRes = use(marksPromise);
    const students = markDataRes.data.students;

    const chartData = students.map(student => ({
    name: student.name,
    Physics: student.phy,
    Chemistry: student.chem,
    Math: student.math
  }));
   
    return (

         <div>

            <BarChart width={800} height={500} data={chartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="Math" fill='yellow'></Bar>
                <Bar dataKey="Physics" fill='red'></Bar>
                <Bar dataKey="Chemistry" fill='green'></Bar>

            </BarChart>

            {/* data show
      <h2 className="text-3xl mb-5">Student Marks</h2>

      {students.map(student => {
        const total = student.phy + student.chem + student.math;
        const avg = total/3; */}

        {/* return (
            data show
          <div key={student.id} className="border p-3 m-2 rounded">
            <h3 className="text-xl">{student.name}</h3>
            <p>Physics: {student.phy}</p>
            <p>Chemistry: {student.chem}</p>
            <p>Math: {student.math}</p>
            <p><strong>Total: {total}</strong></p>
            <p><strong>Average: {avg.toFixed(2)}</strong></p>
          </div>
        );
      })} */}
     </div>
       


    );
};

export default MarkChart;