<template>
  <div class="navbar property-navbar">
    <div>
      <a
        v-for="item in menuItems"
        :key="item.name"
        :class="item.active ? 'active' : ''"
        >{{ item.name }}</a
      >
    </div>
    <div>
      <a>Go To Platform</a>
    </div>
    <div>
      <a>{{ userInitials }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private userInitials!: string;

  @Prop()
  private menuItems!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  margin-bottom: 2.5rem;
  justify-content: flex-start;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #2c3e50;
  font-size: 1rem;
  & > div {
    margin-right: 2rem;
  }
}
</style>
