import React,{useState} from 'react';

export default function MenuItem(props) {
    const {name,subMenus} = props;
    const [expand, setexpand] = useState(false);
    return (
    <li>
        <a className='menu-item' onClick={ ()=> setexpand(!expand) }>
            <div className='menu-icon'>
                <i className="bi bi-newspaper"></i>
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
