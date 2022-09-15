import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <SuperRange value={value1}
                            onChangeRange={(value) => setValue1(value)}
                />
            </div>

            <div>
                <SuperDoubleRange value={[value1, value2]}
                                  min={value1}
                                  max={value2}
                                  onChangeRange={([value1, value2]) => {
                                      setValue1(value1)
                                      setValue2(value2)
                                  } }

                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
