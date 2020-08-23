
  <template>
    <nav>
      <SettingNavItem />
    </nav>
  </template>

  <script>
    import SettingNavItem from './SettingNavItem'
    export default {
      name: 'SettingNav',
      components: {SettingNavItem}
    }
  </script>

  <style scoped>
    nav {
      border-bottom: 1px solid black;
    }

  </style>

