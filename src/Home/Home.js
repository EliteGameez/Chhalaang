import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Home = () => {
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <p> GAMESCRAFT </p>     
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Home