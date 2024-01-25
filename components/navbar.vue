<template>
    <header id="header">
        <nav
            class="navbar navbar-expand-sm navbar-dark bg-themecolor fixed-top border border-navtail border-5 rounded-5 mt-5 mx-5 p-0">
            <div class="container p-0">
                <img id="nav-img" class="navbar-brand d-block" src="@/assets/images/logos/logo.png" cover height="70"
                    alt="logo" />
                <a href="#header" class="navbar-brand fs-2">REVELSOFT</a>
                <button class="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div id="navbar1" class="collapse navbar-collapse fs-5">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item px-1">
                            <a href="#header" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#service" class="nav-link">Service</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#skill" class="nav-link">Skill</a>
                        </li>
                        <li class="nav-item px-1">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item border border-navtail border-3 rounded-5">
                            <a href="#footer" class="nav-link">Contect Us</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
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
.nav-link {
    border-radius: 20px;
    transition: all 2s ease;
}

.nav-link:hover {
    background-color: #25AAE2;
}
</style>