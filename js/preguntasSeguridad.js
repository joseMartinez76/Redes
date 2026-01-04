// Base de datos de preguntas organizadas por unidad
        const questionsDB = {
            
                ut1: [
        {
                question: "¿Cuál es el objetivo principal de la seguridad informática?",
                options: [
                    "Instalar un antivirus en cada equipo",
                    "Evitar que los usuarios cometan errores",
                    "Proteger confidencialidad, integridad y disponibilidad",
                    "Asegurar cero incidentes en los sistemas"
                ],
                correct: 2,
                explanation: "El objetivo fundamental es garantizar la tríada CID: Confidencialidad, Integridad y Disponibilidad.",
                topic: "UT1-Fundamentos de Seguridad"
            },
            {
                question: "¿Cuál es la principal característica de la autenticación multifactor (MFA)?",
                options: [
                    "Es obligatoria solo para administradores",
                    "Utiliza varios factores diferentes para verificar identidad",
                    "Se limita al uso de SMS",
                    "Siempre sustituye a la contraseña"
                ],
                correct: 1,
                explanation: "La MFA requiere el uso de dos o más mecanismos independientes (algo que sabes, algo que tienes o algo que eres) para validar la identidad.",
                topic: "UT1-Identidad y Acceso"
            },
            {
                question: "¿Cuál es una buena práctica de copias de seguridad?",
                options: [
                    "Hacer copia anual sin verificar",
                    "Guardar una sola copia en el mismo equipo",
                    "No cifrar las copias para ahorrar tiempo",
                    "Seguir la regla 3-2-1"
                ],
                correct: 3,
                explanation: "La regla 3-2-1 implica tener 3 copias, en 2 soportes distintos y 1 fuera de la ubicación física.",
                topic: "UT1-Continuidad de Negocio"
            },
            {
                question: "¿Cuál de las siguientes es una vulnerabilidad de origen físico?",
                options: [
                    "Falta de SAI en el CPD",
                    "Contraseñas débiles",
                    "Inyección SQL",
                    "Servicio SSH expuesto sin contraseña"
                ],
                correct: 0,
                explanation: "La falta de un Sistema de Alimentación Ininterrumpida (SAI) es una debilidad física que compromete la disponibilidad ante fallos eléctricos.",
                topic: "UT1-Seguridad Física"
            },
            {
                question: "¿Qué principio del triángulo CID asegura que los datos no se alteran sin autorización?",
                options: [
                    "Confidencialidad",
                    "Disponibilidad",
                    "Integridad",
                    "Privacidad"
                ],
                correct: 2,
                explanation: "La integridad garantiza que la información se mantenga exacta y no sea modificada indebidamente por terceros.",
                topic: "UT1-Fundamentos de Seguridad"
            },
            {
                question: "¿Qué control es adecuado para mitigar fugas de datos personales?",
                options: [
                    "Configuración por defecto de servicios",
                    "No aplicar parches de seguridad",
                    "Cifrado de discos y auditoría de accesos",
                    "Usar cuentas compartidas"
                ],
                correct: 2,
                explanation: "El cifrado protege los datos en reposo y la auditoría permite rastrear accesos no autorizados.",
                topic: "UT1-Protección de Datos"
            },
            {
                question: "¿Qué ventaja tiene la biometría frente a las contraseñas?",
                options: [
                    "No requiere hardware adicional",
                    "Puede compartirse fácilmente",
                    "Es imposible de falsificar",
                    "Es inherente al usuario y reduce olvidos"
                ],
                correct: 3,
                explanation: "Al basarse en rasgos biológicos del usuario, es algo que \"se es\", eliminando la necesidad de memorizar claves.",
                topic: "UT1-Identidad y Acceso"
            },
            {
                question: "¿Cuál de estas medidas pertenece a la seguridad lógica?",
                options: [
                    "Cámaras de vigilancia",
                    "Configuración de firewall y políticas de red",
                    "Control de acceso físico con tarjeta",
                    "Uso de candados en portátiles"
                ],
                correct: 1,
                explanation: "La seguridad lógica gestiona la protección de sistemas mediante software, protocolos y configuraciones de red.",
                topic: "UT1-Seguridad Lógica"
            },
            {
                question: "¿Qué es un ransomware?",
                options: [
                    "Una técnica de autenticación multifactor",
                    "Un programa de cifrado legítimo",
                    "Una herramienta de auditoría",
                    "Un malware que cifra datos y pide rescate"
                ],
                correct: 3,
                explanation: "El ransomware secuestra la información cifrándola y exige un pago económico para su liberación.",
                topic: "UT1-Amenazas"
            },
            {
                question: "¿Cuál es el riesgo principal asociado a la ingeniería social?",
                options: [
                    "Saturación de ancho de banda",
                    "Fallos en protocolos de cifrado",
                    "Manipulación de usuarios para obtener acceso",
                    "Defectos en el hardware"
                ],
                correct: 2,
                explanation: "La ingeniería social ataca al factor humano mediante engaños para obtener información confidencial.",
                topic: "UT1-Amenazas"
            },
            {
                question: "¿Cuál es la fase inicial de un análisis forense digital?",
                options: [
                    "Documentación",
                    "Adquisición",
                    "Análisis",
                    "Preparación"
                ],
                correct: 3,
                explanation: "La preparación es la fase previa donde se establecen las herramientas y políticas para investigar incidentes.",
                topic: "UT1-Análisis Forense"
            },
            {
                question: "¿Qué algoritmo es hoy recomendado para almacenar contraseñas?",
                options: [
                    "DES",
                    "SHA-1",
                    "MD5",
                    "Argon2id"
                ],
                correct: 3,
                explanation: "Argon2id es el estándar actual más seguro para el hashing de contraseñas debido a su alta resistencia.",
                topic: "UT1-Criptografía"
            },
            {
                question: "¿Qué diferencia clave hay entre criptografía simétrica y asimétrica?",
                options: [
                    "La asimétrica no se usa en Internet",
                    "La simétrica usa dos claves distintas y la asimétrica solo una",
                    "La asimétrica usa un par de claves pública/privada, la simétrica una sola",
                    "La simétrica no cifra datos en reposo"
                ],
                correct: 2,
                explanation: "La criptografía asimétrica utiliza un par de claves vinculado (pública y privada).",
                topic: "UT1-Criptografía"
            },
            {
                question: "¿Cuál de estas opciones representa una política de contraseñas adecuada?",
                options: [
                    "Contraseña de 6 caracteres con renovación mensual",
                    "Contraseña corta pero memorizable",
                    "Uso de la misma contraseña en varios servicios",
                    "Longitud mínima 12 caracteres y prohibición de contraseñas filtradas"
                ],
                correct: 3,
                explanation: "Las políticas modernas recomiendan longitud y evitar claves que ya aparezcan en filtraciones previas.",
                topic: "UT1-Identidad y Acceso"
            },
            {
                question: "¿Cuál es la función principal de la criptografía en tránsito (TLS)?",
                options: [
                    "Evitar que los discos se dañen",
                    "Proteger comunicaciones entre cliente y servidor",
                    "Limitar el acceso físico a los equipos",
                    "Impedir instalación de malware"
                ],
                correct: 1,
                explanation: "TLS asegura que la información viaje cifrada entre los extremos para evitar su intercepción en la red.",
                topic: "UT1-Seguridad de Red"
            },
            {
                question: "¿Qué normativa regula en España la protección de datos junto al RGPD?",
                options: [
                    "ENS",
                    "NIS2",
                    "ISO 27001",
                    "LOPDGDD"
                ],
                correct: 3,
                explanation: "La LOPDGDD es la Ley Orgánica española que adapta el ordenamiento nacional al reglamento europeo (RGPD).",
                topic: "UT1-Normativa"
            },
            {
                question: "En el análisis forense, ¿qué significa cadena de custodia?",
                options: [
                    "Procedimiento de autenticación multifactor",
                    "Uso de cifrado en copias de seguridad",
                    "Almacenamiento de logs en la nube",
                    "Registro que garantiza trazabilidad e integridad de evidencias"
                ],
                correct: 3,
                explanation: "Garantiza que la evidencia no ha sido alterada ni manipulada desde su recolección hasta el juicio.",
                topic: "UT1-Análisis Forense"
            },
            {
                question: "¿Qué significa RTO en continuidad de negocio?",
                options: [
                    "Nivel máximo de confidencialidad alcanzable",
                    "Método de cifrado recomendado",
                    "Tiempo máximo aceptable de recuperación tras incidente",
                    "Número de intentos de autenticación permitidos"
                ],
                correct: 2,
                explanation: "Recovery Time Objective (RTO) es el tiempo objetivo establecido para restaurar un servicio tras un fallo.",
                topic: "UT1-Continuidad de Negocio"
            },
            {
                question: "¿Qué técnica criptográfica utiliza la misma clave para cifrar y descifrar?",
                options: [
                    "Firma digital",
                    "Criptografía simétrica",
                    "Criptografía asimétrica",
                    "Función hash"
                ],
                correct: 1,
                explanation: "La criptografía simétrica se basa en el uso de una única clave compartida entre emisor y receptor.",
                topic: "UT1-Criptografía"
            },
            {
                question: "¿Qué es el principio de mínimo privilegio?",
                options: [
                    "Dar a todos los usuarios privilegios de administrador",
                    "Permitir acceso completo por comodidad",
                    "Evitar el uso de contraseñas",
                    "Conceder solo los permisos estrictamente necesarios"
                ],
                correct: 3,
                explanation: "Consiste en limitar los permisos de usuarios o procesos al mínimo necesario para su función.",
                topic: "UT1-Identidad y Acceso"
            }
        ],
        
        
        ut2: [
            {
                question: "¿Qué diferencia principal existe entre amenazas lógicas y físicas?",
                options: [
                    "Ambas afectan únicamente a software",
                    "Las físicas incluyen solo malware",
                    "Las lógicas afectan a la información digital, las físicas al hardware e instalaciones",
                    "Las lógicas siempre se producen por errores humanos"
                ],
                correct: 2,
                explanation: "Las amenazas lógicas son ataques al software y datos, mientras que las físicas dañan el equipo o infraestructura.",
                topic: "UT2-Fundamentos de Seguridad"
            },
            {
                question: "¿Qué aporta el cifrado TLS en redes públicas?",
                options: [
                    "Solo disponibilidad del servicio",
                    "Aceleración del tráfico",
                    "Confidencialidad e integridad de la comunicación",
                    "Instalación automática de drivers"
                ],
                correct: 2,
                explanation: "TLS asegura que la comunicación no sea leída por terceros (confidencialidad) ni alterada (integridad).",
                topic: "UT2-Seguridad de Red"
            },
            {
                question: "¿Qué diferencia existe entre HIDS y NIDS?",
                options: [
                    "HIDS analiza host y registros, NIDS monitoriza tráfico de red",
                    "HIDS y NIDS son protocolos de cifrado",
                    "Ambos analizan solo firewalls",
                    "HIDS inspecciona la nube, NIDS solo discos duros"
                ],
                correct: 0,
                explanation: "HIDS protege un equipo específico analizando sus logs, mientras NIDS vigila todo el tráfico de un segmento de red.",
                topic: "UT2-Detección de Intrusos"
            },
            {
                question: "¿Qué comando en Linux permite listar procesos activos?",
                options: [
                    "chmod",
                    "mkdir",
                    "cp -r",
                    "ps aux"
                ],
                correct: 3,
                explanation: "\"ps aux\" muestra todos los procesos en ejecución con detalles sobre usuario, CPU y memoria.",
                topic: "UT2-Comandos Linux"
            },
            {
                question: "¿Qué fases componen la anatomía clásica de un ataque?",
                options: [
                    "Explotación y recuperación de sistemas",
                    "Escaneo, borrado y reinstalación",
                    "Reconocimiento, entrega, explotación, persistencia, C2 y acciones finales",
                    "Reconocimiento, cifrado y borrado de datos"
                ],
                correct: 2,
                explanation: "Esta secuencia describe la \"Cyber Kill Chain\", desde la búsqueda de información hasta la ejecución de objetivos.",
                topic: "UT2-Fases de Ataque"
            },
            {
                question: "¿Qué es un sandbox en ciberseguridad?",
                options: [
                    "Sistema redundante de alta disponibilidad",
                    "Algoritmo de cifrado simétrico",
                    "Entorno controlado para ejecutar y analizar malware",
                    "Copia de seguridad cifrada"
                ],
                correct: 2,
                explanation: "Un sandbox es una \"caja de arena\" segura donde se puede detonar malware sin riesgo para el sistema real.",
                topic: "UT2-Análisis de Malware"
            },
            {
                question: "¿Qué comando en PowerShell obtiene conexiones de red?",
                options: [
                    "Get-Item",
                    "Get-NetTCPConnection",
                    "Get-Date",
                    "Stop-Service"
                ],
                correct: 1,
                explanation: "Este cmdlet muestra el estado de las conexiones TCP actuales en Windows.",
                topic: "UT2-Comandos PowerShell"
            },
            {
                question: "¿Qué hace un ransomware?",
                options: [
                    "Abre un túnel VPN",
                    "Cifra datos y exige rescate",
                    "Instala actualizaciones de seguridad",
                    "Bloquea únicamente hardware"
                ],
                correct: 1,
                explanation: "El ransomware es un malware de extorsión que impide el acceso a archivos mediante cifrado.",
                topic: "UT2-Amenazas"
            },
            {
                question: "¿Qué aporta la correlación de eventos en SIEM?",
                options: [
                    "Aumentar la capacidad de disco",
                    "Reducir falsos positivos y mejorar detección",
                    "Evitar cifrado de backups",
                    "Instalar drivers automáticamente"
                ],
                correct: 1,
                explanation: "La correlación conecta diferentes logs para identificar patrones de ataque que pasarían desapercibidos individualmente.",
                topic: "UT2-Monitorización"
            },
            {
                question: "¿Qué define a un troyano?",
                options: [
                    "Malware que cifra datos automáticamente",
                    "Protocolo de comunicación seguro",
                    "Programa malicioso que aparenta ser legítimo y abre puertas traseras",
                    "Ataque de denegación de servicio"
                ],
                correct: 2,
                explanation: "A diferencia del gusano, el troyano engaña al usuario ocultando su carga dañina tras una aplicación útil.",
                topic: "UT2-Amenazas"
            },
            {
                question: "¿Qué herramienta se usa para descubrir servicios expuestos?",
                options: [
                    "Photoshop",
                    "Nmap",
                    "Excel",
                    "Gmail"
                ],
                correct: 1,
                explanation: "Nmap es el escáner de red estándar para auditar puertos abiertos y versiones de software.",
                topic: "UT2-Herramientas de Red"
            },
            {
                question: "¿Qué es un rogue AP?",
                options: [
                    "Un firewall de nueva generación",
                    "Un certificado autofirmado",
                    "Punto de acceso inalámbrico malicioso no autorizado",
                    "Un protocolo de VPN"
                ],
                correct: 2,
                explanation: "Es un punto de acceso \"pirata\" que se hace pasar por una red legítima para robar datos de los usuarios.",
                topic: "UT2-Seguridad Inalámbrica"
            },
            {
                question: "¿Qué es un ataque fileless?",
                options: [
                    "Un virus que infecta documentos de texto",
                    "Un ataque que se ejecuta en memoria sin dejar archivos en disco",
                    "Un ataque basado en ingeniería social",
                    "Un gusano que se propaga por USB"
                ],
                correct: 1,
                explanation: "Los ataques sin archivos usan herramientas legítimas del sistema para residir en la memoria RAM.",
                topic: "UT2-Fases de Ataque"
            },
            {
                question: "¿Qué permite observar el análisis dinámico en sandbox?",
                options: [
                    "Procesos, conexiones de red y cambios en el sistema",
                    "Las patentes de software registradas",
                    "Solo el código fuente del malware",
                    "Únicamente tráfico cifrado TLS"
                ],
                correct: 0,
                explanation: "El análisis dinámico observa el comportamiento real del malware mientras se ejecuta.",
                topic: "UT2-Análisis de Malware"
            },
            {
                question: "¿Qué característica define a un gusano (worm)?",
                options: [
                    "Infecta únicamente documentos PDF",
                    "Necesita siempre interacción del usuario",
                    "Su capacidad de autorreplicación y propagación en red",
                    "Es un tipo de firewall"
                ],
                correct: 2,
                explanation: "Los gusanos se distinguen porque pueden saltar de un equipo a otro sin ayuda humana.",
                topic: "UT2-Amenazas"
            },
            {
                question: "¿Qué función principal tiene un antivirus?",
                options: [
                    "Cifrar discos duros automáticamente",
                    "Crear reglas de firewall",
                    "Sustituir protocolos de comunicación",
                    "Detectar y eliminar software malicioso"
                ],
                correct: 3,
                explanation: "El antivirus monitoriza el sistema para identificar firmas o comportamientos sospechosos de malware.",
                topic: "UT2-Seguridad Lógica"
            },
            {
                question: "¿Qué comando en Linux detiene un servicio con systemd?",
                options: [
                    "ls -l",
                    "echo \"hola\"",
                    "pwd",
                    "systemctl stop <servicio>"
                ],
                correct: 3,
                explanation: "\"systemctl\" es el gestor de servicios moderno en la mayoría de distros Linux.",
                topic: "UT2-Comandos Linux"
            },
            {
                question: "¿Qué herramienta se usa para detectar persistencia en Windows?",
                options: [
                    "WinRAR",
                    "Sysinternals Autoruns",
                    "Paint",
                    "Microsoft Word"
                ],
                correct: 1,
                explanation: "Autoruns muestra qué programas están configurados para iniciarse automáticamente con el sistema.",
                topic: "UT2-Herramientas Windows"
            },
            {
                question: "¿Qué son los certificados X.509?",
                options: [
                    "Certificados digitales usados en TLS y firmas",
                    "Algoritmos de hashing",
                    "Discos cifrados por hardware",
                    "Contraseñas de un solo uso"
                ],
                correct: 0,
                explanation: "X.509 es el estándar internacional para la infraestructura de clave pública (PKI).",
                topic: "UT2-Criptografía"
            },
            {
                question: "¿Qué mejora introduce WPA3 frente a WPA2?",
                options: [
                    "Autenticación SAE resistente a ataques de diccionario",
                    "Garantiza disponibilidad de energía",
                    "Instala antivirus en los clientes",
                    "Sustituye HTTPS en navegadores"
                ],
                correct: 0,
                explanation: "SAE (Simultaneous Authentication of Equals) evita que un atacante adivine la clave offline.",
                topic: "UT2-Seguridad Inalámbrica"
            }
        ],

        ut3: [
            {
                question: "¿Qué escenario requiere mayores controles de seguridad?",
                options: [
                    "Acceso a correo personal",
                    "Acceso de usuario a SaaS",
                    "Teletrabajo básico",
                    "Administración remota de sistemas críticos"
                ],
                correct: 3,
                explanation: "La administración de sistemas críticos implica un alto riesgo y requiere controles estrictos como MFA, túneles VPN y bastiones.",
                topic: "UT3-Gestión de Accesos"
            },
            {
                question: "¿Qué protocolo de autenticación y contabilidad se usa habitualmente con VPN?",
                options: [
                    "RADIUS",
                    "SMTP",
                    "SNMP",
                    "ARP"
                ],
                correct: 0,
                explanation: "RADIUS (Remote Authentication Dial-In User Service) centraliza la autenticación, autorización y contabilidad (AAA) en accesos remotos.",
                topic: "UT3-Protocolos de Seguridad"
            },
            {
                question: "¿Qué protocolo de transferencia segura se basa en SSH?",
                options: [
                    "FTP",
                    "SFTP",
                    "SMB",
                    "TFTP"
                ],
                correct: 1,
                explanation: "SFTP (SSH File Transfer Protocol) utiliza un canal seguro de SSH para transferir archivos de forma cifrada.",
                topic: "UT3-Transferencia de Archivos"
            },
            {
                question: "¿Qué servicio centraliza identidades y políticas en entornos Windows?",
                options: [
                    "MySQL",
                    "Squid",
                    "Active Directory",
                    "Apache"
                ],
                correct: 2,
                explanation: "Active Directory es el servicio de directorio de Microsoft que gestiona usuarios, equipos y políticas (GPO) de forma centralizada.",
                topic: "UT3-Gestión de Identidades"
            },
            {
                question: "¿Qué práctica mejora significativamente la seguridad en SSH?",
                options: [
                    "Usar Telnet en paralelo",
                    "Permitir root login directo",
                    "Abrir el puerto 23",
                    "Deshabilitar autenticación por contraseña"
                ],
                correct: 3,
                explanation: "Deshabilitar contraseñas y usar claves públicas/privadas mitiga ataques de fuerza bruta.",
                topic: "UT3-Administración Segura"
            },
            {
                question: "¿Qué sistema facilita contraseñas temporales o autenticación en Linux?",
                options: [
                    "DHCP",
                    "NTP",
                    "FTP",
                    "PAM"
                ],
                correct: 3,
                explanation: "PAM (Pluggable Authentication Modules) permite integrar diferentes métodos de autenticación en sistemas Unix/Linux.",
                topic: "UT3-Autenticación"
            },
            {
                question: "¿Qué protocolo VPN moderno destaca por su simplicidad y alto rendimiento?",
                options: [
                    "GRE",
                    "WireGuard",
                    "PPTP",
                    "L2F"
                ],
                correct: 1,
                explanation: "WireGuard es un protocolo VPN de última generación que ofrece mayor velocidad y código más simple que IPsec o OpenVPN.",
                topic: "UT3-Redes Privadas Virtuales"
            },
            {
                question: "¿Qué protocolo se usa para acceso remoto seguro a sistemas por línea de comandos?",
                options: [
                    "HTTP",
                    "FTP",
                    "SSH",
                    "Telnet"
                ],
                correct: 2,
                explanation: "SSH (Secure Shell) reemplaza a Telnet proporcionando cifrado y autenticación segura.",
                topic: "UT3-Administración Segura"
            },
            {
                question: "¿Qué función realiza un bastion host?",
                options: [
                    "Analiza logs",
                    "Balancea carga web",
                    "Actúa como servidor DNS",
                    "Filtra y controla acceso administrativo"
                ],
                correct: 3,
                explanation: "Un bastión actúa como punto de entrada único y controlado para administrar servidores en redes internas protegidas.",
                topic: "UT3-Arquitectura de Red"
            },
            {
                question: "¿Qué técnica evita que los navegadores realicen conexiones inseguras?",
                options: [
                    "SNMP",
                    "HSTS",
                    "RIP",
                    "NAT"
                ],
                correct: 1,
                explanation: "HSTS (HTTP Strict Transport Security) obliga al navegador a comunicarse con el servidor siempre mediante HTTPS.",
                topic: "UT3-Seguridad Web"
            },
            {
                question: "¿Qué comando permite comprobar certificados SSL/TLS en remoto?",
                options: [
                    "netstat",
                    "openssl s_client",
                    "traceroute",
                    "ping"
                ],
                correct: 1,
                explanation: "\"openssl s_client\" permite conectar a un servicio y visualizar su cadena de certificados y protocolos soportados.",
                topic: "UT3-Herramientas de Diagnóstico"
            },
            {
                question: "¿Qué zona de red aloja servicios que deben estar expuestos a Internet?",
                options: [
                    "DMZ",
                    "VLAN de gestión",
                    "Red de almacenamiento",
                    "Red interna"
                ],
                correct: 0,
                explanation: "La DMZ (Zona Desmilitarizada) separa los servicios públicos de la red interna privada.",
                topic: "UT3-Arquitectura de Red"
            },
            {
                question: "¿Qué riesgo principal enfrentan las comunicaciones en redes públicas?",
                options: [
                    "Ataques MITM y exposición de datos",
                    "Redundancia de hardware",
                    "Alta disponibilidad",
                    "Balanceo de carga"
                ],
                correct: 0,
                explanation: "En redes públicas, los atacantes pueden realizar ataques Man-In-The-Middle (MITM) para interceptar tráfico no cifrado.",
                topic: "UT3-Amenazas de Red"
            },
            {
                question: "¿Qué modo de VPN es el estándar para interconectar sedes (site-to-site)?",
                options: [
                    "IPsec",
                    "WireGuard",
                    "SSL",
                    "PPTP"
                ],
                correct: 0,
                explanation: "IPsec es el protocolo más robusto y utilizado para crear túneles permanentes entre oficinas o centros de datos.",
                topic: "UT3-Redes Privadas Virtuales"
            },
            {
                question: "¿Qué ataque se basa en suplantar direcciones de la tabla ARP?",
                options: [
                    "Sniffing DNS",
                    "ARP spoofing",
                    "Buffer overflow",
                    "SQL injection"
                ],
                correct: 1,
                explanation: "El ARP spoofing engaña a los equipos de una red local para que envíen su tráfico al atacante.",
                topic: "UT3-Amenazas de Red"
            },
            {
                question: "¿Qué control impide los movimientos laterales en redes segmentadas?",
                options: [
                    "NAT sin reglas",
                    "Broadcast",
                    "ACLs",
                    "Hub"
                ],
                correct: 2,
                explanation: "Las ACLs (Access Control Lists) filtran el tráfico entre segmentos de red, limitando el acceso solo a lo necesario.",
                topic: "UT3-Segmentación de Red"
            },
            {
                question: "¿Qué mecanismo de autenticación es considerado el más seguro actualmente?",
                options: [
                    "MFA",
                    "Contraseña simple",
                    "Usuario/clave única",
                    "IP estática"
                ],
                correct: 0,
                explanation: "El MFA (Multi-Factor Authentication) añade capas adicionales que protegen la cuenta incluso si la contraseña es robada.",
                topic: "UT3-Autenticación"
            },
            {
                question: "¿Qué algoritmo utiliza WireGuard para garantizar un cifrado moderno y eficiente?",
                options: [
                    "3DES",
                    "RC4",
                    "ChaCha20-Poly1305",
                    "DES"
                ],
                correct: 2,
                explanation: "WireGuard utiliza ChaCha20 para cifrado y Poly1305 para autenticación, ofreciendo mayor seguridad y velocidad que algoritmos antiguos.",
                topic: "UT3-Criptografía"
            },
            {
                question: "¿En qué segmento de red deben ubicarse los servidores críticos que no requieren acceso desde Internet?",
                options: [
                    "Red interna protegida",
                    "Zona pública",
                    "DMZ",
                    "Internet"
                ],
                correct: 0,
                explanation: "Los servidores críticos internos deben estar aislados en redes privadas sin exposición directa al exterior.",
                topic: "UT3-Arquitectura de Red"
            },
            {
                question: "¿Qué funcionalidad principal tiene un servidor de salto o Bastion Host?",
                options: [
                    "Balanceo de carga",
                    "Servidor de nombres",
                    "Filtro y control de acceso administrativo",
                    "Analizador de registros"
                ],
                correct: 2,
                explanation: "Permite centralizar, auditar y securizar las conexiones remotas de los administradores hacia la infraestructura interna.",
                topic: "UT3-Administración Segura"
            }
        ],

        ut4: [
    {
        question: "¿Cuál es la función principal de un cortafuegos (firewall)?",
        options: [
            "Únicamente funcionar en redes locales",
            "Controlar el tráfico entre zonas con distintos niveles de confianza",
            "Sustituir al antivirus del equipo",
            "Solo gestionar entornos cloud"
        ],
        correct: 1,
        explanation: "Un cortafuegos actúa como una barrera que inspecciona y filtra el tráfico basado en políticas de seguridad entre diferentes redes.",
        topic: "UT4-Seguridad Perimetral"
    },
    {
        question: "¿Qué implica el principio de diseño 'deny-by-default'?",
        options: [
            "Permitir todo el tráfico por defecto",
            "No aplicar ninguna regla de filtrado",
            "Bloquear todo lo que no esté explícitamente permitido",
            "Permitir solo el tráfico de administración"
        ],
        correct: 2,
        explanation: "Es una postura de seguridad donde todo el tráfico se deniega excepto aquel que ha sido autorizado específicamente.",
        topic: "UT4-Políticas de Seguridad"
    },
    {
        question: "¿Qué ataques protegen específicamente los cortafuegos de aplicación (WAF)?",
        options: [
            "Ataques de denegación de servicio físico",
            "Fallos en el hardware del servidor",
            "Solo bloqueo de direcciones IP",
            "Tráfico HTTP/HTTPS y ataques como XSS o SQLi"
        ],
        correct: 3,
        explanation: "Los firewalls de capa de aplicación inspeccionan el contenido del tráfico web para detectar ataques complejos como inyecciones.",
        topic: "UT4-Seguridad de Aplicación"
    },
    {
        question: "¿Cuál es la característica principal del filtrado 'stateful'?",
        options: [
            "Solo analiza encabezados de forma aislada",
            "Mantiene información de las conexiones activas y su estado",
            "Se utiliza exclusivamente en switches de capa 2",
            "No requiere memoria para funcionar"
        ],
        correct: 1,
        explanation: "El filtrado de estado permite al firewall saber si un paquete es parte de una conexión legítima ya establecida.",
        topic: "UT4-Tipos de Firewall"
    },
    {
        question: "¿Para qué se utiliza comúnmente una DMZ (Zona Desmilitarizada)?",
        options: [
            "Para alojar servicios públicos aislados de la red interna",
            "Para sustituir el uso de NAT",
            "Como parte interna e invisible del firewall",
            "Para almacenar bases de datos confidenciales sin acceso externo"
        ],
        correct: 0,
        explanation: "La DMZ separa los servidores que deben ser accesibles desde Internet de la red privada interna para mitigar riesgos.",
        topic: "UT4-Arquitectura de Red"
    },
    {
        question: "¿Qué funcionalidades añade un NGFW (Next-Generation Firewall)?",
        options: [
            "Solo bloqueo de puertos y protocolos",
            "No realiza inspección de ningún tipo",
            "Control por identidad e inspección profunda de aplicaciones",
            "Funciona exclusivamente como un hub"
        ],
        correct: 2,
        explanation: "Los NGFW van más allá del filtrado de paquetes, incluyendo IPS, control de aplicaciones y visibilidad de usuarios.",
        topic: "UT4-Tipos de Firewall"
    },
    {
        question: "¿Qué es UFW en entornos Linux?",
        options: [
            "Un hardware firewall de alto rendimiento",
            "Una herramienta simplificada para gestionar reglas de cortafuegos",
            "Un sistema operativo para servidores",
            "Un antivirus para distribuciones Debian"
        ],
        correct: 1,
        explanation: "Uncomplicated Firewall (UFW) es una interfaz para iptables diseñada para facilitar la configuración del firewall.",
        topic: "UT4-Herramientas de Seguridad"
    },
    {
        question: "¿Cómo se pueden configurar las reglas en un sistema pfSense?",
        options: [
            "Solo mediante líneas de comandos (CLI)",
            "No permite realizar filtrado de paquetes",
            "Mediante una interfaz gráfica basada en web",
            "Únicamente a través de archivos de texto plano"
        ],
        correct: 2,
        explanation: "pfSense es una distribución de firewall de código abierto muy popular por su potente interfaz web de gestión.",
        topic: "UT4-Herramientas de Seguridad"
    },
    {
        question: "¿Por qué es importante documentar las reglas de un firewall?",
        options: [
            "Solo es necesario en entornos cloud",
            "Para incluir justificación, propietario y facilitar auditorías",
            "No es una práctica recomendada",
            "Para aumentar la velocidad de procesamiento"
        ],
        correct: 1,
        explanation: "La documentación permite entender por qué existe una regla y quién es el responsable, evitando configuraciones obsoletas o peligrosas.",
        topic: "UT4-Gestión de Reglas"
    },
    {
        question: "¿Qué beneficio aporta la automatización de alertas en un firewall?",
        options: [
            "Incrementa los falsos positivos",
            "Reduce el tiempo medio de detección de incidentes",
            "No afecta en absoluto a la seguridad",
            "Sustituye la necesidad de tener reglas"
        ],
        correct: 1,
        explanation: "Las alertas automáticas permiten una respuesta rápida ante intentos de intrusión o anomalías de red.",
        topic: "UT4-Monitorización"
    },
    {
        question: "¿Qué permite verificar el análisis de logs del firewall?",
        options: [
            "La eficacia de las reglas aplicadas y detectar ataques",
            "La velocidad del procesador del servidor",
            "Solo sirve para cumplir con requisitos legales",
            "No genera datos útiles para el administrador"
        ],
        correct: 0,
        explanation: "Los registros (logs) son esenciales para auditar qué tráfico ha sido permitido o denegado y por qué.",
        topic: "UT4-Monitorización"
    },
    {
        question: "¿Qué restringen las políticas de salida (egress filtering)?",
        options: [
            "Únicamente el tráfico entrante",
            "Comunicaciones desde la red interna hacia el exterior",
            "No se utilizan en firewalls modernos",
            "Solo el tráfico entre redes locales"
        ],
        correct: 1,
        explanation: "El filtrado de salida evita que equipos comprometidos se comuniquen con servidores de comando y control (C2).",
        topic: "UT4-Políticas de Seguridad"
    },
    {
        question: "¿En qué consiste el mantenimiento preventivo de un cortafuegos?",
        options: [
            "Solo en la reinstalación anual del sistema",
            "Revisión de reglas obsoletas y realización de backups periódicos",
            "No requiere mantenimiento una vez configurado",
            "Desactivar las reglas durante las horas de poco tráfico"
        ],
        correct: 1,
        explanation: "El mantenimiento asegura que el firewall funcione correctamente y que las reglas sigan siendo necesarias y seguras.",
        topic: "UT4-Gestión de Seguridad"
    },
    {
        question: "¿En qué capas del modelo OSI opera el filtrado por paquetes tradicional?",
        options: [
            "Capa de aplicación únicamente",
            "Capa física y de enlace",
            "Capas de red y transporte",
            "Solo en la capa de sesión"
        ],
        correct: 2,
        explanation: "El filtrado por paquetes analiza direcciones IP (Red) y números de puerto (Transporte).",
        topic: "UT4-Fundamentos de Red"
    },
    {
        question: "¿Cómo ayuda el principio de mínimo privilegio en un firewall?",
        options: [
            "Permitiendo todo el tráfico para no interrumpir el servicio",
            "No es aplicable a las reglas de red",
            "Reduciendo la exposición de servicios al mínimo necesario",
            "Otorgando acceso total a todos los usuarios de la red"
        ],
        correct: 2,
        explanation: "Consiste en abrir solo los puertos y protocolos estrictamente necesarios para el funcionamiento del negocio.",
        topic: "UT4-Políticas de Seguridad"
    },
    {
        question: "¿Cuál es la recomendación para el almacenamiento de logs?",
        options: [
            "Mantenerlos solo en el almacenamiento local del firewall",
            "No almacenarlos para ahorrar espacio en disco",
            "Enviarlos a un sistema centralizado (SIEM) para correlación",
            "Borrarlos cada 24 horas"
        ],
        correct: 2,
        explanation: "La centralización protege los logs en caso de que el firewall sea comprometido y facilita el análisis global.",
        topic: "UT4-Monitorización"
    },
    {
        question: "¿Dónde deben realizarse las pruebas de nuevas reglas de firewall?",
        options: [
            "Directamente en el entorno de producción",
            "En entornos de staging o laboratorio antes de producción",
            "Solo con usuarios reales para ver si falla",
            "No es necesario realizar pruebas previas"
        ],
        correct: 1,
        explanation: "Probar en staging evita caídas accidentales de servicios críticos por reglas mal configuradas.",
        topic: "UT4-Gestión de Cambios"
    },
    {
        question: "¿Qué ventaja ofrecen las ACL (Listas de Control de Acceso) estructuradas?",
        options: [
            "No son aplicables a firewalls modernos",
            "Facilitan auditorías y el rollback de configuraciones",
            "Hacen que el firewall sea más lento",
            "No influyen en la gestión de la seguridad"
        ],
        correct: 1,
        explanation: "Una estructura clara permite revertir cambios erróneos fácilmente y entender el flujo del tráfico.",
        topic: "UT4-Gestión de Reglas"
    },
    {
        question: "¿Qué es el 'shadowing' de reglas en un cortafuegos?",
        options: [
            "Un método de cifrado de contraseñas",
            "Un fallo de hardware en los puertos",
            "Cuando una regla superior invalida una inferior por ser más genérica",
            "Un tipo de ataque de denegación de servicio"
        ],
        correct: 2,
        explanation: "El shadowing ocurre cuando el orden de las reglas impide que una regla específica se ejecute porque otra anterior ya ha procesado ese tráfico.",
        topic: "UT4-Troubleshooting"
    },
    {
        question: "¿Qué debe incluir la documentación técnica final de un firewall?",
        options: [
            "Solo los logs de la última hora",
            "Únicamente el manual del fabricante",
            "Inventario, justificación de reglas y resultados de pruebas",
            "Ninguna de las anteriores es correcta"
        ],
        correct: 2,
        explanation: "La documentación completa es vital para la continuidad del negocio y la transferencia de conocimiento entre equipos técnicos.",
        topic: "UT4-Gestión de Seguridad"
    }
],
ut5: [
    {
        question: "¿Qué es un servidor proxy?",
        options: [
            "Un dispositivo que solo conecta routers",
            "Un intermediario entre un cliente y un servidor",
            "Un software que sustituye al sistema operativo",
            "Una herramienta que no se aplica a redes internas"
        ],
        correct: 1,
        explanation: "El proxy recibe las peticiones de los clientes y las reenvía a los servidores de destino, actuando como punto intermedio.",
        topic: "UT5-Fundamentos de Proxy"
    },
    {
        question: "¿Cuál es la característica principal del proxy transparente?",
        options: [
            "Requiere configurar el archivo proxy.pac en cada cliente",
            "Solo funciona en modo inverso",
            "No requiere configuración manual en el equipo cliente",
            "Solo es compatible con navegadores antiguos"
        ],
        correct: 2,
        explanation: "El tráfico se redirige al proxy a nivel de red (normalmente mediante el firewall), por lo que el usuario no percibe su presencia.",
        topic: "UT5-Configuración de Proxy"
    },
    {
        question: "¿Para qué se utiliza principalmente un proxy inverso (Reverse Proxy)?",
        options: [
            "Para que los empleados naveguen por Internet",
            "Para publicar servicios internos de forma segura hacia el exterior",
            "Únicamente para la resolución de nombres DNS",
            "Para bloquear el acceso físico a los servidores"
        ],
        correct: 1,
        explanation: "Protege los servidores internos al recibir las peticiones externas y distribuirlas, ocultando la estructura de la red privada.",
        topic: "UT5-Tipos de Proxy"
    },
    {
        question: "¿Qué software es un estándar para proxy-cache en sistemas Linux?",
        options: [
            "Photoshop",
            "Squid",
            "Windows Media Player",
            "MySQL"
        ],
        correct: 1,
        explanation: "Squid es una herramienta de código abierto muy robusta especializada en el filtrado y caché de tráfico HTTP/HTTPS.",
        topic: "UT5-Herramientas"
    },
    {
        question: "¿Qué ventaja principal ofrece Nginx como proxy?",
        options: [
            "Solo puede actuar como firewall",
            "Destaca por su alto rendimiento como proxy inverso y balanceador",
            "No permite gestionar tráfico cifrado",
            "Sustituye por completo al sistema operativo"
        ],
        correct: 1,
        explanation: "Nginx es conocido por su eficiencia en el manejo de conexiones simultáneas y su capacidad para servir contenido estático.",
        topic: "UT5-Herramientas"
    },
    {
        question: "¿Puede Apache funcionar como servidor proxy?",
        options: [
            "No, es exclusivamente un servidor web estático",
            "Solo si se desactiva el protocolo SSL",
            "Sí, mediante el uso de módulos como mod_proxy",
            "Solo en versiones para dispositivos móviles"
        ],
        correct: 2,
        explanation: "Aunque es un servidor web, Apache es muy versátil y puede configurarse como proxy mediante sus módulos específicos.",
        topic: "UT5-Herramientas"
    },
    {
        question: "¿Qué problema presenta la autenticación basada únicamente en la dirección IP?",
        options: [
            "Solo funciona en sistemas operativos Windows",
            "No ofrece un control real por identidad de usuario",
            "Hace que la conexión sea un 50% más lenta",
            "Requiere hardware adicional en cada cliente"
        ],
        correct: 1,
        explanation: "La IP identifica a la máquina, pero no a la persona; varios usuarios en un mismo equipo compartirían los mismos permisos.",
        topic: "UT5-Autenticación"
    },
    {
        question: "¿Qué permite la integración de un proxy con LDAP?",
        options: [
            "Aumentar la velocidad de la CPU",
            "Integrar el acceso con directorios corporativos de usuarios",
            "Deshabilitar la necesidad de contraseñas",
            "Solo funciona con servidores Nginx"
        ],
        correct: 1,
        explanation: "LDAP permite que el proxy valide las credenciales de los usuarios contra una base de datos centralizada como Active Directory.",
        topic: "UT5-Gestión de Identidades"
    },
    {
        question: "¿Qué significa el término SSO?",
        options: [
            "Secure Socket Output",
            "Single Sign-On (Inicio de sesión único)",
            "Shared System Object",
            "Simple Service Operator"
        ],
        correct: 1,
        explanation: "SSO permite que un usuario se autentique una sola vez para acceder a múltiples sistemas relacionados.",
        topic: "UT5-Autenticación"
    },
    {
        question: "¿Cuál es un riesgo conocido del uso de proxys transparentes?",
        options: [
            "No pueden interceptar tráfico HTTP",
            "Pueden generar conflictos técnicos con el tráfico HTTPS cifrado",
            "Solo afectan a la navegación desde smartphones",
            "Hacen que los archivos descargados ocupen más espacio"
        ],
        correct: 1,
        explanation: "Al intentar interceptar tráfico SSL/TLS sin configuración en el cliente, se suelen producir errores de certificado.",
        topic: "UT5-Configuración de Proxy"
    },
    {
        question: "¿Para qué sirven los filtros de contenido en un proxy?",
        options: [
            "Para acelerar la descarga de vídeos",
            "Para bloquear categorías de sitios web (ej. juegos, redes sociales)",
            "Solo para limitar el ancho de banda",
            "Para limpiar el polvo del hardware del servidor"
        ],
        correct: 1,
        explanation: "Permiten aplicar políticas de uso aceptable bloqueando dominios por su temática.",
        topic: "UT5-Políticas de Seguridad"
    },
    {
        question: "¿Qué función tienen las listas blancas (whitelists) en el filtrado?",
        options: [
            "Bloquear todo el tráfico de la red",
            "Permitir el acceso garantizado a servicios críticos o seguros",
            "Eliminar los logs de navegación automáticamente",
            "Solo se usan para direcciones de correo electrónico"
        ],
        correct: 1,
        explanation: "Las listas blancas contienen excepciones que siempre están permitidas, independientemente de otros filtros.",
        topic: "UT5-Políticas de Seguridad"
    },
    {
        question: "¿Por qué es vital el análisis de los logs en un servidor proxy?",
        options: [
            "Para diagnosticar errores de caché o fallos en la autenticación",
            "No genera ningún dato útil para el administrador",
            "Solo sirve para ver qué empleados trabajan más",
            "Para reducir el consumo eléctrico del equipo"
        ],
        correct: 0,
        explanation: "Los logs permiten rastrear problemas de acceso y auditar la actividad para detectar posibles brechas de seguridad.",
        topic: "UT5-Monitorización"
    },
    {
        question: "¿Qué importancia tienen las pruebas desde el lado del cliente?",
        options: [
            "Solo sirven para que los usuarios pierdan tiempo",
            "Permiten reproducir y validar la experiencia real del usuario",
            "No detectan fallos de configuración",
            "Son obligatorias por ley cada hora"
        ],
        correct: 1,
        explanation: "Verificar desde el cliente asegura que las reglas de filtrado y autenticación funcionan según lo previsto.",
        topic: "UT5-Gestión de Operaciones"
    },
    {
        question: "¿Qué herramientas se suelen usar para visualizar métricas de rendimiento del proxy?",
        options: [
            "Editores de texto como Notepad",
            "Grafana y Prometheus",
            "Programas de diseño gráfico",
            "Software de contabilidad"
        ],
        correct: 1,
        explanation: "Prometheus recolecta los datos y Grafana los visualiza en paneles gráficos intuitivos.",
        topic: "UT5-Monitorización"
    },
    {
        question: "¿Para qué se realizan pruebas de rendimiento (stress test) en un proxy?",
        options: [
            "Para determinar la capacidad máxima y los puntos de saturación",
            "Solo para comprobar si el cable de red está conectado",
            "No afectan en nada a la configuración final",
            "Para cambiar el color de la interfaz de usuario"
        ],
        correct: 0,
        explanation: "Ayudan a saber cuántos usuarios simultáneos puede soportar el servidor antes de degradar el servicio.",
        topic: "UT5-Gestión de Operaciones"
    },
    {
        question: "¿Qué debe incluir una documentación correcta del servidor proxy?",
        options: [
            "Solo una lista de las webs visitadas",
            "Configuración detallada y un registro de cambios versionado",
            "No es necesario documentar si el sistema funciona bien",
            "La biografía del administrador del sistema"
        ],
        correct: 1,
        explanation: "El control de versiones y la documentación técnica facilitan el mantenimiento y la recuperación ante desastres.",
        topic: "UT5-Documentación"
    },
    {
        question: "¿Cómo beneficia el SSO a la seguridad y experiencia de usuario?",
        options: [
            "Haciendo que el usuario tenga que recordar más claves",
            "Mejora la experiencia al reducir el número de inicios de sesión",
            "Solo es útil en entornos de nube pública",
            "No tiene aplicación real en el uso de proxys"
        ],
        correct: 1,
        explanation: "Reduce la fatiga de contraseñas y centraliza la gestión de accesos.",
        topic: "Autenticación"
    },
    {
        question: "¿Qué requiere la gestión de listas negras y blancas?",
        options: [
            "Se actualizan solas y nunca fallan",
            "No requieren ningún tipo de revisión humana",
            "Revisión y actualización constantes para ser efectivas",
            "Solo se configuran una vez al instalar el servidor"
        ],
        correct: 2,
        explanation: "Internet cambia constantemente; lo que ayer era seguro hoy puede no serlo, y viceversa.",
        topic: "UT5-Gestión de Seguridad"
    },
    {
        question: "¿Cuál es el propósito de mantener guías de administración actualizadas?",
        options: [
            "Solo sirve para la formación de nuevos empleados",
            "Facilitar una operación segura y consistente del sistema",
            "No influye en la seguridad general de la empresa",
            "Es un requisito que se puede ignorar"
        ],
        correct: 1,
        explanation: "Las guías aseguran que los procedimientos de seguridad se sigan siempre de la misma manera, evitando errores humanos.",
        topic: "UT5-Documentación"
    }
],
ut6: [
    {
        question: "¿Cómo se define y mide habitualmente la alta disponibilidad (HA)?",
        options: [
            "Como el porcentaje de tiempo operativo de un servicio",
            "Solo mediante la potencia del hardware utilizado",
            "Depende exclusivamente del proveedor de Internet",
            "Como el número de archivos almacenados en el servidor"
        ],
        correct: 0,
        explanation: "La disponibilidad se expresa mediante \"nueves\" (ej. 99.9%), representando el tiempo que el servicio está accesible frente al tiempo total.",
        topic: "UT6-Fundamentos de HA"
    },
    {
        question: "¿Qué implica el concepto de 'tolerancia a fallos'?",
        options: [
            "Que el sistema se detiene ante cualquier error de red",
            "Que el sistema continúa funcionando pese a errores parciales",
            "Que no influye en la disponibilidad del servicio",
            "Es una técnica que solo se aplica al cableado físico"
        ],
        correct: 1,
        explanation: "Un sistema tolerante a fallos utiliza redundancia para asegurar que un error en un componente no provoque la caída de todo el sistema.",
        topic: "UT6-Fundamentos de HA"
    },
    {
        question: "¿Qué función tienen los SLA (Service Level Agreements)?",
        options: [
            "Solo se aplican en entornos de nube pública",
            "No se pueden medir ni auditar",
            "Definen los compromisos de disponibilidad y tiempos de respuesta",
            "Sustituyen a las copias de seguridad"
        ],
        correct: 2,
        explanation: "Los SLA son acuerdos contractuales que garantizan un nivel mínimo de servicio y penalizaciones si no se cumplen.",
        topic: "UT6-Gestión de Servicio"
    },
    {
        question: "¿Cuál es el propósito principal de configurar un sistema RAID?",
        options: [
            "Aumentar únicamente la velocidad de descarga",
            "Combinar discos para lograr redundancia o mejorar el rendimiento",
            "No aporta nada a la continuidad de negocio",
            "Sustituir la necesidad de un antivirus"
        ],
        correct: 1,
        explanation: "RAID protege los datos ante el fallo físico de uno o más discos dependiendo del nivel utilizado (RAID 1, 5, 10, etc.).",
        topic: "UT6-Almacenamiento Redundante"
    },
    {
        question: "¿Qué ventaja ofrecen las fuentes de alimentación redundantes (PSU)?",
        options: [
            "Solo aumentan el consumo eléctrico sin beneficio real",
            "No afectan a la disponibilidad del servidor",
            "Previenen caídas del sistema ante el fallo de una unidad de potencia",
            "Hacen que el servidor sea inmune a virus"
        ],
        correct: 2,
        explanation: "Si una fuente falla, la otra asume la carga inmediatamente sin que el servidor se apague.",
        topic: "UT6-Redundancia de Hardware"
    },
    {
        question: "¿Qué facilitan los contenedores en entornos de alta disponibilidad?",
        options: [
            "No se pueden usar para servicios en producción",
            "Permiten la autorecuperación y el escalado rápido de servicios",
            "Solo sirven para realizar pruebas de desarrollo",
            "Hacen que el sistema sea más difícil de recuperar"
        ],
        correct: 1,
        explanation: "Gracias a orquestadores, si un contenedor falla, se puede levantar otro automáticamente en segundos.",
        topic: "UT6-Virtualización y Contenedores"
    },
    {
        question: "¿Qué permite realizar la 'migración en caliente' (Live Migration)?",
        options: [
            "Mover máquinas virtuales entre servidores sin detener el servicio",
            "Solo funciona si los servidores están apagados",
            "Requiere un reinicio completo del sistema operativo",
            "Solo es posible en entornos de almacenamiento local"
        ],
        correct: 0,
        explanation: "Permite realizar mantenimientos en el hardware físico moviendo la carga de trabajo a otro nodo sin impacto para el usuario.",
        topic: "UT6-Virtualización"
    },
    {
        question: "¿En qué consiste un clúster de tipo Activo/Pasivo?",
        options: [
            "Todos los nodos procesan carga simultáneamente",
            "No tiene mecanismos de conmutación por error (failover)",
            "Implica nodos en standby listos para asumir la carga si el principal falla",
            "Es un sistema que no requiere almacenamiento compartido"
        ],
        correct: 2,
        explanation: "El nodo pasivo monitoriza al activo y toma el control solo si detecta que el activo ha dejado de dar servicio.",
        topic: "UT6-Clústeres"
    },
    {
        question: "¿Qué es el mecanismo de 'heartbeat' en un clúster?",
        options: [
            "Una técnica para limpiar los discos duros",
            "Un pulso de red para detectar la caída de un nodo",
            "Un sistema que solo verifica la temperatura del CPD",
            "No interviene en el proceso de failover"
        ],
        correct: 1,
        explanation: "Es una señal periódica entre nodos; si se deja de recibir, el clúster inicia el proceso de recuperación.",
        topic: "UT6-Clústeres"
    },
    {
        question: "¿Qué funcionalidad aporta HAProxy en una arquitectura de red?",
        options: [
            "Es un software que solo funciona en la capa 3",
            "No realiza monitoreo de salud de los servidores",
            "Permite balanceo de carga L4/L7 con comprobaciones de salud (health checks)",
            "Es un sistema de archivos distribuido"
        ],
        correct: 2,
        explanation: "Distribuye el tráfico entre varios servidores y deja de enviar peticiones a aquellos que no responden correctamente.",
        topic: "UT6-Balanceo de Carga"
    },
    {
        question: "¿Cómo se utiliza Nginx en el contexto de la disponibilidad?",
        options: [
            "Solo sirve para servir imágenes estáticas",
            "Como proxy inverso y balanceador de carga eficiente",
            "No es compatible con protocolos seguros como HTTPS",
            "Sustituye a la memoria RAM del sistema"
        ],
        correct: 1,
        explanation: "Nginx puede distribuir el tráfico hacia un pool de servidores internos para mejorar la respuesta y redundancia.",
        topic: "UT6-Balanceo de Carga"
    },
    {
        question: "¿Cuál es la diferencia principal entre NAS y SAN?",
        options: [
            "NAS ofrece almacenamiento a nivel de archivos y SAN a nivel de bloques",
            "Son términos equivalentes y se configuran igual",
            "SAN solo se usa para copias de seguridad en cinta",
            "NAS es mucho más rápido que SAN en todos los casos"
        ],
        correct: 0,
        explanation: "NAS se accede vía red (como una carpeta compartida) y SAN se percibe por el SO como un disco físico local.",
        topic: "UT6-Almacenamiento"
    },
    {
        question: "¿Qué beneficio tiene la replicación síncrona de datos?",
        options: [
            "Aumenta la probabilidad de pérdida de datos",
            "Reduce el RPO (punto de recuperación) casi a cero",
            "No replica datos en tiempo real",
            "Hace que la escritura sea instantánea sin confirmar en el destino"
        ],
        correct: 1,
        explanation: "Asegura que los datos se escriban en ambos sitios antes de confirmar la operación, garantizando consistencia total.",
        topic: "UT6-Continuidad de Negocio"
    },
    {
        question: "¿Qué permite el Software RAID frente al Hardware RAID?",
        options: [
            "No provee ninguna característica de alta disponibilidad",
            "Solo está disponible para sistemas Windows",
            "Ofrece redundancia utilizando los recursos del SO sin hardware propietario",
            "Es siempre mucho más rápido que una controladora física"
        ],
        correct: 2,
        explanation: "Permite crear volúmenes redundantes en cualquier equipo, aunque consume ciclos de la CPU principal.",
        topic: "UT6-Almacenamiento Redundante"
    },
    {
        question: "¿Cuál es el objetivo de agrupar recursos en un clúster?",
        options: [
            "Lograr alta disponibilidad y escalabilidad",
            "Solo se utiliza para computación científica de alto rendimiento (HPC)",
            "No mejora la productividad ni la continuidad",
            "Reducir el número de direcciones IP de la empresa"
        ],
        correct: 0,
        explanation: "Un clúster permite que varios servidores trabajen como una sola unidad para soportar fallos o aumentar potencia.",
        topic: "UT6-Clústeres"
    },
    {
        question: "¿Cómo implementa Kubernetes la alta disponibilidad?",
        options: [
            "Solo funciona con motores Docker antiguos",
            "Mediante patrones de réplicas y sondas de salud (probes)",
            "No soporta balanceo de carga interno",
            "Depende de que el administrador reinicie los procesos a mano"
        ],
        correct: 1,
        explanation: "Kubernetes monitoriza los pods y asegura que siempre esté ejecutándose el número de réplicas deseado.",
        topic: "UT6-Orquestación"
    },
    {
        question: "¿En qué consiste el escalado horizontal?",
        options: [
            "En aumentar la memoria RAM de un único servidor",
            "En agregar más instancias o nodos al pool de servidores",
            "No afecta a la resiliencia del sistema",
            "Solo sirve para reducir costes de licencias"
        ],
        correct: 1,
        explanation: "Al añadir más máquinas, si una falla, el impacto es menor y la capacidad total de respuesta aumenta.",
        topic: "UT6-Escalabilidad"
    },
    {
        question: "¿Qué validan las pruebas de resiliencia (Chaos Engineering)?",
        options: [
            "El comportamiento del sistema ante fallos inesperados",
            "No son necesarias si el hardware es nuevo",
            "Solo se aplican a componentes físicos como cables",
            "Que la documentación sea bonita"
        ],
        correct: 0,
        explanation: "Simulan caídas de servicios o redes para asegurar que los mecanismos de HA responden como se espera.",
        topic: "UT6-Gestión de Fallos"
    },
    {
        question: "¿Qué se verifica durante un simulacro de DR (Disaster Recovery)?",
        options: [
            "Solo la velocidad de la conexión a Internet",
            "Los tiempos de recuperación reales (RTO) ante un desastre total",
            "No aportan mejoras a la configuración del sistema",
            "Que los empleados sepan usar el correo electrónico"
        ],
        correct: 1,
        explanation: "Permiten detectar fallos en el plan de recuperación antes de que ocurra una emergencia real.",
        topic: "UT6-Continuidad de Negocio"
    },
    {
        question: "¿Por qué es crucial mantener diagramas y runbooks actualizados?",
        options: [
            "No afecta a la operación diaria",
            "Solo sirve para pasar auditorías externas",
            "Mejora la capacidad de respuesta y reduce el error humano",
            "Es una tarea que debe evitarse para ahorrar tiempo"
        ],
        correct: 2,
        explanation: "En caso de fallo, los técnicos necesitan instrucciones claras y mapas de red precisos para restaurar el servicio rápidamente.",
        topic: "UT6-Documentación"
    }
],
ut7: [
    {
        question: "¿Qué principios fundamentales establece el RGPD?",
        options: [
            "Responsabilidad proactiva y derechos efectivos para los interesados",
            "No aplica en territorio español",
            "Se limita exclusivamente a la regulación de cookies",
            "Sustituye la necesidad de realizar copias de seguridad"
        ],
        correct: 0,
        explanation: "El Reglamento General de Protección de Datos (RGPD) exige que las organizaciones demuestren que cumplen con la normativa de forma activa.",
        topic: "UT7-Normativa"
    },
    {
        question: "¿Cuál es la relación entre la LOPDGDD y el RGPD?",
        options: [
            "La LOPDGDD sustituye completamente al RGPD",
            "La LOPDGDD adapta el RGPD europeo al contexto nacional español",
            "Solo es de aplicación para empresas públicas",
            "No tienen ninguna relación jurídica"
        ],
        correct: 1,
        explanation: "La Ley Orgánica 3/2018 (LOPDGDD) desarrolla y complementa los aspectos que el RGPD deja a discreción de los estados miembros.",
        topic: "UT7-Normativa"
    },
    {
        question: "¿Cuál es el plazo máximo para notificar una brecha de seguridad a la AEPD?",
        options: [
            "No existe un plazo definido",
            "72 horas tras tener constancia del incidente",
            "Solo si existen pérdidas económicas directas",
            "30 días naturales"
        ],
        correct: 1,
        explanation: "El RGPD obliga a notificar las quiebras de seguridad a la autoridad de control en un máximo de 72 horas, a menos que sea improbable que suponga un riesgo.",
        topic: "UT7-Gestión de Incidentes"
    },
    {
        question: "¿En qué consiste el derecho de portabilidad de los datos?",
        options: [
            "En el derecho a cambiar de operador telefónico gratis",
            "Solo se aplica a documentos impresos en papel",
            "Recibir los datos en un formato estructurado, de uso común y lectura mecánica",
            "Es un derecho opcional que las empresas pueden denegar"
        ],
        correct: 2,
        explanation: "Permite que el interesado pueda trasladar sus datos de un responsable a otro de forma sencilla y automatizada.",
        topic: "UT7-Derechos de los Interesados"
    },
    {
        question: "¿Qué técnicas son recomendadas para proteger la confidencialidad según la normativa?",
        options: [
            "El cifrado y la seudonimización de los datos",
            "No se consideran medidas técnicas válidas",
            "Solo son útiles si se aplican en las copias de seguridad",
            "Publicar los datos en la web corporativa"
        ],
        correct: 0,
        explanation: "Estas técnicas reducen el riesgo de identificación de los sujetos en caso de acceso no autorizado.",
        topic: "UT7-Medidas Técnicas"
    },
    {
        question: "¿Qué significan los modelos RBAC y ABAC?",
        options: [
            "Son protocolos de cifrado de extremo a extremo",
            "Control de acceso basado en roles (RBAC) y en atributos (ABAC)",
            "Sistemas de detección de incendios en el CPD",
            "No tienen aplicación en la seguridad de redes"
        ],
        correct: 1,
        explanation: "Son métodos para gestionar quién tiene permiso para acceder a qué recursos dentro de un sistema.",
        topic: "UT7-Control de Acceso"
    },
    {
        question: "¿Cuál es la función principal del Delegado de Protección de Datos (DPO)?",
        options: [
            "Realizar las copias de seguridad físicas",
            "Asesorar y supervisar de forma independiente el cumplimiento legal",
            "No tiene independencia funcional dentro de la empresa",
            "Sustituir al director de recursos humanos"
        ],
        correct: 1,
        explanation: "El DPO actúa como enlace entre la organización, los interesados y la autoridad de control (AEPD).",
        topic: "UT7-Gobierno de Seguridad"
    },
    {
        question: "¿Qué debe incluir obligatoriamente un contrato de encargo de tratamiento?",
        options: [
            "Solo las cláusulas de pago económicas",
            "Medidas de seguridad específicas y condiciones de subcontratación",
            "No son contratos obligatorios bajo el RGPD",
            "La lista de todos los empleados del cliente"
        ],
        correct: 1,
        explanation: "El responsable debe asegurar por contrato que el encargado tratará los datos siguiendo sus instrucciones y con seguridad suficiente.",
        topic: "UT7-Gestión de Proveedores"
    },
    {
        question: "¿A qué obliga la LSSI a los prestadores de servicios de la sociedad de la información?",
        options: [
            "Mantener datos de contacto y mecanismos de retirada de contenido ilícito",
            "Solo aplica a redes sociales con más de un millón de usuarios",
            "No tiene ningún efecto técnico en la configuración web",
            "A regalar el dominio .es a cada cliente"
        ],
        correct: 0,
        explanation: "La Ley de Servicios de la Sociedad de la Información regula aspectos como el comercio electrónico y la información mínima que debe mostrar una web.",
        topic: "UT7-Normativa"
    },
    {
        question: "¿Cuál es la regla principal para la gestión de cookies no técnicas?",
        options: [
            "Se pueden instalar siempre sin aviso previo",
            "Obtener el consentimiento informado y previo del usuario antes de su uso",
            "Solo requiere informar en el pie de página sin consentimiento",
            "No requieren consentimiento si son de terceros"
        ],
        correct: 1,
        explanation: "Salvo las estrictamente necesarias para el funcionamiento, el resto requieren el consentimiento explícito del usuario.",
        topic: "UT7-Privacidad Web"
    },
    {
        question: "¿En qué se basa la norma ISO 27001 para gestionar la seguridad?",
        options: [
            "Exclusivamente en el inventario de hardware",
            "En el ciclo PDCA y en la gestión de riesgos",
            "No es aplicable a empresas privadas",
            "En la instalación obligatoria de firewalls físicos"
        ],
        correct: 1,
        explanation: "ISO 27001 utiliza un Sistema de Gestión de Seguridad de la Información (SGSI) basado en la mejora continua.",
        topic: "UT7-Estándares y Certificación"
    },
    {
        question: "¿A quién es aplicable de forma obligatoria el Esquema Nacional de Seguridad (ENS)?",
        options: [
            "Solo a empresas del sector financiero",
            "A organismos públicos y sus proveedores tecnológicos",
            "Es un marco opcional para cualquier organización",
            "Únicamente a usuarios particulares"
        ],
        correct: 1,
        explanation: "El ENS establece los principios y requisitos para una protección adecuada de la información en la Administración Pública española.",
        topic: "UT7-Normativa"
    },
    {
        question: "¿Qué etapas componen el ciclo PDCA de mejora continua?",
        options: [
            "Plan, Do, Check y Act (Planificar, Hacer, Verificar, Actuar)",
            "Solo Planificar y Verificar",
            "Password, Data, Control y Access",
            "No es un ciclo aplicable a la seguridad"
        ],
        correct: 0,
        explanation: "Es la metodología fundamental para garantizar que los controles de seguridad se revisan y mejoran constantemente.",
        topic: "UT7-Gestión de Seguridad"
    },
    {
        question: "¿Por qué es necesario verificar los backups periódicamente?",
        options: [
            "No requieren verificación si el software no da error",
            "Para asegurar su integridad y la capacidad de restauración",
            "Solo se deben verificar si ya ha ocurrido un incidente",
            "Para aumentar el tamaño de los archivos"
        ],
        correct: 1,
        explanation: "Una copia de seguridad cuya integridad no ha sido probada no garantiza la disponibilidad de los datos ante un desastre.",
        topic: "UT7-Operaciones"
    },
    {
        question: "¿Cuál es la utilidad de las auditorías y revisiones periódicas?",
        options: [
            "Demostrar cumplimiento normativo y detectar debilidades",
            "No aportan ninguna evidencia útil para la dirección",
            "Solo deben realizarse una vez al fundar la empresa",
            "Sustituyen a la formación de los empleados"
        ],
        correct: 0,
        explanation: "Las auditorías son una herramienta de control para validar que las políticas se están cumpliendo realmente.",
        topic: "UT7-Cumplimiento"
    },
    {
        question: "¿Qué requisitos de posición debe cumplir un DPO en la empresa?",
        options: [
            "Debe tener independencia y acceso directo a la alta dirección",
            "Debe depender jerárquicamente del departamento de marketing",
            "No puede realizar funciones de auditoría",
            "Es una figura que solo actúa en casos de brechas de seguridad"
        ],
        correct: 0,
        explanation: "Para evitar conflictos de interés, el DPO debe reportar al nivel más alto de gestión de la entidad.",
        topic: "UT7-Gobierno de Seguridad"
    },
    {
        question: "¿Qué son los scripts o herramientas CMP (Consent Management Platform)?",
        options: [
            "Sistemas para borrar el historial del navegador automáticamente",
            "Herramientas que bloquean cookies hasta obtener el consentimiento del usuario",
            "Programas para espiar la navegación de los empleados",
            "Software para descifrar contraseñas de red"
        ],
        correct: 1,
        explanation: "Son las plataformas encargadas de gestionar el banner de cookies y guardar las preferencias de privacidad del usuario.",
        topic: "UT7-Privacidad Web"
    },
    {
        question: "¿Qué beneficio aporta documentar políticas y mantener logs detallados?",
        options: [
            "Facilitar auditorías y demostrar el principio de responsabilidad proactiva",
            "No influye en la seguridad, es puramente burocrático",
            "Hacer que el sistema operativo funcione más rápido",
            "Es una tarea que solo debe hacer el departamento legal"
        ],
        correct: 0,
        explanation: "La documentación es la evidencia física que permite demostrar ante un juez o autoridad que se tomaron las medidas adecuadas.",
        topic: "UT7-Cumplimiento"
    },
    {
        question: "¿Qué significa el acrónimo MFA?",
        options: [
            "Monitoreo de Fallos Automáticos",
            "Autenticación Multifactor (Multi-Factor Authentication)",
            "Gestión de Almacenamiento Masivo",
            "Mecanismo de Filtro de Aplicaciones"
        ],
        correct: 1,
        explanation: "Es la medida técnica que añade capas extra de seguridad más allá de la simple contraseña.",
        topic: "UT7-Identidad y Acceso"
    },
    {
        question: "¿Cuál es el pilar fundamental para una protección de datos efectiva a largo plazo?",
        options: [
            "Instalar el firewall más caro del mercado",
            "Una cultura de cumplimiento continuo y concienciación en toda la organización",
            "Depender exclusivamente de que el DPO trabaje mucho",
            "No tiene relevancia técnica, solo legal"
        ],
        correct: 1,
        explanation: "La seguridad es un proceso, no un producto; requiere que todo el personal entienda y respete las normas.",
        topic: "UT7-Cultura de Seguridad"
    }
        ]
        };
