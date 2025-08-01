import Drawer from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Bookier+',
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Configuración',
          title: 'Configuración',
        }}
      />
    </Drawer>
  );
}
