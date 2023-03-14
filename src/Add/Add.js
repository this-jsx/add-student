import React, { useState } from "react";
import Btn from "../Btn/Btn";
import './Add.css'

const initialState = {
    name: '',
    faculcy: '',
    id: Math.floor(Math.random() * 100 + 1),
    partTime: false,
    sex: ''
}

export default function Add(props) {
    
    const [student, addStudent] = useState(initialState)

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        addStudent(student => ({
            ...student,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onCreate() // ДОБАВИТЬ В APP.JS
        addStudent(initialState)
    }

    return (
        <form className="add__student" onSubmit={handleSubmit}>
            <label className="add__student-label">Новый студент
            <input 
                name="name"
                type="text"
                value={student.name}
                onChange={handleChange}
            />
            </label>

            <label className="add__student-label">Факультет
            <input 
                name="faculcy"
                type="text"
                value={student.faculcy}
                onChange={handleChange}
            />
            </label>

            <label className="add__student-label">Форма обучения
            <input 
                name="partTime"
                type="checkbox"
                value={student.partTime}
                onChange={handleChange}
            />
            </label>

            <label className="add__student-label">Пол
            <input 
                name="sex"
                type="text"
                value={student.sex}
                onChange={handleChange}
            />
            </label>

            <Btn
                className='btn__add-student'
                disabled={student.name === '' || student.faculcy === '' || student.partTime === '' || student.sex === ''}
            >
                Добавить студента
            </Btn>

        </form>
    )

}