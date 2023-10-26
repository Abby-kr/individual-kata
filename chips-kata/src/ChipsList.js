import React from 'react';

function ChipsList({chips,maxChips,maxTextLength}) {
    let excessLength = chips.length - maxChips 
    let chipsToDisplay = chips.slice(0,maxChips)
    
    return (
        <div>
            {chips.length === 0 ? <></> :
            <> 
            <ul>
            {
            chipsToDisplay.map((chip,index) => (
                <span key ={index} data-testid = {index}>
                    {chip.length <= maxTextLength
                    ? chip
                    : chip.label.slice(0, maxTextLength) + '…'}
                </span>
            ))}
            </ul>
            <aside data-testid="exceeding-text">{`${excessLength} more items`}</aside>
            </>}
        </div>
    );
}

export default ChipsList;