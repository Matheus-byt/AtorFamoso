import React from 'react';
import { View } from 'react-native';

import Card from './Componentes/Card';
import Conteudo from './Componentes/Conteudo';
import BarraTitulo from './Componentes/BarraTitulo';

import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <BarraTitulo/>
      <Card/>
      <Conteudo/>
    </View>
  );
}
