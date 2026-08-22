import React, { useMemo, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Tab = 'Visão geral' | 'Indicadores' | 'Fontes';

const COLORS = {
  navy: '#073B4C', blue: '#087E8B', cyan: '#1CB5A3', sand: '#F5EFE3',
  white: '#FFFFFF', ink: '#173042', muted: '#667985', line: '#DDE7E8',
  coral: '#EF8354', green: '#2A9D6F', pale: '#F4F8F8', yellow: '#F4C95D',
};

const indicators = [
  { label: 'Empresas do turismo', value: '—', note: 'Aguardando base oficial', color: COLORS.blue },
  { label: 'Empregos formais', value: '—', note: 'RAIS/Caged', color: COLORS.cyan },
  { label: 'Arrecadação de ISS', value: '—', note: 'Integração Fazenda', color: COLORS.coral },
  { label: 'Prestadores Cadastur', value: '—', note: 'Atualização prevista', color: COLORS.green },
];

const axes = [
  ['Demanda turística', 'Fluxo, perfil, origem e satisfação'],
  ['Hospedagem', 'Ocupação, diária média e permanência'],
  ['Economia', 'ISS, empresas, empregos e renda'],
  ['Eventos', 'Público, gasto, impacto e avaliação'],
  ['Oferta turística', 'Cadastur, inventário e serviços'],
  ['Território', 'Bairros, praias e segunda residência'],
  ['Mobilidade', 'Acessos, circulação e sazonalidade'],
  ['Sustentabilidade', 'Ambiente, inclusão e governança'],
];

const sources = [
  { name: 'IBGE e Fundação Seade', detail: 'População, PIB, empresas e indicadores territoriais', status: 'Planejada' },
  { name: 'RAIS e Novo Caged', detail: 'Empregos, admissões, desligamentos e remuneração', status: 'Planejada' },
  { name: 'Cadastur e inventário', detail: 'Prestadores, equipamentos e serviços turísticos', status: 'Em preparação' },
  { name: 'Fazenda Municipal', detail: 'ISS agregado por atividades ligadas ao turismo', status: 'Em preparação' },
  { name: 'Trade e eventos', detail: 'Ocupação, demanda e pesquisas de impacto', status: 'Instrumentos' },
];

function Header() {
  return <View style={styles.header}>
    <View style={styles.brandMark}><Text style={styles.brandWave}>≈</Text></View>
    <View style={{ flex: 1 }}>
      <Text style={styles.kicker}>PREFEITURA DE BERTIOGA</Text>
      <Text style={styles.title}>Observatório do Turismo</Text>
    </View>
    <View style={styles.live}><View style={styles.liveDot}/><Text style={styles.liveText}>PILOTO</Text></View>
  </View>;
}

function Hero() {
  return <View style={styles.hero}>
    <Text style={styles.heroEyebrow}>ECONOMIA TURÍSTICA EM EVIDÊNCIA</Text>
    <Text style={styles.heroTitle}>Dados para transformar turismo em desenvolvimento.</Text>
    <Text style={styles.heroBody}>Informação confiável, rastreável e útil para decisões públicas e privadas em Bertioga.</Text>
    <View style={styles.period}><Text style={styles.periodLabel}>PERÍODO DE REFERÊNCIA</Text><Text style={styles.periodValue}>Linha de base • implantação</Text></View>
  </View>;
}

function Overview() {
  const bars = [42, 68, 54, 86, 73, 92];
  return <>
    <Hero />
    <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Painel executivo</Text><Text style={styles.sectionMeta}>Dados demonstrativos</Text></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsRow}>
      {indicators.map((item) => <View style={styles.metricCard} key={item.label}>
        <View style={[styles.metricAccent, { backgroundColor: item.color }]} />
        <Text style={styles.metricLabel}>{item.label}</Text>
        <Text style={styles.metricValue}>{item.value}</Text>
        <Text style={styles.metricNote}>{item.note}</Text>
      </View>)}
    </ScrollView>
    <View style={styles.panel}>
      <View style={styles.panelHead}><View><Text style={styles.panelTitle}>Sazonalidade turística</Text><Text style={styles.panelSub}>Estrutura preparada para série mensal</Text></View><Text style={styles.panelBadge}>MODELO</Text></View>
      <View style={styles.chart}>
        {bars.map((h, i) => <View key={i} style={styles.barColumn}><View style={[styles.bar, { height: h }]} /><Text style={styles.barLabel}>{['Jan','Mar','Mai','Jul','Set','Nov'][i]}</Text></View>)}
      </View>
      <Text style={styles.disclaimer}>Valores visuais ilustrativos. Nenhum número será publicado como oficial sem validação, fonte e data de atualização.</Text>
    </View>
    <View style={styles.callout}><Text style={styles.calloutNumber}>90</Text><View style={{flex: 1}}><Text style={styles.calloutTitle}>dias para a base institucional</Text><Text style={styles.calloutText}>Governança, plano de indicadores, fontes prioritárias e instrumentos de coleta testados.</Text></View></View>
  </>;
}

function Indicators() {
  return <>
    <View style={styles.pageIntro}><Text style={styles.pageTitle}>Oito eixos de inteligência</Text><Text style={styles.pageBody}>A arquitetura inicial organiza indicadores econômicos, territoriais e de gestão em uma visão única.</Text></View>
    <View style={styles.axesGrid}>{axes.map((axis, i) => <View style={styles.axisCard} key={axis[0]}><View style={styles.axisTop}><Text style={styles.axisNumber}>{String(i + 1).padStart(2, '0')}</Text><View style={[styles.axisDot, { backgroundColor: [COLORS.blue, COLORS.cyan, COLORS.coral, COLORS.green][i % 4] }]} /></View><Text style={styles.axisTitle}>{axis[0]}</Text><Text style={styles.axisText}>{axis[1]}</Text></View>)}</View>
    <View style={styles.goal}><Text style={styles.goalOverline}>META DA PRIMEIRA ENTREGA</Text><Text style={styles.goalValue}>20–25</Text><Text style={styles.goalText}>indicadores completos, com conceito, método, periodicidade, responsável e fonte.</Text></View>
  </>;
}

function Sources() {
  return <>
    <View style={styles.pageIntro}><Text style={styles.pageTitle}>Fontes e rastreabilidade</Text><Text style={styles.pageBody}>Cada indicador deverá exibir origem, metodologia, cobertura, periodicidade e última atualização.</Text></View>
    {sources.map((source) => <View style={styles.sourceCard} key={source.name}><View style={styles.sourceIcon}><Text style={styles.sourceIconText}>↗</Text></View><View style={{flex: 1}}><View style={styles.sourceLine}><Text style={styles.sourceName}>{source.name}</Text><Text style={styles.sourceStatus}>{source.status}</Text></View><Text style={styles.sourceDetail}>{source.detail}</Text></View></View>)}
    <View style={styles.privacy}><Text style={styles.privacyTitle}>Privacidade por desenho</Text><Text style={styles.privacyText}>Divulgação somente de informações agregadas, com controle de acesso às bases administrativas e aplicação dos princípios da LGPD.</Text></View>
  </>;
}

function AppContent() {
  const [tab, setTab] = useState<Tab>('Visão geral');
  const body = useMemo(() => tab === 'Visão geral' ? <Overview/> : tab === 'Indicadores' ? <Indicators/> : <Sources/>, [tab]);
  return <SafeAreaView style={styles.safe} edges={['top']}>
    <StatusBar barStyle="light-content" backgroundColor={COLORS.navy}/>
    <Header/>
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>{body}<Text style={styles.footer}>OMTB • Observatório Municipal do Turismo de Bertioga</Text></ScrollView>
    <View style={styles.tabs}>{(['Visão geral','Indicadores','Fontes'] as Tab[]).map((item, i) => <TouchableOpacity accessibilityRole="button" key={item} style={[styles.tab, tab === item && styles.tabActive]} onPress={() => setTab(item)}><Text style={[styles.tabIcon, tab === item && styles.tabTextActive]}>{['⌂','▦','◎'][i]}</Text><Text style={[styles.tabText, tab === item && styles.tabTextActive]}>{item}</Text></TouchableOpacity>)}</View>
  </SafeAreaView>;
}

export default function App() { return <SafeAreaProvider><AppContent/></SafeAreaProvider>; }

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:COLORS.navy},scroll:{flex:1,backgroundColor:COLORS.pale},content:{paddingBottom:28},
  header:{height:76,backgroundColor:COLORS.navy,flexDirection:'row',alignItems:'center',paddingHorizontal:18,gap:12},brandMark:{width:42,height:42,borderRadius:14,backgroundColor:COLORS.cyan,alignItems:'center',justifyContent:'center'},brandWave:{color:COLORS.white,fontSize:28,fontWeight:'800',marginTop:-5},kicker:{color:'#9FC6CA',fontSize:9,fontWeight:'800',letterSpacing:1.4},title:{color:COLORS.white,fontSize:18,fontWeight:'800',marginTop:2},live:{flexDirection:'row',alignItems:'center',gap:5,borderWidth:1,borderColor:'#386370',paddingHorizontal:8,paddingVertical:5,borderRadius:12},liveDot:{width:6,height:6,borderRadius:3,backgroundColor:COLORS.yellow},liveText:{fontSize:8,color:COLORS.white,fontWeight:'800',letterSpacing:.8},
  hero:{backgroundColor:COLORS.navy,paddingHorizontal:20,paddingTop:18,paddingBottom:28,borderBottomLeftRadius:28,borderBottomRightRadius:28},heroEyebrow:{color:COLORS.yellow,fontSize:10,fontWeight:'900',letterSpacing:1.4},heroTitle:{color:COLORS.white,fontSize:28,lineHeight:34,fontWeight:'900',marginTop:10,maxWidth:350},heroBody:{color:'#B8D1D3',fontSize:14,lineHeight:21,marginTop:10,maxWidth:360},period:{marginTop:20,backgroundColor:'#104B5D',borderRadius:14,padding:12,borderLeftWidth:3,borderLeftColor:COLORS.cyan},periodLabel:{fontSize:8,color:'#9FC6CA',fontWeight:'800',letterSpacing:1},periodValue:{fontSize:13,color:COLORS.white,fontWeight:'700',marginTop:3},
  sectionHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,marginTop:24,marginBottom:12},sectionTitle:{fontSize:20,fontWeight:'900',color:COLORS.ink},sectionMeta:{fontSize:10,color:COLORS.muted,fontWeight:'700'},cardsRow:{paddingHorizontal:16,gap:10},metricCard:{width:156,minHeight:134,backgroundColor:COLORS.white,borderRadius:18,padding:15,overflow:'hidden',borderWidth:1,borderColor:'#E8EEEE'},metricAccent:{position:'absolute',height:5,left:0,right:0,top:0},metricLabel:{fontSize:12,color:COLORS.muted,fontWeight:'700',marginTop:6},metricValue:{fontSize:30,color:COLORS.ink,fontWeight:'900',marginTop:8},metricNote:{fontSize:10,color:COLORS.muted,marginTop:5},
  panel:{margin:20,backgroundColor:COLORS.white,borderRadius:20,padding:18,borderWidth:1,borderColor:'#E8EEEE'},panelHead:{flexDirection:'row',justifyContent:'space-between'},panelTitle:{fontSize:16,fontWeight:'900',color:COLORS.ink},panelSub:{fontSize:10,color:COLORS.muted,marginTop:3},panelBadge:{fontSize:8,color:COLORS.blue,fontWeight:'900',backgroundColor:'#E7F4F5',paddingHorizontal:8,paddingVertical:5,borderRadius:9,alignSelf:'flex-start'},chart:{height:126,flexDirection:'row',alignItems:'flex-end',justifyContent:'space-around',marginTop:18,borderBottomWidth:1,borderBottomColor:COLORS.line},barColumn:{alignItems:'center',justifyContent:'flex-end',height:120},bar:{width:23,backgroundColor:COLORS.cyan,borderTopLeftRadius:6,borderTopRightRadius:6},barLabel:{fontSize:9,color:COLORS.muted,marginTop:5},disclaimer:{fontSize:9,lineHeight:14,color:COLORS.muted,marginTop:14},
  callout:{marginHorizontal:20,marginBottom:10,borderRadius:20,padding:18,backgroundColor:COLORS.sand,flexDirection:'row',alignItems:'center',gap:16},calloutNumber:{fontSize:44,fontWeight:'900',color:COLORS.coral},calloutTitle:{fontSize:15,fontWeight:'900',color:COLORS.ink},calloutText:{fontSize:11,lineHeight:16,color:COLORS.muted,marginTop:4},
  pageIntro:{padding:22,backgroundColor:COLORS.navy,borderBottomLeftRadius:28,borderBottomRightRadius:28},pageTitle:{color:COLORS.white,fontSize:27,fontWeight:'900'},pageBody:{color:'#B8D1D3',fontSize:13,lineHeight:20,marginTop:8},axesGrid:{padding:16,flexDirection:'row',flexWrap:'wrap',gap:10},axisCard:{width:'48%',minHeight:145,backgroundColor:COLORS.white,borderRadius:18,padding:15,borderWidth:1,borderColor:'#E8EEEE'},axisTop:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},axisNumber:{color:'#B7C6C9',fontSize:11,fontWeight:'900'},axisDot:{width:9,height:9,borderRadius:5},axisTitle:{fontSize:14,fontWeight:'900',color:COLORS.ink,marginTop:18},axisText:{fontSize:10,lineHeight:15,color:COLORS.muted,marginTop:6},goal:{marginHorizontal:16,marginBottom:16,backgroundColor:COLORS.blue,borderRadius:20,padding:20},goalOverline:{fontSize:9,fontWeight:'900',letterSpacing:1,color:'#BFE5E7'},goalValue:{fontSize:42,fontWeight:'900',color:COLORS.white,marginTop:5},goalText:{fontSize:12,lineHeight:18,color:'#D8F0F1',maxWidth:280},
  sourceCard:{marginHorizontal:16,marginTop:10,backgroundColor:COLORS.white,borderRadius:16,padding:14,flexDirection:'row',gap:12,borderWidth:1,borderColor:'#E8EEEE'},sourceIcon:{width:38,height:38,borderRadius:12,backgroundColor:'#E7F4F5',alignItems:'center',justifyContent:'center'},sourceIconText:{color:COLORS.blue,fontSize:20,fontWeight:'900'},sourceLine:{flexDirection:'row',justifyContent:'space-between',gap:8},sourceName:{fontSize:13,color:COLORS.ink,fontWeight:'900',flex:1},sourceStatus:{fontSize:8,color:COLORS.blue,fontWeight:'800',backgroundColor:'#E7F4F5',paddingHorizontal:6,paddingVertical:4,borderRadius:8},sourceDetail:{fontSize:10,lineHeight:15,color:COLORS.muted,marginTop:5},privacy:{margin:16,backgroundColor:COLORS.sand,borderRadius:18,padding:18,borderLeftWidth:4,borderLeftColor:COLORS.green},privacyTitle:{fontSize:15,fontWeight:'900',color:COLORS.ink},privacyText:{fontSize:11,lineHeight:17,color:COLORS.muted,marginTop:6},
  footer:{fontSize:9,textAlign:'center',color:'#8A9A9F',marginTop:16,marginHorizontal:20},tabs:{height:72,backgroundColor:COLORS.white,flexDirection:'row',paddingHorizontal:10,borderTopWidth:1,borderTopColor:COLORS.line},tab:{flex:1,alignItems:'center',justifyContent:'center',gap:3,borderTopWidth:3,borderTopColor:'transparent'},tabActive:{borderTopColor:COLORS.cyan},tabIcon:{fontSize:18,color:'#87979B'},tabText:{fontSize:9,fontWeight:'700',color:'#87979B'},tabTextActive:{color:COLORS.blue},
});
