import './index.scss';
import { useOutletContext } from 'react-router-dom';

export const Instruction = () => {
    const {instructions, thumbnailSrc} = useOutletContext() ?? [];

    return (
        <div className='instruction'>
            <img className='instruction-thumb' src={thumbnailSrc} />
            <p className='instruction-instr'>
                {instructions}
            </p>
        </div>
    )
}

export default Instruction;