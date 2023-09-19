import React from 'react'
import ImDbLogo from '../Assets/Images/imdbLogo.svg'
import ImDbProLogo from '../Assets/Images/ImdbPro.svg'
import { BsBookmarkPlus } from "react-icons/bs";

const Header = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand px-5" href="#"><img src={ImDbLogo} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form class="d-flex " role="search">
                            <ul class="navbar-nav me-5 mb-2 mb-lg-0 cst-form">
                                <li class="nav-item">
                                    <img src={ImDbProLogo} />
                                </li>
                                <li class="nav-item">
                                    <BsBookmarkPlus /> watchList
                                </li>
                                <li class="nav-item">
                                  SignIn
                                </li>
                                <li class="nav-item">
                                  En
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header