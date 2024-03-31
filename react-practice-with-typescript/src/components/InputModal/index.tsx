import { useState } from 'react';
import { AddItem } from 'components/AddItem';
import { ToggleButton } from 'components/ToggleButton';

// interface Props {
//     readonly onAdd: (item: string) => void;
// }

// export const InputModal = (props: Props) => {
export const InputModal = () => {
    const [addButtonOn, setAddButtonOn] = useState(false);

    // const onAdd = (item: string) => {
    //     props.onAdd(item);
    // };

    return (
        <>
            {/* {addButtonOn && <AddItem onAdd={onAdd} />} */}
            {addButtonOn && <AddItem />}
            <ToggleButton
                on={addButtonOn}
                onClick={() => setAddButtonOn(!addButtonOn)}
            />
        </>
    );
};
