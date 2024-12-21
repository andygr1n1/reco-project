import { useAppDispatch, useAppSelector } from '@/store/useRootStore'
import {
    decrement,
    increment,
    incrementAmountFromInput,
    incrementAsync,
    incrementByAmount,
    incrementIfOdd,
    selectCount,
    selectIncrementAmount,
    selectStatus,
} from './store/counterSlice'

import styles from './Counter.module.css'

export const ReduxToolkit = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)
    const status = useAppSelector(selectStatus)
    const incrementAmount = useAppSelector(selectIncrementAmount)

    return (
        <div>
            <div className={styles['row']}>
                <button className={styles['button']} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    -
                </button>
                <span aria-label='Count' className={styles['value']}>
                    {count}
                </span>
                <button className={styles['button']} aria-label='Increment value' onClick={() => dispatch(increment())}>
                    +
                </button>
            </div>
            <div className={styles['row']}>
                <input
                    className={styles['textbox']}
                    aria-label='Set increment amount'
                    value={incrementAmount}
                    type='number'
                    onChange={(e) => dispatch(incrementAmountFromInput({ value: Number(e.target.value) }))}
                />
                <button className={styles['button']} onClick={() => dispatch(incrementByAmount(incrementAmount))}>
                    Add Amount
                </button>
            </div>
            <div className={styles['row']}>
                <button
                    className={styles['asyncButton']}
                    disabled={status !== 'idle'}
                    onClick={() => dispatch(incrementAsync({ amount: incrementAmount }))}
                >
                    Add Async
                </button>
                <button className={styles['oddButton']} onClick={() => dispatch(incrementIfOdd(incrementAmount))}>
                    Add If Odd
                </button>
            </div>
        </div>
    )
}
