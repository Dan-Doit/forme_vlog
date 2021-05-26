import React, { useState } from 'react'

const InputText = () => {
    const [value, setValue] = useState(null)

    const handleChange = (e) => {
      setValue(e.currentTarget.value)
    }

    console.log(value)

    return <input type='text' onClick={handleChange} />
}