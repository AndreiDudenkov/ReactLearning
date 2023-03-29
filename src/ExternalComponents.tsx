import React from 'react';

type NewComponentPropsType = {
    students: Array<StydentsType>
}
type StydentsType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentPropsType) => {
    return (<>
            {props.students.map((el) => {
                    return (
                        <li key={el.id}>{el.name}</li>
                    )
                }
            )}

        </>
    )
}