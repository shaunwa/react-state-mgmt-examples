import { useRecoilState } from 'recoil';
import axios from 'axios';
import { serverCounterState } from './serverCounterState';

export const useServerCount = () => {
    const [numberOfClicks, setNumberOfClicksBase] = useRecoilState(serverCounterState);
    
    const increment = async (incrementBy) => {
        const response = await axios.put('/count/increment', { amount: incrementBy });
        const { count } = response.data;
        setNumberOfClicksBase(count);
    }

    const reset = async () => {
        const response = await axios.put('/count/reset');
        const { count } = response.data;
        setNumberOfClicksBase(count);
    }

    return [numberOfClicks, increment, reset];
}