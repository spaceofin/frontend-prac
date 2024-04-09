import { useState } from 'react';
import { AddItem } from 'pages/AddItem';
import { ToggleButton } from 'components/ToggleButton';

export const InputModal = () => {
    const [addButtonOn, setAddButtonOn] = useState(false);

    return (
        <>
            {addButtonOn && <AddItem />}
            <ToggleButton
                on={addButtonOn}
                onClick={() => setAddButtonOn(!addButtonOn)}
            />
        </>
    );
};
