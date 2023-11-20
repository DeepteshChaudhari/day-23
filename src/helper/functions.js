const shorten = title => {
    const splitTitle = title.split(" ")
    const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
    return newTitle;
}

const isInCart = (item , id) => {
    const result = !!item.selectedItem.find(e => e.id === id);
    return result;
}

const quantityCount = (state , id) => {
    const index = state.selectedItem.findIndex(i => i.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItem[index].quantity;
    }
} 

export { shorten , isInCart , quantityCount}