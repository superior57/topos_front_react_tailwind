import {useRef} from 'react';
import _ from '@lodash';

function useDebounce(func, wait, options)
{
    return useRef(_.debounce(func, wait, options)).current;
}

export default useDebounce;
