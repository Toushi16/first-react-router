import './index.scss';
import { useOutletContext } from 'react-router-dom';

export const Ingredient = () => {
    const { ingredients } = useOutletContext() ?? [];
    

    return (
        <div className='ingredients'>
            <ul>
                {
                    ingredients?.map((el, i) => (
                        <li className='ingredient' key={i}>
                            {el.name} - {el.value}{""}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Ingredient;