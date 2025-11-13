import React from 'react';

const StudentTable = () => {
    // Mảng dữ liệu sinh viên
    const students = [
        { id: 1, name: 'Nguyễn Văn A', age: 20, major: 'CNTT' },
        { id: 2, name: 'Trần Thị B', age: 21, major: 'Kinh tế' },
        { id: 3, name: 'Phạm Văn C', age: 19, major: 'Thiết kế' },
    ];

    // JSX hiển thị bảng
    return (
        <div>
            <h2>Bảng thông tin sinh viên</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Tuổi</th>
                        <th>Ngành học</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.major}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
