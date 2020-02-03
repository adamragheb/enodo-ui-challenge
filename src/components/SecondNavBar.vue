<template>
  <div class="navbar sec-navbar">
    <div class="prop-title">
      Property Analysis
    </div>
    <div class="property-location">
      {{ property.name ? property.name : property.address }}
    </div>
    <button class="share-btn" type="button">Share</button>
    <button class="export-btn" type="button">Export</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SecondNavBar extends Vue {
  @Prop()
  private property!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$white: #ffffff;
$lime-green: #79ac48;

@mixin buttons-theme($light-theme: true) {
  @if $light-theme {
    background-color: $white;
    color: $lime-green;
  } @else {
    background-color: $lime-green;
    color: $white;
  }
}
//this is not the right way of placing this navbar but because it is nested outside NavBar.vew I used this way.
.sec-navbar {
  position: absolute;
  top: 70px;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap;
  align-items: center;
  height: 65px;
  padding: 0 2.3rem;
  & > div {
    margin-right: 0.5rem;
  }
  .property-location {
    font-style: italic;
  }
  button {
    padding: 0.35rem 0.75rem;
    border: 1px solid $lime-green;
    border-radius: 1px;
    font-weight: 700;
    font-size: 10pt;
    min-width: 50px;
    outline: none;
    transition: all ease 250ms;
    margin-left: 0.5rem;
    &.share-btn {
      @include buttons-theme($light-theme: true);
      &:hover {
        @include buttons-theme($light-theme: false);
      }
    }
    &.export-btn {
      @include buttons-theme($light-theme: false);
      &:hover {
        @include buttons-theme($light-theme: true);
      }
    }
  }
}
</style>
