import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ComboPicker from './component/Picker'
import GuideViewer from './component/GuideViewer'

import { about } from './component/theme'

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			intro: {
		      titleText: "林百貨 簡介",
		      bodyText: '位在台南中西區的林百貨，為1932年由日本商人林方一所建立，在當時是南台灣規模最大的百貨公司，也是台灣第二家大型百貨公司。歷經長時間閒置，在1998年被列入市定古蹟，於2010年開始整修至2013年完成，由台南市文化局委外經營，林百貨終於在2014年以「文創百貨」的型態重新出發，由高青時尚股份有限公司經營，再次成為台南的著名景點。'
	    	}, 
	    	history: {
		      titleText: "林百貨的榮景、衰退與重生",
		      bodyText1: '林百貨所在的位置是當時台南最繁榮的商業區，因而有「銀座」之稱。俗稱「五層樓仔」的林百貨在1932年開幕後生意絡繹不絕，鼎盛時期的月營業額經換算後高達千萬元新台幣。對當時的台南人而言，林百貨可謂是現代化的指標，內部設施相當新穎且備受矚目，建築內不僅設有南台灣首部電梯、罕見的手搖式鐵捲門、避雷針等先進設備，各樓層販賣的洋品百貨、服飾、和洋菓子、喫茶店(咖啡店)等等也吸引許多民眾前往光顧。值得一提的是，林百貨在1933年時，於樓頂設立「末廣社」神社，以祈求林家人與百貨員工們平安健康，聳立的鳥居在一片建築中特別與眾不同。',
		      bodyText2: '1945年太平洋戰爭結束後，林百貨因為鄰近市政中心而受美軍轟炸波及。戰後數年，林百貨曾加以修復，先後成為台灣製鹽總廠(台鹽實業)、鹽務警察、保三總隊所使用的辦公處所，自保三總隊遷往台北後，林百貨便陷入長期閒置的狀態。林百貨至1998年列為市定古蹟，但直到2010年才進行修護工作，2013年特邀請林方一的後代前來，一同見證林百貨的蛻變。2014年6月正式開幕，每樓層皆規劃不同主題，分別為「台南好客廳」、「台南好設計」、「台南好時尚」、「台南好美味」、「台南好文化」、「台南好風景」，期許林百貨再度成為台南的美麗景致之一。'
	    	}
	    };
	}

	render () {
		let { intro, history } = this.state
		return (
			<View style={about.container}>
			  <ScrollView>
				<View style={about.section}>
				  <Text>
			        <Text style={about.titleText}>
			          {intro.titleText}{'\n'}{'\n'}
			        </Text>
			        <Text numberOfLines={5}>
			          {intro.bodyText}
			        </Text>
			      </Text>
			    </View>
			    <View style={about.section}>
			      <Text>
			        <Text style={about.titleText}>
			          {history.titleText}{'\n'}{'\n'}
			        </Text>
			        <Text numberOfLines={5}>
			          {history.bodyText1}{'\n'}{'\n'}
			        </Text>
			        <Text numberOfLines={5}>
			          {history.bodyText2}
			        </Text>
			      </Text>
			    </View>
			  </ScrollView>
			</View>
		)
	}
}

export default About
