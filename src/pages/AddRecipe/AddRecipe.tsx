import React, {useState} from 'react';
import './AddRecipe.scss'

const AddRecipe = () => {

    const [valueInp, setValueInp ]  = useState<string>()

    console.log(valueInp)
    return (
        <div>
            Добавить фото
            <input
            type='file'
            value={valueInp}
            onChange={(e) => setValueInp(e.target.value)}
        />
            {
                valueInp
                    ? <img src={''} alt=""/>
                    : <div>no</div>
            }
        </div>
    );
};

export default AddRecipe;