export default function Filter({value, onChangeFilter}) {
    return (
        <div> Поиск
            <input type="text"
                value={value}
                onChange={e => onChangeFilter(e.target.value)}
                 //сюда прийдет event
            /> 
        </div>
    )
}

// пропы передаем из родителя