import React from 'react';
import { NavItem } from 'react-bootstrap';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';


const List = (items,removeItem,editItem)=>{
    
    return  (

        <div className="container">

            {items.map((item,id)=>{
                const title =item;
                return (
                    <ul className="list-group list-group-flush" key={id}>
                        <li className="list-group d-flex justify-content-between align-item-center">
                            {title}
                            <div style={{float:'right'}}>
                                <button type='button' className='edit-btn'onClick={()=>editItem(id)}>
                                <i class="fas fa-edit"></i>
                                </button>
                                <button type='button' className='delete-btn'onClick={()=>removeItem(id)}>
                                   <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </li>   

                    </ul>
                )
            })}

        </div>
    )
}
export default List;
