import React, { useContext } from 'react';
import {userContext} from './context.js';
import {Menu} from ".";

export default function Contact() {
  let user = useContext(userContext);

    return (
        <>
        
            <Menu/>
            
            <div className='p-2'>
            
                <h3>Ubon Ratchathani University</h3>
                <div>
                    <span>85 Sathonlamark Road
                                                                Warin Chamrap District
                                                                Ubon Ratchathani
                                                                Thailand 34190</span>
                
                </div>
                <div className='mt-3'><b>By {user}</b></div>
            </div>

        </>
    )
}
