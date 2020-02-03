<template>
  <div class="prop-section">
    <div
      v-for="(value, x) in options"
      :key="x"
      :class="[
        value.selected ? 'selected' : '',
        [].concat(value.name.slice(0, 4))
      ]"
    >
      {{ value.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private options!: object[];
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue-gray: #2c3e50;
$lime-green: #79ac48;
$white: #ffffff;
@mixin pseudo(
  $display: inline-block,
  $margin: 10px,
  $width: 20px,
  $align: middle,
  $font: "FontAwesome",
  $color: $lime-green,
  $font-size: 12pt,
  $text-align: center
) {
  display: $display;
  margin-right: $margin;
  width: $width;
  vertical-align: $align;
  font-family: $font;
  color: $color;
  font-size: $font-size;
  text-align: $text-align;
}
.prop-section {
  margin-top: 1.5rem;
  & > div {
    font-size: 10pt;
    font-weight: 700;
    padding: 1rem;
  }
  .selected {
    background-color: $blue-gray;
    color: $white !important;
    &::before {
      color: $white !important;
    }
  }
  .Comp::before {
    @include pseudo;
    content: "\f02e";
  }
  .Oper::before {
    @include pseudo;
    content: "\f155";
  }
  .Rent::before {
    @include pseudo;
    content: "\f00a";
  }
  .Amen::before {
    @include pseudo;
    content: "\f005";
  }
  .Mark::before {
    @include pseudo;
    content: "\f041";
  }
}
</style>
