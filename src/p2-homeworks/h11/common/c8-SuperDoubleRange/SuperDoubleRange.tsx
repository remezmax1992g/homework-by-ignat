import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max
    }
) => {
    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <Box sx={{width: 300}} style={{margin: "20px"}}>
            <Slider value={value}
                    onChange={onChangeCallback}
                    marks={[{value: min, label: `${min}`},{value: max, label: `${max}`}]}
                    />

        </Box>
    )
}

export default SuperDoubleRange
