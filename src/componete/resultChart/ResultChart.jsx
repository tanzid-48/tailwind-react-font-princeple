import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultDAta = [
  { id: 1, name: "Rahim ", Physics: 78, Chemistry: 82, Math: 90 },
  { id: 2, name: "Karim", Physics: 65, Chemistry: 70, Math: 68 },
  { id: 3, name: "Ayesha", Physics: 88, Chemistry: 91, Math: 95 },
  { id: 4, name: "Nusrat ", Physics: 72, Chemistry: 75, Math: 80 },
  { id: 5, name: "Hasan ", Physics: 60, Chemistry: 64, Math: 58 },
  { id: 6, name: "Sadia", Physics: 85, Chemistry: 87, Math: 92 },
  { id: 7, name: "Imran", Physics: 70, Chemistry: 68, Math: 72 },
  { id: 8, name: "Mitu", Physics: 90, Chemistry: 93, Math: 96 },
  { id: 9, name: "Tanvir", Physics: 55, Chemistry: 60, Math: 62 },
  { id: 10, name: "Lima", Physics: 80, Chemistry: 78, Math: 85 }
];




const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultDAta}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="Math"></Line>
                <Line dataKey={'Chemistry'} stroke='green'></Line>
                <Line dataKey={'Physics'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;