<template>
  <header id="header">
    <div :class="['header__btn', {'in': isMenuOpen}]" id="header-btn" v-on:click="toggleMenu">
      <div class="header__linebox">
        <span :class="['header__line', {'line1': isMenuOpen}]" id="line1"></span>
        <span :class="['header__line', {'line2': isMenuOpen}]" id="line2"></span>
        <span :class="['header__line', {'line3': isMenuOpen}]" id="line3"></span>
      </div>
    </div>
    <div :class="['header__menu', {'in': isMenuOpen}]" id="header-menu">
      <ul>
        <li><a id="header-list1" href="#about" v-smooth-scroll>About</a></li>
        <li><a id="header-list2" href="#works" v-on:click="toggleMenu" v-smooth-scroll>Works</a></li>
        <li><a id="header-list3" href="#members" v-on:click="toggleMenu" v-smooth-scroll>Members</a></li>
        <li><a id="header-list4" href="#contact" v-on:click="toggleMenu" v-smooth-scroll>Contact</a></li>
        <li><a id="header-list5" href="#recruit" v-on:click="toggleMenu" v-smooth-scroll>Recruit</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    data: () => {
      return {isMenuOpen: false}
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
      onScroll () {
        this.isMenuOpen = false;
      },
      toggleMenu () {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
</script>