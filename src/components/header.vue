<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#" class="logo-wrap">
        <img class="svg-logo" src="../assets/enodoSVG.svg" alt="enodo logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main-nav">
          <b-nav-item href="#"
            ><b-icon-search class="nav-icon"></b-icon-search> SEARCH</b-nav-item
          >
          <b-nav-item href="#"
            ><b-icon-tools class="nav-icon"></b-icon-tools> TOOLS</b-nav-item
          >
          <b-nav-item href="#"
            ><b-icon-house class="nav-icon"></b-icon-house> MY
            PROPERTIES</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto side-nav">
          <b-nav-item href="#"
            >Remaining Properties:
            <span class="remain-prop">2</span>
          </b-nav-item>

          <b-nav-item href="#" class="get-help"
            ><b-icon-question class="nav-icon"></b-icon-question
          ></b-nav-item>

          <b-nav-item-dropdown right no-caret class="user-avatar">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-img
                v-bind="mainProps"
                rounded="circle"
                src="https://picsum.photos/id/237/200/300"
                alt="User avatar"
              ></b-img>
              <span class="sr-only">User menu</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      mainProps: {
        blank: false,
        blankColor: "#777",
        width: 35,
        height: 35,
        class: "m1"
      }
    };
  }
};
</script>

<style scoped lang="scss">
header {
  padding: 0 1rem;
  background: #2c3e50;
  .logo-wrap {
    margin-right: 100px;
    .svg-logo {
      max-width: 50px;
    }
  }
  .main-nav {
    font-weight: 500;
    text-transform: uppercase;
    max-width: 550px;
    width: 100%;
    justify-content: space-between;
    .nav-icon {
      width: 27px;
      height: 27px;
      margin-right: 13px;
    }
    & .nav-link {
      color: rgba(255, 255, 255, 1);
      transition: color ease 0.125s;
      &::hover {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .side-nav {
    align-items: center;
    & li:first-child {
      border-right: 1px solid #fff;
      padding-right: 10px;
      margin-right: 25px;
    }
    .remain-prop {
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }
    .get-help {
      margin-right: 25px;
      & > a {
        color: rgba(255, 255, 255, 1);
        transition: color ease 0.125s;
        padding: 0.25em 0.5em;
        &::hover {
          color: rgba(255, 255, 255, 0.6);
        }
        .nav-icon {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>
