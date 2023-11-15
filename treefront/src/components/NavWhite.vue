<template>
    <div class="nav-container">
        <div class="title">
            TITLE
        </div>
        <div class="button-container">
                <RouterLink to="/board" class="nav-link">Board</RouterLink> 
                <RouterLink to="/login" class="nav-link">Login</RouterLink> 
                <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav-container{
    width: 55%;
    height: 12%;
    min-width: 600px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title{
    display: flex;
    align-items: center;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
}
.button-container{
    font-size: 17px;
    display: flex;
    gap: 20px; 
}
.nav-link {
  color: rgba(255, 192, 0);
  text-decoration: none; 
}
.nav-link:hover {
  text-decoration: underline;
}
</style>