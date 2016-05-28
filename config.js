var config = {

version: "2016.1.2",

modes: {
  "factory": "Erstinstallation (Neu gekaufter Router)",
  "sysupgrade": "Manuelles Update eines bestehenden Freifunk-Routers"
},

sites:{
  "domaene01" : {id: "domaene01",short:"d01",name:"Münster Stadt", version:"1.0.4", version_base:"2016.1.2", on_map: true },
  "domaene02" : {id: "domaene02",short:"d02",name:"Kreis Coesfeld", version:"1.0.4", version_base:"2016.1.2", on_map: true },
  "domaene03" : {id: "domaene03",short:"d03",name:"Kreis Steinfurt West", version:"1.0.4", version_base:"2016.1.2", on_map: false },
  "domaene04" : {id: "domaene04",short:"d04",name:"Kreis Steinfurt Ost", version:"1.0.4", version_base:"2016.1.2", on_map: false },
  "domaene05" : {id: "domaene05",short:"d05",name:"Münster Süd", version:"1.0.4", version_base:"2016.1.2", on_map: true },
  "domaene06" : {id: "domaene06",short:"d06",name:"Westmünsterland", version:"1.0.4", version_base:"2016.1.2", on_map: true },
  "domaene07" : {id: "domaene07",short:"d07",name:"Telgte", version:"1.1.3", version_base:"2016.1.x", on_map: true },
  "domaene08" : {id: "domaene08",short:"d08",name:"Gescher", version:"1.0.7", version_base:"2016.1.x", on_map: true },
  "domaene09" : {id: "domaene09",short:"d09",name:"Stadtlohn", version:"1.0.5", version_base:"2016.1.x", on_map: true },
  "domaene11" : {id: "domaene11",short:"d11",name:"Bocholt", version:"1.0.5", version_base:"2016.1.x", on_map: true },
  "domaene12" : {id: "domaene12",short:"d12",name:"Dülmen (ohne Rorup)", version:"1.0.9", version_base:"2016.1.3", on_map: true },
  "domaene13" : {id: "domaene13",short:"d13",name:"Rorup", version:"1.0.9", version_base:"2016.1.3", on_map: true },
  "domaene14" : {id: "domaene14",short:"d14",name:"Kreis Warendorf", version:"1", version_base:"2016.1.1", on_map: true },
  "domaene16" : {id: "domaene16",short:"d16",name:"Münster Promenade", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene17" : {id: "domaene17",short:"d17",name:"Emsdetten", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene18" : {id: "domaene18",short:"d18",name:"Greven", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene19" : {id: "domaene19",short:"d19",name:"Neuenkirchen", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene20" : {id: "domaene20",short:"d20",name:"Ochtrup", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene21" : {id: "domaene21",short:"d21",name:"Rheine", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene22" : {id: "domaene22",short:"d22",name:"Steinfurt", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene23" : {id: "domaene23",short:"d23",name:"Steinfurt-West", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene24" : {id: "domaene24",short:"d24",name:"Wettringen", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene25" : {id: "domaene25",short:"d25",name:"Steinfurt-Ost", version:"1.1.4", version_base:"2016.1.5", on_map: true },
  "domaene27" : {id: "domaene27",short:"d27",name:"Selm", version:"1.1.3", version_base:"2016.1.x", on_map: true }
},

//router list for gluon v2015.1
manufacturers: {
  "0tp-link": {id: "tp-link", name: "TP-Link"},
  "1ubiquiti": {id: "ubiquiti", name: "Ubiquiti"},
  "2buffalo": {id: "buffalo", name: "Buffalo"},
  "3d-link": {id: "d-link", name: "D-Link"},
  "4gl-inet": {id: "gl-inet", name: "GL-Inet"},
  "5linksys": {id: "linksys", name: "Linksys"},
  "6netgear": {id: "netgear", name: "Netgear"},
  "7alfa": {id: "alfa", name: "ALFA-Network"},
  "88devices": {id: "8devices", name: "8devices"},
  "9meraki": {id: "meraki", name: "Meraki"},
  "10openmesh": {id: "openmesh", name: "OpenMesh"},
  "11onion": {id: "onion", name: "Onion"},
  "12wd-ny-net": {id: "wd-ny-net", name: "WD My Net"},
  "13x86":{id:"x86",name:"x86"}
},

routers: {
 //only works for sysupgrade "8devices-carambola2-board": { id: "8devices-carambola2-board", name: "carambola2-Board", manufacturer: "8devices" },
 "alfa-ap121": { id: "alfa-ap121", name: "AP121", manufacturer: "ALFA-Network" },
 "alfa-ap121u": { id: "alfa-ap121u", name: "AP121U", manufacturer: "ALFA-Network" },
 "alfa-hornet-ub": { id: "alfa-hornet-ub", name: "Hornet UB", manufacturer: "ALFA-Network" },
 //only works for sysupgrade "buffalo-wzr-hp-ag300h-wzr-600dhp": { id: "buffalo-wzr-hp-ag300h-wzr-600dhp", name: "WZR-600DHP", manufacturer: "Buffalo" },
 "buffalo-wzr-hp-ag300h": { id: "buffalo-wzr-hp-ag300h", name: "WZR-HG-AG300H", manufacturer: "Buffalo" }, // only works for factory
 "buffalo-wzr-600dhp": { id: "buffalo-wzr-600dhp", name: "WZR-600DHP", manufacturer: "Buffalo" }, // only works for factory
 "buffalo-wzr-hp-g450h": { id: "buffalo-wzr-hp-g450h", name: "WZR-HP-G450H", manufacturer: "Buffalo" },
 "buffalo-wzr-hp-g300nh": { id: "buffalo-wzr-hp-g300nh", name: "WZR-HP-G300NH ", manufacturer: "Buffalo" },
 "d-link-dir-505-rev-a1": { id: "d-link-dir-505-rev-a1", name: "DIR-505 (A1)", manufacturer: "D-Link" },
 "d-link-dir-615-rev-c1": { id: "d-link-dir-615-rev-c1", name: "615", manufacturer: "D-Link" },
 "d-link-dir-825-rev-b1": { id: "d-link-dir-825-rev-b1", name: "825", manufacturer: "D-Link" },
 "gl-inet-6408a-v1": { id: "gl-inet-6408a-v1", name: "6408A", manufacturer: "GL-Inet" },
 "gl-inet-6416a-v1": { id: "gl-inet-6416a-v1", name: "6416A", manufacturer: "GL-Inet" },
 "linksys-wrt160nl": { id: "linksys-wrt160nl", name: "WRT160NL", manufacturer: "Linksys" },
 //only works for sysupgrade "meraki-mr12": { id: "meraki-mr12", name: "MR12", manufacturer: "Meraki" },
 //only works for sysupgrade "meraki-mr16": { id: "meraki-mr16", name: "MR16", manufacturer: "Meraki" },
 //only works for sysupgrade "meraki-mr62": { id: "meraki-mr62", name: "MR62", manufacturer: "Meraki" },
 //only works for sysupgrade "meraki-mr66": { id: "meraki-mr66", name: "MR66", manufacturer: "Meraki" }, 
 "netgear-wndr3700": { id: "netgear-wndr3700", name: "WNDR3700 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "netgear-wndr3700v2": { id: "netgear-wndr3700v2", name: "WNDR3700 Ver:2", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "netgear-wndr3700v4": { id: "netgear-wndr3700v4", name: "WNDR3700 Ver:4", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "netgear-wndr3800": { id: "netgear-wndr3800", name: "WNDR3800 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "netgear-wndr4300": { id: "netgear-wndr4300", name: "WNDR4300 Ver:1", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "netgear-wndrmacv2": { id: "netgear-wndrmacv2", name: "WNDRMAC Ver:2", manufacturer: "Netgear", extension :"img", extensionupgrade :"bin" },
 "onion-omega": { id: "onion-omega", name: "Omega", manufacturer: "Onion" },
 "openmesh-mr600": { id: "openmesh-mr600", name: "MR600 Ver:1", manufacturer: "OpenMesh" },
 "openmesh-mr600v2": { id: "openmesh-mr600v2", name: "MR600 Ver:2", manufacturer: "OpenMesh" },
 "openmesh-mr900": { id: "openmesh-mr900", name: "MR900 Ver:1", manufacturer: "OpenMesh" },
 "openmesh-mr900v2": { id: "openmesh-mr900v2", name: "MR900 Ver:2", manufacturer: "OpenMesh" },
 "openmesh-om2p-hs": { id: "openmesh-om2p-hs", name: "OM2P-HS Ver:1", manufacturer: "OpenMesh" },
 "openmesh-om2p-hsv2": { id: "openmesh-om2p-hsv2", name: "OM2P-HS Ver:2", manufacturer: "OpenMesh" },
 "openmesh-om2p-lc": { id: "openmesh-om2p-lc", name: "OM2P-LC Ver:1", manufacturer: "OpenMesh" },
 "openmesh-om2p": { id: "openmesh-om2p", name: "OM2P Ver:1", manufacturer: "OpenMesh" },
 "openmesh-om2pv2": { id: "openmesh-om2pv2", name: "OM2P Ver:2", manufacturer: "OpenMesh" },
 "openmesh-om5p-an": { id: "openmesh-om5p-an", name: "OM5P-AN Ver:1", manufacturer: "OpenMesh" },
 "openmesh-om5p": { id: "openmesh-om5p", name: "OM5P Ver:1", manufacturer: "OpenMesh" },
 "tp-link-cpe210-v1.0": { id: "tp-link-cpe210-v1.0", name: "CPE210 Ver:1", manufacturer: "TP-Link" },
 "tp-link-cpe210-v1.1": { id: "tp-link-cpe210-v1.1", name: "CPE210 Ver:1.1", manufacturer: "TP-Link" },
 "tp-link-cpe220-v1.0": { id: "tp-link-cpe220-v1.0", name: "CPE220 Ver:1", manufacturer: "TP-Link" },
 "tp-link-cpe220-v1.1": { id: "tp-link-cpe220-v1.1", name: "CPE220 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr13u-v1": { id: "tp-link-tl-mr13u-v1", name: "TL-MR13U Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3020-v1": { id: "tp-link-tl-mr3020-v1", name: "TL-MR3020 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3040-v1": { id: "tp-link-tl-mr3040-v1", name: "TL-MR3040 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3040-v2": { id: "tp-link-tl-mr3040-v2", name: "TL-MR3040 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-mr3220-v1": { id: "tp-link-tl-mr3220-v1", name: "TL-MR3220 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3220-v2": { id: "tp-link-tl-mr3220-v2", name: "TL-MR3220 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-mr3420-v1": { id: "tp-link-tl-mr3420-v1", name: "TL-MR3420 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-mr3420-v2": { id: "tp-link-tl-mr3420-v2", name: "TL-MR3420 Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa701n-nd-v1": { id: "tp-link-tl-wa701n-nd-v1", name: "TL-WA701N/ND", manufacturer: "TP-Link" },
 "tp-link-tl-wa750re-v1": { id: "tp-link-tl-wa750re-v1", name: "TL-WA750RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa7510n-v1": { id: "tp-link-tl-wa7510n-v1", name: "TL-WA7510N Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa801n-nd-v1": { id: "tp-link-tl-wa801n-nd-v1", name: "TL-WA801N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa801n-nd-v2": { id: "tp-link-tl-wa801n-nd-v2", name: "TL-WA801N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa830re-v1": { id: "tp-link-tl-wa830re-v1", name: "TL-WA830Re Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa850re-v1": { id: "tp-link-tl-wa850re-v1", name: "TL-WA850RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa860re-v1": { id: "tp-link-tl-wa860re-v1", name: "TL-WA860RE Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa901n-nd-v2": { id: "tp-link-tl-wa901n-nd-v2", name: "TL-WA901N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wa901n-nd-v3": { id: "tp-link-tl-wa901n-nd-v3", name: "TL-WA901N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wdr3500-v1": { id: "tp-link-tl-wdr3500-v1", name: "TL-WDR3500 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr3600-v1": { id: "tp-link-tl-wdr3600-v1", name: "TL-WDR3600 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr4300-v1": { id: "tp-link-tl-wdr4300-v1", name: "TL-WDR4300 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wdr4900-v1": { id: "tp-link-tl-wdr4900-v1", name: "TL-WDR4900 Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr703n-v1": { id: "tp-link-tl-wr703n-v1", name: "TL-WR703N Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr710n-v1": { id: "tp-link-tl-wr710n-v1", name: "TL-WR710N Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr710n-v2": { id: "tp-link-tl-wr710n-v2", name: "TL-WR710N v2", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v1": { id: "tp-link-tl-wr740n-nd-v1", name: "TL-WR740N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v3": { id: "tp-link-tl-wr740n-nd-v3", name: "TL-WR740N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr740n-nd-v4": { id: "tp-link-tl-wr740n-nd-v4", name: "TL-WR740N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v1": { id: "tp-link-tl-wr741n-nd-v1", name: "TL-WR741N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v2": { id: "tp-link-tl-wr741n-nd-v2", name: "TL-WR741N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr741n-nd-v4": { id: "tp-link-tl-wr741n-nd-v4", name: "TL-WR741N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr743n-nd-v1": { id: "tp-link-tl-wr743n-nd-v1", name: "TL-WR743N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr743n-nd-v2": { id: "tp-link-tl-wr743n-nd-v2", name: "TL-WR743N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v3": { id: "tp-link-tl-wr841n-nd-v3", name: "TL-WR841N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v5": { id: "tp-link-tl-wr841n-nd-v5", name: "TL-WR841N/ND Ver:5", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v7": { id: "tp-link-tl-wr841n-nd-v7", name: "TL-WR841N/ND Ver:7", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v8": { id: "tp-link-tl-wr841n-nd-v8", name: "TL-WR841N/ND Ver:8", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v9": { id: "tp-link-tl-wr841n-nd-v9", name: "TL-WR841N/ND Ver:9", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v10": { id: "tp-link-tl-wr841n-nd-v10", name: "TL-WR841N/ND Ver:10", manufacturer: "TP-Link" },
 "tp-link-tl-wr841n-nd-v11": { id: "tp-link-tl-wr841n-nd-v11", name: "TL-WR841N/ND Ver:11", manufacturer: "TP-Link" },
 "tp-link-tl-wr842n-nd-v1": { id: "tp-link-tl-wr842n-nd-v1", name: "TL-WR842N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr842n-nd-v2": { id: "tp-link-tl-wr842n-nd-v2", name: "TL-WR842N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr843n-nd-v1": { id: "tp-link-tl-wr843n-nd-v1", name: "TL-WR843N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wa901n-nd-v1": { id: "tp-link-tl-wa901n-nd-v1", name: "TL-WA901N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr940n-nd-v1": { id: "tp-link-tl-wr940n-nd-v1", name: "TL-WR940N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link tl-wr940n-nd-v2": { id: "tp-link-tl-wr940n-nd-v2", name: "TL-WR940N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr940n-nd-v3": { id: "tp-link-tl-wr940n-nd-v3", name: "TL-WR940N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v2": { id: "tp-link-tl-wr941n-nd-v2", name: "TL-WR941N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v3": { id: "tp-link-tl-wr941n-nd-v3", name: "TL-WR941N/ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v4": { id: "tp-link-tl-wr941n-nd-v4", name: "TL-WR941N/ND Ver:4", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v5": { id: "tp-link-tl-wr941n-nd-v5", name: "TL-WR941N/ND Ver:5", manufacturer: "TP-Link" },
 "tp-link-tl-wr941n-nd-v6": { id: "tp-link-tl-wr941n-nd-v6", name: "TL-WR941N/ND Ver:6", manufacturer: "TP-Link" },
 "tp-link-tl-wr1043n-nd-v1": { id: "tp-link-tl-wr1043n-nd-v1", name: "TL-WR1043N/ND Ver:1", manufacturer: "TP-Link" },
 "tp-link-tl-wr1043n-nd-v2": { id: "tp-link-tl-wr1043n-nd-v2", name: "TL-WR1043N/ND Ver:2", manufacturer: "TP-Link" },
 "tp-link-tl-wr1043n-nd-v3": { id: "tp-link-tl-wr1043n-nd-v3", name: "TL-WR1043N-ND Ver:3", manufacturer: "TP-Link" },
 "tp-link-tl-wr2543n-nd-v1": { id: "tp-link-tl-wr2543n-nd-v1", name: "TL-WR2543N/ND Ver:1", manufacturer: "TP-Link" },
 "ubiquiti-bullet-m":        { id: "ubiquiti-bullet-m", name: "Bullet M", manufacturer: "Ubiquiti" },
 "ubiquiti-loco-m-xw":      { id: "ubiquiti-loco-m-xw", name: "Loco M XW", manufacturer: "Ubiquiti" },
 "ubiquiti-rocket-m-xw":{id:"ubiquiti-rocket-m-xw",name:"Rocket M XW",manufacturer:"Ubiquiti"}, 
 "ubiquiti-rocket-m":{id:"ubiquiti-rocket-m",name:"Rocket M",manufacturer:"Ubiquiti"},
 "ubiquiti-nanostation-m-xw": { id: "ubiquiti-nanostation-m-xw", name: "Nanostation M XW", manufacturer: "Ubiquiti" },
 "ubiquiti-nanostation-m": { id: "ubiquiti-nanostation-m", name: "Nanostation M", manufacturer: "Ubiquiti" },
 "ubiquiti-picostation-m":{id:"ubiquiti-picostation-m",name:"Picostation M",manufacturer:"Ubiquiti"},
 "ubiquiti-unifi": { id: "ubiquiti-unifi", name: "UniFi", manufacturer: "Ubiquiti" },
 "ubiquiti-unifi-ap-pro": { id: "ubiquiti-unifi-ap-pro", name: "UniFi AP Pro", manufacturer: "Ubiquiti" },
 "ubiquiti-unifiap-outdoor": { id: "ubiquiti-unifiap-outdoor", name: "UniFi AP Outdoor", manufacturer: "Ubiquiti" },
 "ubiquiti-unifiap-outdoor+": { id: "ubiquiti-unifiap-outdoor+", name: "Outdoor+", manufacturer: "Ubiquiti" },
 "ubiquiti-airgateway": { id: "ubiquiti-airgateway", name: "airGateway ", manufacturer: "Ubiquiti" },
 "ubiquiti-airrouter": { id: "ubiquiti-airrouter", name: "airRouter ", manufacturer: "Ubiquiti" },
 "wd-my-net-n600": { id: "wd-my-net-n600", name: "N600", manufacturer: "WD My Net" },
 "wd-my-net-n750": { id: "wd-my-net-n750", name: "N750", manufacturer: "WD My Net" },
 "x86-generic":{id:"x86-generic.img.gz",name:"generic", extension :"img.gz" },
 "x86-kvm":{id:"x86-kvm",name:"kvm",manufacturer:"x86", extension :"img.gz" },
 "x86-virtualbox":{id:"x86-virtualbox",name:"virtualbox",manufacturer:"x86", extension :"vdi" }, // only available for factory
 "x86-vmware":{id:"x86-vmware",name:"vmware",manufacturer:"x86", extension :"vmdk" }, // only abailable for factory
},

name: "Münsterland",


url: "http://firmware.freifunk-muensterland.org/{{parse(downloadableSite).id}}/versions/v{{parse(downloadableSite).version}}/{{selectedMode}}/gluon-ffms{{parse(downloadableSite).short}}-v" +
"{{parse(downloadableSite).version_base}}+{{parse(downloadableSite).version}}-{{parse(selectedRouter).id}}{{selectedMode=='sysupgrade'?'-sysupgrade':''}}"
}
