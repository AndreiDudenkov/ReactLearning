import React from 'react';

type NewComponentPropsType = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string,
    model: string
}
export const NewComponent = (props: NewComponentPropsType) => {

    return (<table>
            <th>
                <tr><>
                    {props.cars.map((el) => {
                        return (<>
                                {el.manufacturer} <br/>
                            </>
                        )
                    })}
                </>
                </tr>
            </th>
            <th>
                <tr>
                    <>
                        {props.cars.map((el) => {
                            return (<>
                                    {el.model} <br/>
                                </>
                            )
                        })}
                    </>
                </tr>
            </th>
        </table>
    )
}