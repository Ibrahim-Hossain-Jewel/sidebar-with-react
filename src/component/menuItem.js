import React,{useState} from 'react';

export default function MenuItem(props) {
    const { name, subMenus, iconClassName, onClick } = props;
    const [expand, setexpand] = useState(false);
    return (
    <li onClick={onClick}>
        <a className='menu-item' onClick={ ()=> setexpand(!expand) }>
            <div className = 'menu-icon'>
                <i className = {iconClassName}></i>
            </div>
            <span>{name}</span>
        </a>
        {
            subMenus && subMenus.length > 0 ? (
            <ul className= {`sub-menu ${expand ? 'expand': null}`}>
                {
                    subMenus.map((menu, index)=> (
                        <li key={index}>
                            <a>{menu.name}</a>
                        </li>
                        )
                )
                }
            </ul>) : null

        }
        
    </li>
  )
}
