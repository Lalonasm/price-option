import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectsMarkData = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 75, "chemistry": 90 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 80, "chemistry": 85 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 92 },
        { "id": 4, "name": "David", "math": 65, "physics": 70, "chemistry": 75 },
        { "id": 5, "name": "Emma", "math": 70, "physics": 72, "chemistry": 78 },
        { "id": 6, "name": "Frank", "math": 88, "physics": 85, "chemistry": 90 },
        { "id": 7, "name": "Grace", "math": 95, "physics": 92, "chemistry": 96 },
        { "id": 8, "name": "Henry", "math": 80, "physics": 78, "chemistry": 82 },
        { "id": 9, "name": "Ivy", "math": 73, "physics": 68, "chemistry": 75 },
        { "id": 10, "name": "Jack", "math": 87, "physics": 82, "chemistry": 88 }
    ]
    return (
        <div>
            <LChart width={800} height={400} data={subjectsMarkData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>

                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;