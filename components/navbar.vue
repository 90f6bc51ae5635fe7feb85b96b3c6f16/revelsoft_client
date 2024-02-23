<template>
    <header id="header">
        <nav
            class="navbar navbar-expand-lg navbar-dark bg-themecolor border border-navtail rounded-5 fixed-top mt-5 mx-5 p-0">
            <div class="container">
                <a href="#header"> <img id="nav-img" class="navbar-brand " src="@/assets/images/logos/logo.png" cover
                        height="70" alt="logo" /></a>
                <a href="#header" class="navbar-brand fs-2 d-block">
                    <div class="REVELSOFT">REVELSOFT</div>
                </a>
                <button class="navbar-toggler navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div id="navbar1" class="collapse navbar-collapse fs-5 ">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item px-1">
                            <a href="#header" class="nav-link rounded-xl px-3">Home</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#service" class="nav-link rounded-xl px-3">Service</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#skill" class="nav-link rounded-xl px-3">Skill</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#portfolio" class="nav-link rounded-xl px-3">Portfolio</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto ">
                        <li class=" nav-item border border-navtail rounded-xl">
                            <a href="#contact-us" class="nav-link rounded-xl px-5 py-1" style="white-space:nowrap;">Contact
                                Us</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link rounded-xl" data-bs-toggle="modal" data-bs-target="#myModal"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-containner {
    font-family: "Outfit", sans-serif;
}

.navbar-brand {
    align-self: center;
    padding: 0;
    margin: 0;
}

.nav-item {
    align-self: center;
}

.nav-link {
    transition: all 2s ease;
    color: #fff;
}

.nav-link:hover {
    background-color: #25AAE2;
}

@media only screen and (max-width: 992px) {
    .navbar-brand {
        padding: 0 !important;
    }

    .nav-containner {
        display: flex;
        flex-direction: column;
    }
}

@media only screen and (max-width: 420px) {
    .navbar-brand {
        height: 2em;
        margin: 0 auto !important;
    }

    .REVELSOFT {
        padding: 0.2em 0;
    }
}
</style>