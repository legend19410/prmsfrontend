import React from 'react'

function FormationForm() {
    return (
        <form>
            <div>
                <label>Name:</label>
                <input type='text'/>
            </div>

            <div>
                <label>Code:</label>
                <input type='text'/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FormationForm
