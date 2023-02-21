// import {contact} from './modules/contact.js';

export const navigator = () => {
let pev = document.querySelectorAll(".window");
let btx = document.querySelectorAll(".switch")

                    const palNav = (nual) => {
                        pev.forEach((slide) => {
                            slide.classList.remove('current-window');

                            btx.forEach((btn)=>{
                                btn.classList.remove('active');
                            });
                        });

                        pev[nual].classList.add('current-window');
                        btx[nual].classList.add('active');
                    }
                    btx.forEach((btn, i) => {
                        btn.addEventListener("click", () => {
                            palNav(i);
                        });
                    });
                };
