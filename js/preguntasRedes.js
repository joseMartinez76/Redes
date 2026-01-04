const questionsDB = {
            ut1: [
                {
                    question: "¿Qué medio de transmisión inalámbrico requiere visión directa y es vulnerable a obstáculos?",
                    options: ["Par trenzado", "Fibra óptica", "LiFi", "Microondas"],
                    correct: 2,
                    explanation: "LiFi utiliza luz visible para transmitir datos y requiere línea de visión directa.",
                    topic: "Medios de transmisión"
                },
                {
                    question: "¿Cuál de los siguientes es un ataque de red basado en inundar peticiones para saturar un servicio?",
                    options: ["ARP Spoofing", "DDoS", "Phishing", "Sniffing"],
                    correct: 1,
                    explanation: "DDoS (Distributed Denial of Service) satura un servicio con múltiples peticiones.",
                    topic: "Seguridad"
                },
                {
                    question: "¿Qué comando permite ver la ruta que sigue un paquete hasta su destino?",
                    options: ["ping", "arp", "traceroute", "dig"],
                    correct: 2,
                    explanation: "Traceroute muestra todos los saltos que realiza un paquete hasta llegar a su destino.",
                    topic: "Comandos de red"
                },
                {
                    question: "¿Qué modelo conceptual organiza la comunicación en siete capas?",
                    options: ["Modelo Ethernet", "Modelo TCP/IP", "Modelo híbrido", "Modelo OSI"],
                    correct: 3,
                    explanation: "El modelo OSI (Open Systems Interconnection) organiza la comunicación en 7 capas.",
                    topic: "Modelos de red"
                },
                {
                    question: "¿Qué protocolo garantiza entrega ordenada y fiable de los datos?",
                    options: ["ICMP", "HTTP", "TCP", "UDP"],
                    correct: 2,
                    explanation: "TCP (Transmission Control Protocol) garantiza la entrega ordenada y fiable mediante ACKs.",
                    topic: "Protocolos"
                },
                {
                    question: "¿Qué protocolo es usado para enviar correo electrónico?",
                    options: ["SMTP", "DNS", "FTP", "HTTP"],
                    correct: 0,
                    explanation: "SMTP (Simple Mail Transfer Protocol) es el protocolo estándar para envío de correos.",
                    topic: "Protocolos"
                },
                {
                    question: "¿Qué topología fue la primera usada en Ethernet y es vulnerable a fallos en el cable troncal?",
                    options: ["Anillo", "Malla", "Bus", "Estrella"],
                    correct: 2,
                    explanation: "La topología Bus utiliza un cable troncal compartido por todos los dispositivos.",
                    topic: "Topologías"
                },
                {
                    question: "¿Qué protocolo de red se usa para monitorizar dispositivos como routers e impresoras?",
                    options: ["SMTP", "ARP", "SNMP", "HTTP"],
                    correct: 2,
                    explanation: "SNMP (Simple Network Management Protocol) monitoriza y gestiona dispositivos de red.",
                    topic: "Protocolos"
                },
                {
                    question: "¿Qué medio de transmisión ofrece mayor ancho de banda y resistencia a interferencias?",
                    options: ["Fibra óptica", "Microondas", "Coaxial", "Par trenzado"],
                    correct: 0,
                    explanation: "La fibra óptica ofrece el mayor ancho de banda y es inmune a interferencias electromagnéticas.",
                    topic: "Medios de transmisión"
                },
                {
                    question: "¿Cuál es la principal diferencia entre IPv4 e IPv6?",
                    options: ["El uso de WiFi obligatorio", "La velocidad de transmisión", "El número de bits de dirección", "El tipo de cable usado"],
                    correct: 2,
                    explanation: "IPv4 usa 32 bits (4.3 mil millones de direcciones) mientras IPv6 usa 128 bits.",
                    topic: "Protocolos"
                },
                {
                    question: "¿Qué protocolo traduce nombres de dominio en direcciones IP?",
                    options: ["SMTP", "DNS", "DHCP", "SNMP"],
                    correct: 1,
                    explanation: "DNS (Domain Name System) resuelve nombres de dominio a direcciones IP.",
                    topic: "Protocolos"
                },
                {
                    question: "¿Qué capa del modelo OSI se encarga del cifrado y la compresión de datos?",
                    options: ["Capa de aplicación", "Capa de presentación", "Capa de sesión", "Capa de transporte"],
                    correct: 1,
                    explanation: "La Capa 6 (Presentación) maneja el cifrado, compresión y formato de datos.",
                    topic: "Modelo OSI"
                },
                {
                    question: "¿Qué dispositivo interconecta distintas redes y gestiona tablas de enrutamiento?",
                    options: ["Firewall", "Hub", "Router", "Switch"],
                    correct: 2,
                    explanation: "El router conecta diferentes redes y toma decisiones de enrutamiento basadas en sus tablas.",
                    topic: "Dispositivos"
                },
                {
                    question: "¿Cuál es la principal utilidad de Wireshark?",
                    options: ["Captura y análisis de tráfico de red", "Creación de VLANs", "Asignación de direcciones IP", "Filtrado de tráfico perimetral"],
                    correct: 0,
                    explanation: "Wireshark es un analizador de protocolos que captura y analiza paquetes de red.",
                    topic: "Herramientas"
                },
                {
                    question: "¿Qué comando permite verificar conectividad y latencia entre dos nodos?",
                    options: ["netstat", "traceroute", "arp", "ping"],
                    correct: 3,
                    explanation: "Ping envía paquetes ICMP para verificar conectividad y medir latencia.",
                    topic: "Comandos de red"
                },
                {
                    question: "¿Qué dispositivo de red opera en la capa 2 del modelo OSI?",
                    options: ["Switch", "Firewall", "Router", "Hub"],
                    correct: 0,
                    explanation: "El switch opera en la Capa 2 (Enlace de datos) trabajando con direcciones MAC.",
                    topic: "Dispositivos"
                },
                {
                    question: "¿Qué es una red de datos?",
                    options: ["Un servidor de bases de datos", "Un conjunto de dispositivos interconectados para compartir información", "Un sistema de almacenamiento local", "Un tipo de software de ofimática"],
                    correct: 1,
                    explanation: "Una red de datos es un conjunto de dispositivos interconectados que comparten recursos e información.",
                    topic: "Conceptos básicos"
                },
                {
                    question: "¿Cuál fue la primera red que sentó las bases de Internet?",
                    options: ["WiFi", "Ethernet", "Token Ring", "ARPANET"],
                    correct: 3,
                    explanation: "ARPANET fue la primera red de conmutación de paquetes y precursora de Internet.",
                    topic: "Historia"
                },
                {
                    question: "¿Qué topología de red depende de un nodo central?",
                    options: ["Anillo", "Bus", "Estrella", "Malla"],
                    correct: 2,
                    explanation: "En la topología estrella todos los dispositivos se conectan a un nodo central.",
                    topic: "Topologías"
                },
                {
                    question: "¿Qué protocolo se utiliza para asignar direcciones IP automáticamente?",
                    options: ["FTP", "ICMP", "DHCP", "DNS"],
                    correct: 2,
                    explanation: "DHCP (Dynamic Host Configuration Protocol) asigna automáticamente direcciones IP.",
                    topic: "Protocolos"
                }
            ],
            ut2: [
                {
                    question: "¿Qué protocolo permite agrupar interfaces en Linux o Windows?",
                    options: ["SNMP", "FTP", "LACP", "HTTP"],
                    correct: 2,
                    explanation: "LACP (Link Aggregation Control Protocol) permite agrupar múltiples interfaces de red.",
                    topic: "Configuración avanzada"
                },
                {
                    question: "¿Qué error ocurre al asignar manualmente dos direcciones iguales?",
                    options: ["Fragmentación", "Conflicto de IP", "Timeout", "Bucle de red"],
                    correct: 1,
                    explanation: "Un conflicto de IP ocurre cuando dos dispositivos tienen la misma dirección IP en la red.",
                    topic: "Troubleshooting"
                },
                {
                    question: "¿Qué medio físico es más adecuado para largas distancias en campus?",
                    options: ["Cable coaxial", "Fibra multimodo", "Fibra monomodo", "Par trenzado Cat 5e"],
                    correct: 2,
                    explanation: "La fibra monomodo es ideal para largas distancias (hasta 40km) con menor atenuación.",
                    topic: "Cableado estructurado"
                },
                {
                    question: "¿Qué comando Linux permite añadir una dirección IP?",
                    options: ["ip addr add", "ifconfig -a", "netstat -rn", "route -n"],
                    correct: 0,
                    explanation: "El comando 'ip addr add' es la forma moderna de añadir direcciones IP en Linux.",
                    topic: "Administración Linux"
                },
                {
                    question: "¿Qué indica un enlace negociado a 100 Mbps half-duplex en lugar de 1 Gbps full?",
                    options: ["IP duplicada", "Velocidad degradada", "DHCP deshabilitado", "Configuración correcta"],
                    correct: 1,
                    explanation: "Una velocidad degradada indica problemas en el cable, puerto o configuración de autonegociación.",
                    topic: "Troubleshooting"
                },
                {
                    question: "¿Qué documento centraliza información de activos y registros en grandes empresas?",
                    options: ["DHCP", "CMDB", "VLAN", "NAT"],
                    correct: 1,
                    explanation: "CMDB (Configuration Management Database) centraliza información de todos los activos de TI.",
                    topic: "Gestión empresarial"
                },
                {
                    question: "¿Qué función cumple el NIC Teaming?",
                    options: ["Mejorar DNS", "Agregar ancho de banda y redundancia", "Reducir latencia", "Evitar interferencias"],
                    correct: 1,
                    explanation: "NIC Teaming agrupa interfaces de red para aumentar ancho de banda y proporcionar redundancia.",
                    topic: "Configuración avanzada"
                },
                {
                    question: "¿Qué dispositivo termina el cableado horizontal en un rack?",
                    options: ["Patch panel", "Switch", "Access Point", "Router"],
                    correct: 0,
                    explanation: "El patch panel organiza y termina los cables horizontales procedentes de las áreas de trabajo.",
                    topic: "Cableado estructurado"
                },
                {
                    question: "¿Qué protocolo evita bucles en redes conmutadas?",
                    options: ["Spanning Tree Protocol (STP)", "OSPF", "DHCP", "RIP"],
                    correct: 0,
                    explanation: "STP previene bucles en topologías redundantes bloqueando puertos selectivamente.",
                    topic: "Protocolos avanzados"
                },
                {
                    question: "¿Qué dirección indica fallo en el servidor DHCP?",
                    options: ["192.168.0.1", "127.0.0.1", "255.255.255.255", "169.254.x.x"],
                    correct: 3,
                    explanation: "Las direcciones APIPA (169.254.x.x) se asignan automáticamente cuando no hay servidor DHCP disponible.",
                    topic: "Troubleshooting"
                },
                {
                    question: "¿Qué estándar define el etiquetado en infraestructuras de red?",
                    options: ["IEEE 802.3", "ISO/IEC 11801", "TIA/EIA-606-B", "EN 50173"],
                    correct: 2,
                    explanation: "TIA/EIA-606-B establece estándares para etiquetado y documentación de infraestructura de red.",
                    topic: "Normativas"
                },
                {
                    question: "¿Qué protocolo de seguridad inalámbrica se considera más robusto actualmente?",
                    options: ["WEP", "WPA", "WPA3", "WPA2"],
                    correct: 2,
                    explanation: "WPA3 es el protocolo más reciente y robusto, con cifrado mejorado y protección contra ataques.",
                    topic: "Seguridad Wi-Fi"
                },
                {
                    question: "¿Qué modo de autenticación se utiliza en WPA2/WPA3-Enterprise?",
                    options: ["Portal cautivo", "SSID oculto", "Contraseña simple", "802.1X con RADIUS"],
                    correct: 3,
                    explanation: "802.1X con servidor RADIUS proporciona autenticación empresarial basada en credenciales individuales.",
                    topic: "Seguridad Wi-Fi"
                },
                {
                    question: "¿Qué herramienta certifica instalaciones de cobre y fibra?",
                    options: ["Analizador Wireshark", "Multímetro", "Probador básico", "Certificador Fluke"],
                    correct: 3,
                    explanation: "Los certificadores Fluke verifican que las instalaciones cumplan con estándares TIA/ISO.",
                    topic: "Herramientas profesionales"
                },
                {
                    question: "¿Cuál es la longitud máxima de un enlace horizontal de cobre según TIA/EIA-568?",
                    options: ["50 metros", "150 metros", "100 metros", "75 metros"],
                    correct: 2,
                    explanation: "El estándar TIA/EIA-568 especifica 90 metros de cable + 10 metros de patch cords (100m total).",
                    topic: "Normativas"
                },
                {
                    question: "¿Qué norma internacional regula el cableado estructurado en Europa?",
                    options: ["ISO/IEC 11801", "ANSI/TIA/EIA-568", "IEEE 802.11", "EN 50173"],
                    correct: 3,
                    explanation: "EN 50173 es la norma europea para cableado estructurado, basada en ISO/IEC 11801.",
                    topic: "Normativas"
                },
                {
                    question: "¿Qué herramienta comprueba la resolución de nombres?",
                    options: ["nslookup", "ipconfig", "ping", "ethtool"],
                    correct: 0,
                    explanation: "nslookup consulta servidores DNS para resolver nombres de dominio a direcciones IP.",
                    topic: "Herramientas de diagnóstico"
                },
                {
                    question: "¿Qué estándar Wi-Fi introdujo el uso de OFDMA?",
                    options: ["802.11n (Wi-Fi 4)", "802.11g", "802.11ax (Wi-Fi 6)", "802.11ac (Wi-Fi 5)"],
                    correct: 2,
                    explanation: "Wi-Fi 6 (802.11ax) introdujo OFDMA para mejorar la eficiencia en entornos densos.",
                    topic: "Wi-Fi avanzado"
                },
                {
                    question: "¿Qué comando en Windows muestra la configuración completa de red?",
                    options: ["nslookup", "tracert", "ipconfig /all", "ping"],
                    correct: 2,
                    explanation: "ipconfig /all muestra toda la configuración de red incluyendo IP, MAC, DNS, DHCP, etc.",
                    topic: "Administración Windows"
                },
                {
                    question: "¿Qué protocolo evita bucles de enrutamiento?",
                    options: ["BGP", "STP", "OSPF", "RIP"],
                    correct: 1,
                    explanation: "STP (Spanning Tree Protocol) previene bucles en redes de Capa 2.",
                    topic: "Protocolos avanzados"
                }
            ],
            ut3: [
                {
                    question: "¿Qué función cumple el Port Security?",
                    options: ["Permitir más VLANs", "Desactivar el STP", "Aumentar el ancho de banda", "Limitar el número de direcciones MAC por puerto"],
                    correct: 3,
                    explanation: "Port Security limita el número de direcciones MAC permitidas en un puerto para prevenir ataques.",
                    topic: "Seguridad en switches"
                },
                {
                    question: "¿Qué tecnología permite unir varios enlaces físicos en uno lógico?",
                    options: ["LACP/EtherChannel", "ARP", "RIP", "DHCP Snooping"],
                    correct: 0,
                    explanation: "LACP/EtherChannel agrega múltiples enlaces físicos en un único enlace lógico para mayor ancho de banda y redundancia.",
                    topic: "Agregación de enlaces"
                },
                {
                    question: "¿Cuál es la finalidad de las VLANs en un switch?",
                    options: ["Aumentar la velocidad física del puerto", "Evitar el uso de protocolos", "Segmentar lógicamente la red en dominios independientes", "Sustituir al direccionamiento IP"],
                    correct: 2,
                    explanation: "Las VLANs segmentan lógicamente la red creando dominios de broadcast separados.",
                    topic: "VLANs"
                },
                {
                    question: "¿Qué diferencia principal existe entre un switch gestionable y uno no gestionable?",
                    options: ["El no gestionable ofrece CLI", "El gestionable permite configurar, monitorizar y aplicar políticas de red", "El no gestionable soporta VLANs", "El gestionable no tiene interfaz de administración"],
                    correct: 1,
                    explanation: "Los switches gestionables permiten configuración avanzada, monitorización y aplicación de políticas de red.",
                    topic: "Tipos de switches"
                },
                {
                    question: "¿Cuál es el método más seguro de acceso remoto a un switch?",
                    options: ["Telnet", "Acceso sin contraseña", "HTTP sin cifrar", "SSH"],
                    correct: 3,
                    explanation: "SSH proporciona acceso remoto cifrado y seguro a los dispositivos de red.",
                    topic: "Administración remota"
                },
                {
                    question: "¿Qué comando muestra la tabla de direcciones MAC en un switch Cisco?",
                    options: ["show arp", "show logging", "show mac address-table", "show ip interface brief"],
                    correct: 2,
                    explanation: "El comando 'show mac address-table' muestra las direcciones MAC aprendidas por el switch.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué protocolo de autenticación de usuarios puede usarse en switches?",
                    options: ["ARP", "802.1X", "FTP", "RIP"],
                    correct: 1,
                    explanation: "802.1X proporciona autenticación basada en puerto para control de acceso a la red.",
                    topic: "Autenticación"
                },
                {
                    question: "¿Qué mejora aporta RSTP frente a STP?",
                    options: ["Elimina la necesidad de VLANs", "Mayor número de VLANs", "Soporte de IPv6", "Menor tiempo de convergencia"],
                    correct: 3,
                    explanation: "RSTP (Rapid Spanning Tree Protocol) reduce significativamente el tiempo de convergencia comparado con STP tradicional.",
                    topic: "Protocolos STP"
                },
                {
                    question: "¿Qué comando guarda la configuración en memoria de arranque en Cisco?",
                    options: ["write erase", "show startup-config", "reload", "copy running-config startup-config"],
                    correct: 3,
                    explanation: "El comando 'copy running-config startup-config' guarda la configuración actual en la memoria NVRAM.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué protocolo evita los bucles en redes de conmutación?",
                    options: ["BGP", "OSPF", "STP", "RIP"],
                    correct: 2,
                    explanation: "STP (Spanning Tree Protocol) previene bucles en topologías redundantes de Capa 2.",
                    topic: "Protocolos STP"
                },
                {
                    question: "¿Qué práctica es fundamental antes de actualizar el firmware de un switch?",
                    options: ["Borrar las VLANs existentes", "Deshabilitar todos los puertos", "Desactivar el STP", "Realizar copia de seguridad de la configuración"],
                    correct: 3,
                    explanation: "Siempre se debe realizar un backup de la configuración antes de actualizar el firmware.",
                    topic: "Mantenimiento"
                },
                {
                    question: "¿Qué comando de Cisco muestra la configuración activa en un switch?",
                    options: ["show running-config", "show version", "show startup-config", "show vlan brief"],
                    correct: 0,
                    explanation: "'show running-config' muestra la configuración actual en memoria RAM del switch.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué protocolo se utiliza para monitorizar dispositivos de red?",
                    options: ["SMTP", "SNMP", "FTP", "HTTP"],
                    correct: 1,
                    explanation: "SNMP (Simple Network Management Protocol) es el protocolo estándar para monitorización de red.",
                    topic: "Monitorización"
                },
                {
                    question: "¿Qué comando muestra el estado de las interfaces en un switch Cisco?",
                    options: ["show interfaces status", "show memory", "show vlan brief", "show users"],
                    correct: 0,
                    explanation: "'show interfaces status' muestra el estado de todas las interfaces del switch.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué significa AAA en administración de red?",
                    options: ["Administración Avanzada Automática", "Ancho de banda, Autonomía y Adaptación", "Acceso Anónimo Autorizado", "Autenticación, Autorización y Accounting"],
                    correct: 3,
                    explanation: "AAA significa Authentication, Authorization y Accounting - los tres pilares de seguridad de acceso.",
                    topic: "Seguridad"
                },
                {
                    question: "¿Qué medida de seguridad bloquea servidores DHCP falsos?",
                    options: ["NAT", "DHCP Snooping", "ARP Inspection", "QoS"],
                    correct: 1,
                    explanation: "DHCP Snooping protege contra servidores DHCP no autorizados en la red.",
                    topic: "Seguridad en switches"
                },
                {
                    question: "¿Qué herramienta permite capturar tráfico mediante un puerto espejo?",
                    options: ["FTP", "SMTP", "SPAN", "DNS"],
                    correct: 2,
                    explanation: "SPAN (Switch Port Analyzer) permite duplicar el tráfico de un puerto para análisis.",
                    topic: "Diagnóstico"
                },
                {
                    question: "¿Qué protocolo protege contra ataques de ARP spoofing?",
                    options: ["FTP", "SNMP", "Dynamic ARP Inspection (DAI)", "RIP"],
                    correct: 2,
                    explanation: "DAI valida los mensajes ARP para prevenir ataques de ARP spoofing.",
                    topic: "Seguridad en switches"
                },
                {
                    question: "¿Qué técnica protege el plano de control del switch frente a ataques?",
                    options: ["ACLs", "VLANs", "EtherChannel", "Control Plane Policing (CoPP)"],
                    correct: 3,
                    explanation: "CoPP protege el CPU del switch limitando el tráfico dirigido al plano de control.",
                    topic: "Seguridad avanzada"
                },
                {
                    question: "¿Qué comando permite verificar el estado del protocolo STP en Cisco?",
                    options: ["show vlan brief", "show running-config", "show ip route", "show spanning-tree"],
                    correct: 3,
                    explanation: "'show spanning-tree' muestra el estado y configuración del protocolo STP.",
                    topic: "Comandos Cisco"
                }
            ],
            ut4: [
                {
                    question: "¿Cuál es la función principal de un router en una red?",
                    options: ["Encaminamiento de paquetes entre diferentes subredes", "Proporcionar direcciones IP dinámicas", "Conmutación de tramas Ethernet", "Proteger contra malware"],
                    correct: 0,
                    explanation: "La función principal del router es encaminar paquetes entre diferentes subredes.",
                    topic: "Fundamentos de routing"
                },
                {
                    question: "¿Qué plano del router se encarga de reenviar paquetes?",
                    options: ["Plano de gestión", "Plano de seguridad", "Plano de control", "Plano de datos"],
                    correct: 3,
                    explanation: "El plano de datos (forwarding plane) se encarga del reenvío rápido de paquetes.",
                    topic: "Arquitectura de routers"
                },
                {
                    question: "¿Qué comando en Cisco permite ver la tabla de enrutamiento?",
                    options: ["show ip route", "ping", "show version", "show interfaces status"],
                    correct: 0,
                    explanation: "El comando 'show ip route' muestra la tabla de enrutamiento completa.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué elemento define una ruta estática?",
                    options: ["Dirección MAC", "Versión del firmware", "Nombre de interfaz", "Destino, máscara y nexthop"],
                    correct: 3,
                    explanation: "Una ruta estática requiere destino, máscara de red y siguiente salto (nexthop).",
                    topic: "Routing estático"
                },
                {
                    question: "¿Qué ventaja ofrece NAT?",
                    options: ["Aumenta el ancho de banda", "Mejora la latencia", "Sustituye al routing dinámico", "Permite compartir una IP pública entre varias privadas"],
                    correct: 3,
                    explanation: "NAT permite que múltiples dispositivos con IPs privadas compartan una IP pública.",
                    topic: "NAT"
                },
                {
                    question: "¿Qué comando en Linux muestra las rutas activas?",
                    options: ["netstat -an", "ifconfig", "ip route show", "uname -a"],
                    correct: 2,
                    explanation: "El comando 'ip route show' muestra las rutas activas en sistemas Linux.",
                    topic: "Comandos Linux"
                },
                {
                    question: "¿Qué significa ACL en redes?",
                    options: ["Access Control List", "Active Connection Link", "Administrative Control Level", "Address Configuration Layer"],
                    correct: 0,
                    explanation: "ACL (Access Control List) son listas para controlar el acceso y filtrar tráfico.",
                    topic: "Seguridad en routers"
                },
                {
                    question: "¿Qué comando en Cisco muestra las traducciones NAT activas?",
                    options: ["show version", "show ip nat translations", "show interfaces brief", "show running-config"],
                    correct: 1,
                    explanation: "El comando 'show ip nat translations' muestra las traducciones NAT activas.",
                    topic: "NAT"
                },
                {
                    question: "¿Qué protocolo se usa para monitorizar routers mediante SNMP?",
                    options: ["Simple Network Management Protocol", "System Network Management Process", "Secure Network Monitoring Protocol", "Static Network Management Protocol"],
                    correct: 0,
                    explanation: "SNMP (Simple Network Management Protocol) es el protocolo estándar para monitorización.",
                    topic: "Monitorización"
                },
                {
                    question: "¿Qué recurso se debe tener siempre antes de un cambio en router?",
                    options: ["Nueva licencia", "Cambio de cableado", "Backup de configuración", "Usuario root"],
                    correct: 2,
                    explanation: "Siempre se debe tener un backup de la configuración antes de realizar cambios.",
                    topic: "Mejores prácticas"
                },
                {
                    question: "¿Qué significa PAT?",
                    options: ["Port Address Translation", "Packet Adjustment Technique", "Public Address Transfer", "Protocol Allocation Table"],
                    correct: 0,
                    explanation: "PAT (Port Address Translation) traduce direcciones y puertos, permitiendo múltiples conexiones.",
                    topic: "NAT"
                },
                {
                    question: "¿Qué se consulta para verificar conectividad básica en router?",
                    options: ["show version", "reload", "Comando ping", "clear counters"],
                    correct: 2,
                    explanation: "El comando ping es la herramienta básica para verificar conectividad.",
                    topic: "Diagnóstico"
                },
                {
                    question: "¿Qué campo se revisa en tabla de rutas para identificar origen?",
                    options: ["Código de ruta (C, S, O, B)", "Nombre del usuario", "Dirección MAC", "Velocidad del puerto"],
                    correct: 0,
                    explanation: "Los códigos de ruta (C=Connected, S=Static, O=OSPF, B=BGP) indican el origen.",
                    topic: "Routing"
                },
                {
                    question: "¿Qué tecnología se puede combinar con ACLs?",
                    options: ["QoS", "SMTP", "DHCP", "FTP"],
                    correct: 0,
                    explanation: "QoS (Quality of Service) se combina frecuentemente con ACLs para priorizar tráfico.",
                    topic: "QoS y ACLs"
                },
                {
                    question: "¿Qué significa CoPP?",
                    options: ["Control Plane Policing", "Configuration of Packet Paths", "Control of Physical Ports", "Core Port Processing"],
                    correct: 0,
                    explanation: "CoPP (Control Plane Policing) protege el plano de control del router.",
                    topic: "Seguridad avanzada"
                },
                {
                    question: "¿Qué máscara se suele usar en enlaces punto a punto?",
                    options: ["/16", "/24", "/30 o /31", "/8"],
                    correct: 2,
                    explanation: "Los enlaces punto a punto usan /30 (2 hosts) o /31 (2 hosts sin broadcast).",
                    topic: "Subnetting"
                },
                {
                    question: "¿Qué comando en Cisco muestra los vecinos BGP?",
                    options: ["show logging", "show ip route", "show ip bgp summary", "show processes cpu"],
                    correct: 2,
                    explanation: "El comando 'show ip bgp summary' muestra un resumen de los vecinos BGP.",
                    topic: "BGP"
                },
                {
                    question: "¿Qué plano usa SSH y SNMP?",
                    options: ["Plano de gestión", "Plano de datos", "Plano físico", "Plano de control"],
                    correct: 0,
                    explanation: "SSH y SNMP operan en el plano de gestión para administración del dispositivo.",
                    topic: "Arquitectura de routers"
                },
                {
                    question: "¿Qué técnica asegura rollback rápido?",
                    options: ["Reemplazo de hardware", "Cambiar firmware", "Backup de configuración", "Reiniciar router"],
                    correct: 2,
                    explanation: "Un backup de configuración permite hacer rollback rápido ante problemas.",
                    topic: "Mejores prácticas"
                },
                {
                    question: "¿Qué tipo de NAT traduce una IP privada en una pública fija?",
                    options: ["PAT", "NAT64", "NAT dinámico", "NAT estático"],
                    correct: 3,
                    explanation: "NAT estático crea una traducción permanente 1:1 entre IP privada y pública.",
                    topic: "NAT"
                }
            ],
            ut5: [
                {
                    question: "¿Qué es una VLAN?",
                    options: ["Un dispositivo de seguridad perimetral", "Una red lógica que segmenta un dominio de broadcast", "Un protocolo de enrutamiento dinámico", "Una interfaz física de red"],
                    correct: 1,
                    explanation: "Una VLAN es una red de área local virtual que segmenta lógicamente un dominio de broadcast.",
                    topic: "Fundamentos de VLANs"
                },
                {
                    question: "¿Cuál es la principal ventaja de usar VLANs?",
                    options: ["Reducir el tráfico de broadcast y segmentar la red", "Aumentar la velocidad de los switches", "Eliminar la necesidad de ACLs", "Sustituir los routers en la red"],
                    correct: 0,
                    explanation: "Las VLANs reducen el tráfico de broadcast y permiten segmentar la red lógicamente para mayor seguridad y eficiencia.",
                    topic: "Ventajas de VLANs"
                },
                {
                    question: "¿Qué comando en Cisco permite listar VLANs configuradas?",
                    options: ["show interfaces status", "show vlan brief", "show ip route", "show running-config"],
                    correct: 1,
                    explanation: "El comando 'show vlan brief' muestra un resumen de todas las VLANs configuradas en el switch.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué tipo de puerto se usa para transportar varias VLANs?",
                    options: ["Puerto access", "Puerto loopback", "Puerto de gestión", "Puerto trunk"],
                    correct: 3,
                    explanation: "Un puerto trunk transporta tráfico de múltiples VLANs utilizando etiquetado 802.1Q.",
                    topic: "Tipos de puertos"
                },
                {
                    question: "¿Qué campo identifica una VLAN en una trama 802.1Q?",
                    options: ["VID (VLAN Identifier)", "TTL", "Dirección IP", "Dirección MAC"],
                    correct: 0,
                    explanation: "El VID (VLAN Identifier) es un campo de 12 bits en la etiqueta 802.1Q que identifica la VLAN.",
                    topic: "Protocolo 802.1Q"
                },
                {
                    question: "¿Qué es la VLAN nativa?",
                    options: ["VLAN de administración", "VLAN reservada para VoIP", "VLAN dedicada a servidores", "VLAN a la que van los frames no etiquetados"],
                    correct: 3,
                    explanation: "La VLAN nativa es aquella a la que pertenecen los frames que llegan sin etiqueta 802.1Q a un puerto trunk.",
                    topic: "VLAN nativa"
                },
                {
                    question: "¿Qué se requiere para que dos VLANs se comuniquen entre sí?",
                    options: ["Inter-VLAN routing", "Un trunk abierto", "QinQ", "DHCP Snooping"],
                    correct: 0,
                    explanation: "Se requiere Inter-VLAN routing mediante un router o switch Layer 3 para comunicar VLANs diferentes.",
                    topic: "Inter-VLAN routing"
                },
                {
                    question: "¿Qué método básico permite interconectar VLANs en un router?",
                    options: ["NAT overload", "VRRP", "Router-on-a-stick", "QinQ"],
                    correct: 2,
                    explanation: "Router-on-a-stick es una configuración donde un router usa subinterfaces para enrutar entre VLANs.",
                    topic: "Inter-VLAN routing"
                },
                {
                    question: "¿Qué comando muestra las VLANs permitidas en un trunk en Cisco?",
                    options: ["show ip route", "show interfaces trunk", "show arp", "show mac address-table"],
                    correct: 1,
                    explanation: "El comando 'show interfaces trunk' muestra información detallada sobre puertos trunk y VLANs permitidas.",
                    topic: "Comandos Cisco"
                },
                {
                    question: "¿Qué técnica limita direcciones MAC en un puerto?",
                    options: ["ARP Inspection", "Port Security", "IP Source Guard", "DHCP Snooping"],
                    correct: 1,
                    explanation: "Port Security limita el número de direcciones MAC que pueden aprenderse en un puerto.",
                    topic: "Seguridad en VLANs"
                },
                {
                    question: "¿Qué protocolo inserta etiquetas para VLANs en tramas Ethernet?",
                    options: ["RIP", "BGP", "OSPF", "802.1Q"],
                    correct: 3,
                    explanation: "El protocolo 802.1Q es el estándar para el etiquetado de VLANs en tramas Ethernet.",
                    topic: "Protocolo 802.1Q"
                },
                {
                    question: "¿Qué VLAN no es recomendable usar como nativa?",
                    options: ["VLAN 200", "VLAN 10", "VLAN 1", "VLAN 100"],
                    correct: 2,
                    explanation: "VLAN 1 no debe usarse como nativa por ser la VLAN por defecto y presentar riesgos de seguridad.",
                    topic: "Mejores prácticas"
                },
                {
                    question: "¿Qué herramienta evita servidores DHCP no autorizados?",
                    options: ["DHCP Snooping", "ARP Inspection", "Port Security", "NAT"],
                    correct: 0,
                    explanation: "DHCP Snooping valida mensajes DHCP y bloquea servidores DHCP no autorizados.",
                    topic: "Seguridad en VLANs"
                },
                {
                    question: "¿Qué protección evita ARP spoofing?",
                    options: ["DHCP Snooping", "Dynamic ARP Inspection (DAI)", "VRRP", "IP Source Guard"],
                    correct: 1,
                    explanation: "DAI (Dynamic ARP Inspection) valida mensajes ARP para prevenir ataques de ARP spoofing.",
                    topic: "Seguridad en VLANs"
                },
                {
                    question: "¿Qué significa QinQ?",
                    options: ["Traducción de direcciones IP", "Protocolo de redundancia", "Apilamiento de etiquetas VLAN", "Enrutamiento entre VLANs"],
                    correct: 2,
                    explanation: "QinQ (802.1ad) permite apilar múltiples etiquetas VLAN para extender VLANs a través de redes de proveedores.",
                    topic: "QinQ"
                },
                {
                    question: "¿Qué interfaz lógica sirve de gateway para una VLAN?",
                    options: ["SVI (Switch Virtual Interface)", "Puerto trunk", "VLAN nativa", "QinQ"],
                    correct: 0,
                    explanation: "Una SVI es una interfaz virtual en un switch Layer 3 que actúa como gateway para una VLAN.",
                    topic: "Switch Virtual Interface"
                },
                {
                    question: "¿Qué técnica bloquea IP spoofing en un puerto?",
                    options: ["DHCP Snooping", "DAI", "IP Source Guard", "NAT"],
                    correct: 2,
                    explanation: "IP Source Guard valida las direcciones IP origen basándose en la tabla de DHCP Snooping.",
                    topic: "Seguridad en VLANs"
                },
                {
                    question: "¿Qué se debe documentar siempre de una VLAN?",
                    options: ["Solo el switch asignado", "Únicamente el ID", "ID, nombre, propósito y puertos asociados", "Solo el rango IP"],
                    correct: 2,
                    explanation: "Una documentación completa debe incluir ID de VLAN, nombre, propósito y todos los puertos asociados.",
                    topic: "Documentación"
                },
                {
                    question: "¿Qué se debe probar tras configurar VLANs?",
                    options: ["Únicamente conectividad", "Únicamente tablas ARP", "Únicamente logs", "Conectividad, rendimiento y seguridad"],
                    correct: 3,
                    explanation: "Tras configurar VLANs se debe probar conectividad, rendimiento y aspectos de seguridad.",
                    topic: "Verificación y pruebas"
                },
                {
                    question: "¿Qué protocolo permite administrar VLANs de forma centralizada?",
                    options: ["VTP (VLAN Trunking Protocol)", "RIP", "STP", "OSPF"],
                    correct: 0,
                    explanation: "VTP permite la administración centralizada y propagación de información de VLANs entre switches.",
                    topic: "VTP"
                }
            ],
            ut6: [
                {
                    question: "¿Qué ventaja principal ofrece el enrutamiento dinámico frente al estático?",
                    options: ["Siempre es más seguro", "Adaptación automática a fallos y cambios de topología", "Evita el uso de protocolos de red", "Requiere menos recursos de CPU"],
                    correct: 1,
                    explanation: "El enrutamiento dinámico se adapta automáticamente a cambios en la topología y fallos de enlaces.",
                    topic: "Fundamentos de enrutamiento dinámico"
                },
                {
                    question: "¿Qué protocolo de enrutamiento utiliza el número de saltos como métrica?",
                    options: ["EIGRP", "OSPF", "RIP", "BGP"],
                    correct: 2,
                    explanation: "RIP (Routing Information Protocol) utiliza el conteo de saltos (hop count) como métrica.",
                    topic: "Protocolo RIP"
                },
                {
                    question: "¿Cuál es el límite máximo de saltos en RIP antes de considerar una red inalcanzable?",
                    options: ["10", "32", "16", "5"],
                    correct: 2,
                    explanation: "RIP considera una red inalcanzable después de 15 saltos (el salto 16 marca infinito).",
                    topic: "Protocolo RIP"
                },
                {
                    question: "¿Qué protocolo utiliza LSAs y LSDB para calcular rutas?",
                    options: ["RIP", "BGP", "OSPF", "EIGRP"],
                    correct: 2,
                    explanation: "OSPF utiliza Link State Advertisements (LSAs) y Link State Database (LSDB) para calcular rutas.",
                    topic: "Protocolo OSPF"
                },
                {
                    question: "¿Qué técnica permite optimizar el uso de direcciones IPv4 mediante máscaras variables?",
                    options: ["NAT", "VLSM", "ACL", "DNS"],
                    correct: 1,
                    explanation: "VLSM (Variable Length Subnet Mask) permite usar máscaras de subred de diferentes tamaños.",
                    topic: "VLSM y subnetting"
                },
                {
                    question: "¿Cuál es el valor de distancia administrativa por defecto de OSPF?",
                    options: ["120", "110", "1", "90"],
                    correct: 1,
                    explanation: "OSPF tiene una distancia administrativa por defecto de 110.",
                    topic: "Distancia administrativa"
                },
                {
                    question: "¿Qué protocolo es considerado de estado de enlace?",
                    options: ["RIPv2", "RIPng", "RIP", "OSPF"],
                    correct: 3,
                    explanation: "OSPF es un protocolo de estado de enlace (link-state) que mantiene una base de datos de la topología.",
                    topic: "Tipos de protocolos"
                },
                {
                    question: "¿Qué comando permite ver la base de datos de LSAs en Cisco?",
                    options: ["show version", "show ip ospf database", "show running-config", "traceroute"],
                    correct: 1,
                    explanation: "El comando 'show ip ospf database' muestra la base de datos de LSAs de OSPF.",
                    topic: "Comandos Cisco OSPF"
                },
                {
                    question: "¿Qué técnica de prevención de bucles se aplica en RIP?",
                    options: ["Áreas stub", "Split horizon", "Fast Reroute", "DR/BDR"],
                    correct: 1,
                    explanation: "Split horizon previene bucles evitando anunciar rutas por la interfaz donde se aprendieron.",
                    topic: "Prevención de bucles"
                },
                {
                    question: "¿Qué protocolo de enrutamiento soporta redistribución de rutas externas con LSAs tipo 5?",
                    options: ["RIPng", "RIP", "RIPv1", "OSPF"],
                    correct: 3,
                    explanation: "OSPF utiliza LSAs tipo 5 para redistribuir rutas externas en el dominio OSPF.",
                    topic: "OSPF LSAs"
                },
                {
                    question: "¿Qué protocolo utiliza el multicast 224.0.0.9 para sus actualizaciones?",
                    options: ["OSPF", "RIPv2", "RIPng", "BGP"],
                    correct: 1,
                    explanation: "RIPv2 utiliza la dirección multicast 224.0.0.9 para enviar actualizaciones.",
                    topic: "RIPv2"
                },
                {
                    question: "¿Qué herramienta mide convergencia observando pérdida de paquetes y latencia?",
                    options: ["ftp", "iperf3", "ssh", "dnslookup"],
                    correct: 1,
                    explanation: "iperf3 puede medir el rendimiento de la red incluyendo pérdida de paquetes y latencia durante la convergencia.",
                    topic: "Herramientas de medición"
                },
                {
                    question: "¿Qué protocolo permite configurar rutas jerárquicas mediante áreas?",
                    options: ["RIP", "RIPng", "ARP", "OSPF"],
                    correct: 3,
                    explanation: "OSPF permite crear una jerarquía de red mediante áreas (area 0 backbone y áreas no-backbone).",
                    topic: "OSPF Áreas"
                },
                {
                    question: "¿Qué técnica permite agrupar varias redes en una sola entrada de ruta?",
                    options: ["CIDR", "ARP", "NAT", "DNS"],
                    correct: 0,
                    explanation: "CIDR (Classless Inter-Domain Routing) permite la agregación de rutas o sumarización.",
                    topic: "CIDR y sumarización"
                },
                {
                    question: "¿Qué valor de distancia administrativa corresponde a RIP?",
                    options: ["110", "90", "120", "200"],
                    correct: 2,
                    explanation: "RIP tiene una distancia administrativa de 120.",
                    topic: "Distancia administrativa"
                },
                {
                    question: "¿Qué comando muestra los vecinos OSPF en Cisco?",
                    options: ["show ip ospf neighbor", "show ip route", "show ospf database", "show interfaces"],
                    correct: 0,
                    explanation: "El comando 'show ip ospf neighbor' muestra información sobre los vecinos OSPF.",
                    topic: "Comandos Cisco OSPF"
                },
                {
                    question: "¿Qué protocolo utiliza el algoritmo Dijkstra para calcular la ruta más corta?",
                    options: ["RIP", "EIGRP", "OSPF", "BGP"],
                    correct: 2,
                    explanation: "OSPF utiliza el algoritmo SPF (Shortest Path First) de Dijkstra para calcular las mejores rutas.",
                    topic: "Algoritmos de enrutamiento"
                },
                {
                    question: "¿Qué significa DR en el contexto de OSPF?",
                    options: ["Data Router", "Designated Router", "Dynamic Router", "Default Router"],
                    correct: 1,
                    explanation: "DR (Designated Router) es el router elegido en redes multi-acceso para reducir adyacencias OSPF.",
                    topic: "OSPF DR/BDR"
                },
                {
                    question: "¿Qué protocolo de enrutamiento es más adecuado para redes pequeñas y simples?",
                    options: ["BGP", "OSPF", "RIP", "IS-IS"],
                    correct: 2,
                    explanation: "RIP es adecuado para redes pequeñas debido a su simplicidad, aunque tiene limitaciones de escalabilidad.",
                    topic: "Selección de protocolos"
                },
                {
                    question: "¿Qué comando activa RIP versión 2 en un router Cisco?",
                    options: ["router rip", "enable rip v2", "ip rip version 2", "version 2"],
                    correct: 3,
                    explanation: "Después de 'router rip', se usa el comando 'version 2' para activar RIPv2.",
                    topic: "Configuración RIP"
                }
            ],
            ut7: [
                {
                    question: "¿Qué función principal cumple el NAT en redes privadas conectadas a Internet?",
                    options: ["Sustituir al firewall", "Gestionar certificados digitales", "Traducción de direcciones privadas a públicas", "Aumentar la velocidad de transmisión"],
                    correct: 2,
                    explanation: "NAT (Network Address Translation) traduce direcciones IP privadas a públicas para permitir la conectividad a Internet.",
                    topic: "NAT y conectividad"
                },
                {
                    question: "¿Qué tipo de NAT se utiliza para publicar un servidor interno hacia Internet?",
                    options: ["NAT64", "NAT dinámico", "NAT estático", "PAT"],
                    correct: 2,
                    explanation: "NAT estático crea una traducción permanente 1:1 para publicar servicios internos.",
                    topic: "NAT estático"
                },
                {
                    question: "¿Qué protocolo de enrutamiento externo se utiliza para multihoming con ISP?",
                    options: ["BGP", "RIP", "OSPF", "EIGRP"],
                    correct: 0,
                    explanation: "BGP (Border Gateway Protocol) es el protocolo estándar para multihoming con múltiples ISPs.",
                    topic: "BGP y multihoming"
                },
                {
                    question: "¿Cuál es la técnica más usada para que múltiples hosts compartan una única IP pública?",
                    options: ["PAT (Port Address Translation)", "ACL", "NAT dinámico con pool", "NAT estático"],
                    correct: 0,
                    explanation: "PAT o NAT overload permite que múltiples dispositivos compartan una IP pública usando diferentes puertos.",
                    topic: "PAT"
                },
                {
                    question: "¿Qué elemento de red se recomienda para segmentar servicios expuestos a Internet?",
                    options: ["MPLS", "DMZ", "Proxy ARP", "VLAN de usuarios"],
                    correct: 1,
                    explanation: "La DMZ (Zona Desmilitarizada) segmenta y aísla los servicios expuestos a Internet.",
                    topic: "DMZ y seguridad"
                },
                {
                    question: "¿Qué protocolo se utiliza habitualmente para VPN site-to-site con seguridad fuerte?",
                    options: ["DNS", "IPsec/IKEv2", "RIP", "FTP"],
                    correct: 1,
                    explanation: "IPsec con IKEv2 proporciona seguridad robusta para conexiones VPN site-to-site.",
                    topic: "VPN site-to-site"
                },
                {
                    question: "¿Qué protocolo VPN es más sencillo y eficiente para conexiones remotas?",
                    options: ["WireGuard", "HTTP", "Telnet", "ARP"],
                    correct: 0,
                    explanation: "WireGuard es un protocolo VPN moderno, simple y muy eficiente.",
                    topic: "VPN modernas"
                },
                {
                    question: "¿Qué protocolo de seguridad se recomienda para cifrar el tráfico de una web pública?",
                    options: ["FTP", "SNMPv1", "TLS 1.2/1.3", "HTTP simple"],
                    correct: 2,
                    explanation: "TLS 1.2/1.3 proporciona cifrado seguro para HTTPS.",
                    topic: "Seguridad web"
                },
                {
                    question: "¿Qué comando en Cisco muestra las traducciones NAT activas?",
                    options: ["show running-config", "show ip nat translations", "ping", "show vlan brief"],
                    correct: 1,
                    explanation: "El comando 'show ip nat translations' muestra las traducciones NAT activas.",
                    topic: "Comandos NAT Cisco"
                },
                {
                    question: "¿Qué protocolo WAN permite QoS garantizado y VRFs?",
                    options: ["Metro Ethernet", "LTE", "Broadband", "MPLS"],
                    correct: 3,
                    explanation: "MPLS permite QoS garantizado y VRFs (Virtual Routing and Forwarding) para segmentación.",
                    topic: "MPLS"
                },
                {
                    question: "¿Qué protocolo de control se usa en Cisco para monitorizar enlaces y activar failover?",
                    options: ["DNS", "FTP", "IP SLA", "SSH"],
                    correct: 2,
                    explanation: "IP SLA (Service Level Agreement) monitoriza la disponibilidad y rendimiento de enlaces.",
                    topic: "IP SLA"
                },
                {
                    question: "¿Qué dispositivo software protege aplicaciones web frente a ataques como SQLi o XSS?",
                    options: ["WAF", "DHCP server", "Switch L2", "NAT64"],
                    correct: 0,
                    explanation: "WAF (Web Application Firewall) protege contra ataques de aplicación web como SQL injection y XSS.",
                    topic: "WAF"
                },
                {
                    question: "¿Qué tipo de arquitectura VPN conecta usuarios individuales a la red corporativa?",
                    options: ["Multihoming", "Remote Access", "MPLS", "Site-to-Site"],
                    correct: 1,
                    explanation: "Remote Access VPN permite a usuarios individuales conectarse de forma segura a la red corporativa.",
                    topic: "Remote Access VPN"
                },
                {
                    question: "¿Qué protocolo inalámbrico ofrece mayor cobertura en entornos metropolitanos?",
                    options: ["WiMAX", "Bluetooth", "ZigBee", "WiFi"],
                    correct: 0,
                    explanation: "WiMAX está diseñado para proporcionar conectividad inalámbrica de área metropolitana.",
                    topic: "WAN inalámbricas"
                },
                {
                    question: "¿Qué comando en Linux prueba el MTU máximo evitando fragmentación?",
                    options: ["traceroute", "curl", "ping -M do -s <size>", "ifconfig"],
                    correct: 2,
                    explanation: "El comando 'ping -M do -s <size>' prueba el MTU máximo sin fragmentación.",
                    topic: "MTU y fragmentación"
                },
                {
                    question: "¿Qué mecanismo de redundancia usa una IP virtual compartida entre routers?",
                    options: ["DHCP", "VRRP", "NAT", "FTP"],
                    correct: 1,
                    explanation: "VRRP (Virtual Router Redundancy Protocol) permite alta disponibilidad mediante IP virtual.",
                    topic: "VRRP"
                },
                {
                    question: "¿Qué protocolo de seguridad se usa junto a certificados y 2FA en VPN remotas?",
                    options: ["Telnet", "SMTP", "OpenVPN", "HTTP"],
                    correct: 2,
                    explanation: "OpenVPN soporta autenticación con certificados y 2FA para acceso remoto seguro.",
                    topic: "OpenVPN"
                },
                {
                    question: "¿Qué tecnología WAN moderna permite orquestar enlaces múltiples por aplicación?",
                    options: ["MPLS", "Metro Ethernet", "SD-WAN", "Dial-up"],
                    correct: 2,
                    explanation: "SD-WAN permite gestión inteligente de múltiples enlaces WAN basada en aplicaciones.",
                    topic: "SD-WAN"
                },
                {
                    question: "¿Qué práctica de seguridad se recomienda para publicar un servidor HTTPS?",
                    options: ["Desactivar los logs", "Permitir todo el tráfico entrante", "Usar certificados TLS válidos y WAF", "Usar solo NAT dinámico"],
                    correct: 2,
                    explanation: "Se recomienda usar certificados TLS válidos y WAF para proteger servidores HTTPS públicos.",
                    topic: "Seguridad de servidores"
                },
                {
                    question: "¿Qué herramienta correlaciona logs y genera alertas de seguridad?",
                    options: ["FTP server", "SMTP relay", "DNS", "SIEM"],
                    correct: 3,
                    explanation: "SIEM (Security Information and Event Management) correlaciona eventos y genera alertas de seguridad.",
                    topic: "SIEM"
                }
            ]
        };
