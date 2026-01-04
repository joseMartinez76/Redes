const questionsDB = {
    ut1: [
        {
            question: "¿Qué memoria contiene el firmware inicial de un sistema?",
            options: ["Caché", "RAM", "ROM", "Virtual"],
            correct: 2,
            explanation: "La memoria ROM (Read Only Memory) almacena el firmware necesario para el arranque, como la BIOS o UEFI.",
            topic: "Memorias"
        },
        {
            question: "¿Qué memoria es volátil y almacena datos temporalmente?",
            options: ["Caché", "RAM", "Virtual", "ROM"],
            correct: 1,
            explanation: "La memoria RAM es volátil; pierde su contenido al apagar el equipo y se usa para datos de procesos activos.",
            topic: "Memorias"
        },
        {
            question: "¿Qué tecnología inalámbrica se usa para pagos contactless?",
            options: ["NFC", "Bluetooth", "Zigbee", "Wi-Fi"],
            correct: 0,
            explanation: "NFC (Near Field Communication) es una tecnología de corto alcance diseñada para el intercambio seguro de datos y pagos.",
            topic: "Conectividad"
        },
        {
            question: "¿Qué interfaz transmite audio y vídeo digital en televisores y consolas?",
            options: ["HDMI", "DisplayPort", "VGA", "DVI"],
            correct: 0,
            explanation: "HDMI es el estándar más común para audio y vídeo digital en el mercado de consumo doméstico.",
            topic: "Interfaces"
        },
        {
            question: "¿Qué bus transporta datos entre CPU, memoria y periféricos?",
            options: ["Bus de control", "Bus de datos", "Bus PCIe", "Bus de direcciones"],
            correct: 1,
            explanation: "El bus de datos es el camino físico por el que circulan los datos entre los componentes del sistema.",
            topic: "Arquitectura"
        },
        {
            question: "¿Qué firmware clásico inicializa el hardware al arrancar un PC?",
            options: ["CMOS", "UEFI", "BIOS", "POST"],
            correct: 2,
            explanation: "La BIOS (Basic Input/Output System) es el estándar clásico para la inicialización y arranque del hardware.",
            topic: "Firmware"
        },
        {
            question: "¿Qué dispositivo combina tecnología HDD con memoria flash?",
            options: ["SSD", "ROM", "SSHD", "RAM"],
            correct: 2,
            explanation: "Los SSHD (Solid State Hybrid Drive) usan platos magnéticos para capacidad y memoria flash para velocidad en datos frecuentes.",
            topic: "Almacenamiento"
        },
        {
            question: "¿Qué periférico es mixto, permitiendo entrada y salida?",
            options: ["Altavoces", "Ratón", "Teclado", "Pantalla táctil"],
            correct: 3,
            explanation: "La pantalla táctil es mixta: detecta las pulsaciones (entrada) y muestra la imagen (salida).",
            topic: "Periféricos"
        },
        {
            question: "¿Qué elemento de la CPU realiza operaciones matemáticas y lógicas?",
            options: ["ALU", "Registros", "Caché", "Unidad de Control"],
            correct: 0,
            explanation: "La ALU (Unidad Aritmético-Lógica) es la encargada de ejecutar todos los cálculos y comparaciones lógicas.",
            topic: "CPU"
        },
        {
            question: "¿Qué componente conecta todos los elementos del ordenador en un circuito principal?",
            options: ["CPU", "SSD", "HDD", "Placa base"],
            correct: 3,
            explanation: "La placa base (motherboard) es la plataforma principal que aloja y comunica a todos los demás componentes.",
            topic: "Componentes"
        },
        {
            question: "¿Qué arquitectura separa físicamente el bus de datos y el de instrucciones?",
            options: ["RISC", "Harvard", "Von Neumann", "CISC"],
            correct: 1,
            explanation: "La arquitectura Harvard utiliza buses independientes para instrucciones y datos, permitiendo accesos simultáneos.",
            topic: "Arquitectura"
        },
        {
            question: "¿Qué reemplazo moderno de la BIOS permite Secure Boot y discos >2TB?",
            options: ["POST", "CMOS", "Bootloader", "UEFI"],
            correct: 3,
            explanation: "UEFI es la interfaz de firmware moderna que supera las limitaciones de la antigua BIOS.",
            topic: "Firmware"
        },
        {
            question: "¿Qué dispositivo de almacenamiento no tiene partes móviles?",
            options: ["SSD", "DVD", "HDD", "Cinta magnética"],
            correct: 0,
            explanation: "Las unidades SSD utilizan memoria flash (semiconductores), eliminando platos giratorios y cabezales.",
            topic: "Almacenamiento"
        },
        {
            question: "¿Qué interfaz es preferida en entornos profesionales por soportar resoluciones altas y multimonitor?",
            options: ["DisplayPort", "VGA", "HDMI", "USB"],
            correct: 0,
            explanation: "DisplayPort ofrece mayor ancho de banda y mejores funciones para configuraciones de múltiples monitores profesionales.",
            topic: "Interfaces"
        },
        {
            question: "¿Qué periférico es considerado dispositivo de entrada?",
            options: ["Teclado", "Monitor", "Altavoces", "Impresora"],
            correct: 0,
            explanation: "El teclado es un dispositivo de entrada puro, ya que solo envía comandos del usuario al sistema.",
            topic: "Periféricos"
        },
        {
            question: "¿Qué prueba inicial verifica los componentes básicos del hardware?",
            options: ["POST", "Hand-off", "Kernel", "CMOS"],
            correct: 0,
            explanation: "El POST (Power-On Self-Test) es el chequeo diagnóstico que realiza el firmware al encender el equipo.",
            topic: "Arranque"
        },
        {
            question: "¿Qué arquitectura utiliza un único bus para instrucciones y datos?",
            options: ["Harvard", "ARM", "RISC", "Von Neumann"],
            correct: 3,
            explanation: "La arquitectura Von Neumann se caracteriza por usar el mismo bus y memoria para datos y programas.",
            topic: "Arquitectura"
        },
        {
            question: "¿Qué componente del sistema ejecuta instrucciones y coordina el funcionamiento global?",
            options: ["CPU", "HDD", "RAM", "Chipset"],
            correct: 0,
            explanation: "La CPU (Unidad Central de Procesamiento) es el 'cerebro' que procesa las instrucciones del software.",
            topic: "CPU"
        },
        {
            question: "¿Qué interfaz interna compacta se emplea en SSD NVMe?",
            options: ["SATA", "PCIe", "M.2", "IDE"],
            correct: 2,
            explanation: "El formato M.2 es el estándar actual para conectar discos SSD de alto rendimiento directamente a la placa.",
            topic: "Interfaces"
        },
        {
            question: "¿Qué conector interno se usa para discos duros tradicionales?",
            options: ["M.2", "PCIe", "USB header", "SATA"],
            correct: 3,
            explanation: "SATA es el estándar de conexión serie para discos duros mecánicos y SSD de formato 2.5 pulgadas.",
            topic: "Interfaces"
        }
    ],
    ut2: [
        {
            question: "¿Qué herramienta mide rendimiento de I/O en Linux con cargas personalizadas?",
            options: ["MemTest86", "fio", "stress-ng", "iperf3"],
            correct: 1,
            explanation: "fio (Flexible I/O tester) es la herramienta estándar en Linux para realizar benchmarks detallados de entrada y salida de datos.",
            topic: "Diagnóstico Linux"
        },
        {
            question: "¿Qué elemento debe conectarse siempre a tierra común para reducir ESD?",
            options: ["Destornillador", "Ventilador", "Tapete ESD", "GPU"],
            correct: 2,
            explanation: "Tanto el técnico como el equipo deben estar referenciados a una tierra común mediante el uso de tapetes y pulseras ESD.",
            topic: "Seguridad ESD"
        },
        {
            question: "¿Qué herramienta se usa para medir throughput de red entre dos hosts?",
            options: ["sensors", "fio", "iperf3", "smartctl"],
            correct: 2,
            explanation: "iperf3 es una herramienta para realizar mediciones en tiempo real del ancho de banda máximo alcanzable en redes IP.",
            topic: "Diagnóstico Red"
        },
        {
            question: "¿Qué acción permite actualizar la BIOS en placas con CPU no reconocida?",
            options: ["Instalar Windows", "BIOS Flashback", "Cambiar la GPU", "Formatear el disco"],
            correct: 1,
            explanation: "BIOS Flashback permite actualizar el firmware usando solo una memoria USB y la fuente de alimentación, sin necesidad de CPU o RAM.",
            topic: "Firmware"
        },
        {
            question: "¿Qué paso inicial es crítico al montar una CPU en socket LGA?",
            options: ["Conectar PSU", "Instalar RAM antes de CPU", "Alinear la marca triangular y asentar sin forzar", "Colocar pasta térmica primero"],
            correct: 2,
            explanation: "La alineación física mediante las muescas y el triángulo de orientación es vital para no doblar los pines del socket LGA.",
            topic: "Montaje"
        },
        {
            question: "¿Qué herramienta en Linux permite actualizar firmware de forma segura?",
            options: ["fdisk", "fwupd", "top", "htop"],
            correct: 1,
            explanation: "fwupd es el demonio de código abierto que permite actualizar el firmware de dispositivos en Linux de manera integrada.",
            topic: "Firmware"
        },
        {
            question: "¿Qué tipo de checklist asegura la compatibilidad entre CPU, RAM, GPU y PSU?",
            options: ["Registro de incidencias", "Checklist de compatibilidad", "Plan de mantenimiento", "Lista de compras"],
            correct: 1,
            explanation: "Un checklist de compatibilidad verifica que el socket, el chipset, las frecuencias y la potencia sean coherentes.",
            topic: "Planificación"
        },
        {
            question: "¿Qué certificación mínima es aconsejable en PSUs para estaciones de trabajo?",
            options: ["Sin certificación", "80 Plus Gold", "80 Plus White", "60 Plus"],
            correct: 1,
            explanation: "La certificación 80 Plus Gold garantiza una alta eficiencia energética, reduciendo el calor y el gasto eléctrico.",
            topic: "Componentes"
        },
        {
            question: "¿Qué comando en Linux lista discos y particiones detectadas?",
            options: ["lsblk", "top", "pwd", "ifconfig"],
            correct: 0,
            explanation: "lsblk lista información sobre todos los dispositivos de bloque disponibles o especificados en el sistema.",
            topic: "Comandos Linux"
        },
        {
            question: "¿Qué comando en Linux muestra información de CPU y flags?",
            options: ["lsusb", "lscpu", "dmesg", "uname -a"],
            correct: 1,
            explanation: "lscpu recoge información de la arquitectura de la CPU, como el número de núcleos, hilos y tipos de caché.",
            topic: "Comandos Linux"
        },
        {
            question: "¿Qué prueba se recomienda antes de montar la placa en el chasis?",
            options: ["CrystalDiskMark", "Cinebench", "Bench test", "MemTest86"],
            correct: 2,
            explanation: "Un 'Bench test' (montaje al aire) permite verificar que el sistema arranca correctamente antes de fijarlo al gabinete.",
            topic: "Montaje"
        },
        {
            question: "¿Qué documento operativo recoge procedimientos paso a paso para incidencias?",
            options: ["Factura", "Inventario", "Runbook", "Checklist de limpieza"],
            correct: 2,
            explanation: "Un Runbook es un catálogo de procedimientos operativos detallados para resolver problemas o realizar tareas rutinarias.",
            topic: "Documentación"
        },
        {
            question: "¿Qué herramienta permite verificar voltajes de la fuente de alimentación sin cargar el sistema?",
            options: ["PSU tester", "Tarjeta POST", "Cámara térmica", "Multímetro"],
            correct: 0,
            explanation: "Un PSU tester es un dispositivo rápido que indica si los raíles de 12V, 5V y 3.3V están dentro de los rangos correctos.",
            topic: "Herramientas"
        },
        {
            question: "¿Qué herramienta se utiliza para comprobar continuidad de la pulsera ESD?",
            options: ["PSU tester", "Tarjeta POST", "Tester de continuidad", "Cámara térmica"],
            correct: 2,
            explanation: "El tester de continuidad asegura que el cable de la pulsera tiene la resistencia adecuada y no está roto.",
            topic: "Herramientas"
        },
        {
            question: "¿Qué consumible es esencial para limpiar CPU y disipador antes de aplicar pasta térmica?",
            options: ["Alcohol isopropílico 99%", "Limpiador multiusos", "Agua destilada", "Silicona térmica"],
            correct: 0,
            explanation: "El alcohol isopropílico de alta pureza no deja residuos y se evapora rápidamente, siendo ideal para superficies electrónicas.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué parámetro debe habilitarse en BIOS para usar BitLocker?",
            options: ["Fast Boot", "TPM 2.0", "Virtualización", "Legacy USB"],
            correct: 1,
            explanation: "BitLocker requiere un chip TPM (Trusted Platform Module) habilitado para almacenar las claves de cifrado de forma segura.",
            topic: "Configuración"
        },
        {
            question: "¿Qué patrón de apriete se recomienda al fijar un disipador?",
            options: ["Cruzado", "Circular", "Paralelo", "Aleatorio"],
            correct: 0,
            explanation: "El apriete en cruz asegura que la presión sobre la CPU sea uniforme, evitando daños en los pines y mejorando el contacto térmico.",
            topic: "Montaje"
        },
        {
            question: "¿Qué ranuras se usan habitualmente para dual-channel de RAM?",
            options: ["C2/D2", "A2/B2", "A1/B1", "B1/C1"],
            correct: 1,
            explanation: "En la mayoría de placas de 4 ranuras, los canales secundarios (A2 y B2) se utilizan para maximizar la estabilidad del dual-channel.",
            topic: "Configuración"
        },
        {
            question: "¿Qué protocolo de almacenamiento optimiza discos NVMe?",
            options: ["SATA", "SCSI", "IDE", "NVMe"],
            correct: 3,
            explanation: "NVMe es un protocolo de interfaz de dispositivo lógico para acceder a medios de almacenamiento no volátiles vía PCIe.",
            topic: "Almacenamiento"
        },
        {
            question: "¿Qué rango de humedad relativa (RH) se recomienda para reducir ESD?",
            options: ["90–100%", "10–20%", "70–80%", "30–60%"],
            correct: 3,
            explanation: "Una humedad entre el 30% y el 60% ayuda a disipar la estática; un ambiente muy seco favorece las descargas (ESD).",
            topic: "Seguridad ESD"
        }
    ],
    ut3: [
        {
            question: "¿Qué diferencia principal presenta una aplicación portable?",
            options: ["No requiere instalación en el sistema", "Solo funciona con privilegios de administrador", "Necesita conexión a Internet para ejecutarse", "No guarda datos en dispositivos externos"],
            correct: 0,
            explanation: "Las aplicaciones portables se ejecutan directamente desde su archivo ejecutable sin registrarse en el sistema ni requerir un proceso de instalación.",
            topic: "Tipos de Software"
        },
        {
            question: "¿Qué gestor de paquetes se utiliza en sistemas Linux?",
            options: ["NTFS", "APT", "MS-DOS", "BIOS"],
            correct: 1,
            explanation: "APT (Advanced Package Tool) es el gestor de paquetes más común en distribuciones basadas en Debian y Ubuntu para instalar y actualizar software.",
            topic: "Gestión de Software"
        },
        {
            question: "¿Qué función cumple un sistema operativo?",
            options: ["Almacenar datos de usuario sin procesarlos", "Sustituir al firmware de la placa base", "Servir únicamente para crear programas", "Gestionar hardware, software y recursos del sistema"],
            correct: 3,
            explanation: "El sistema operativo es el software principal que actúa como intermediario gestionando los recursos físicos y lógicos del computador.",
            topic: "Sistemas Operativos"
        },
        {
            question: "¿Qué diferencia existe entre software de aplicación y software de sistema?",
            options: ["El de sistema solo incluye antivirus", "El de aplicación sustituye al firmware", "Ambos realizan la misma función", "El primero satisface necesidades del usuario y el segundo gestiona hardware"],
            correct: 3,
            explanation: "El software de sistema (como el SO) gestiona la máquina, mientras que el de aplicación (como Office) permite al usuario realizar tareas específicas.",
            topic: "Tipos de Software"
        },
        {
            question: "¿Qué tipo de software controla el funcionamiento del hardware básico?",
            options: ["Software ofimático", "Aplicaciones de usuario", "Software multimedia", "Firmware"],
            correct: 3,
            explanation: "El firmware (como la BIOS/UEFI) es el nivel más bajo de software que controla directamente el hardware del dispositivo.",
            topic: "Tipos de Software"
        },
        {
            question: "¿Qué licencia implica el pago para poder usar el software, sin acceso al código fuente?",
            options: ["Creative Commons", "Pública", "GNU GPL", "Propietaria"],
            correct: 3,
            explanation: "El software propietario o de código cerrado limita el uso y la modificación, requiriendo normalmente el pago de una licencia.",
            topic: "Licenciamiento"
        },
        {
            question: "¿Qué sucede si se elimina un programa sin seguir el procedimiento adecuado?",
            options: ["Se restablece el sistema operativo", "Pueden quedar archivos residuales que afecten al sistema", "El sistema se optimiza automáticamente", "El software se convierte en portable"],
            correct: 1,
            explanation: "Borrar carpetas manualmente en lugar de usar el desinstalador suele dejar entradas en el registro y archivos temporales que ralentizan el sistema.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué son las utilidades de recuperación de datos?",
            options: ["Aplicaciones de edición gráfica", "Herramientas para diseñar bases de datos", "Software de gestión de redes sociales", "Programas que restauran archivos eliminados o dañados"],
            correct: 3,
            explanation: "Estas herramientas escanean el soporte de almacenamiento para intentar reconstruir archivos que han sido borrados o cuya tabla de asignación está dañada.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué herramienta de seguridad es básica en un sistema informático?",
            options: ["Calculadora científica", "Compresor de archivos", "Antivirus", "Procesador de texto"],
            correct: 2,
            explanation: "El antivirus es la herramienta esencial para proteger el sistema detectando y neutralizando malware.",
            topic: "Seguridad"
        },
        {
            question: "¿Qué utilidad tienen las copias de seguridad del software y datos?",
            options: ["Eliminar programas innecesarios", "Garantizar la recuperación en caso de fallo o pérdida", "Hacer portable cualquier aplicación", "Sustituir al antivirus del sistema"],
            correct: 1,
            explanation: "Los backups son fundamentales para la continuidad del negocio y la protección de datos personales ante fallos de hardware o ataques.",
            topic: "Seguridad"
        },
        {
            question: "¿Qué se debe hacer antes de instalar software en un entorno corporativo?",
            options: ["Desinstalar el sistema operativo", "Evitar leer la documentación", "Revisar compatibilidad y licencias", "Instalarlo sin permisos previos"],
            correct: 2,
            explanation: "Es crítico verificar que el software sea compatible con el SO actual y que se dispone de las licencias legales necesarias para uso comercial.",
            topic: "Gestión Corporativa"
        },
        {
            question: "¿Qué tipo de software se emplea para edición multimedia?",
            options: ["Procesadores de texto", "Programas de audio, vídeo e imagen", "Gestores de bases de datos", "Firmware"],
            correct: 1,
            explanation: "El software multimedia engloba todas las herramientas destinadas a la creación y manipulación de contenidos audiovisuales.",
            topic: "Tipos de Software"
        },
        {
            question: "¿Qué característica distingue al software libre?",
            options: ["Se distribuye exclusivamente con fines comerciales", "Permite acceso, uso, modificación y distribución del código", "Está limitado solo a sistemas Linux", "No puede ser utilizado sin conexión a Internet"],
            correct: 1,
            explanation: "El software libre otorga a los usuarios libertades para ejecutarlo, estudiar su código, modificarlo y redistribuir copias.",
            topic: "Licenciamiento"
        },
        {
            question: "¿Qué se consigue con herramientas de optimización del sistema?",
            options: ["Desinstalar todos los programas a la vez", "Sustituir automáticamente el software propietario", "Aumentar el tamaño del disco duro físico", "Mejorar rendimiento y estabilidad del equipo"],
            correct: 3,
            explanation: "Las herramientas de optimización limpian el registro, eliminan archivos temporales y gestionan el inicio para acelerar el equipo.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué riesgo implica usar software sin licencia?",
            options: ["Copias de seguridad más rápidas", "Instalación automática de actualizaciones", "Mayor optimización del sistema", "Vulneración legal y riesgos de seguridad"],
            correct: 3,
            explanation: "El software 'pirata' suele carecer de actualizaciones de seguridad y puede contener troyanos o puertas traseras.",
            topic: "Seguridad"
        },
        {
            question: "¿Qué tipo de software incluye procesadores de texto, hojas de cálculo y programas de presentaciones?",
            options: ["Firmware", "Software ofimático", "Software de sistema", "Software de programación"],
            correct: 1,
            explanation: "El software ofimático es el conjunto de aplicaciones destinadas a automatizar y optimizar las tareas de oficina.",
            topic: "Tipos de Software"
        },
        {
            question: "¿Qué utilidad tiene un antivirus en un sistema informático?",
            options: ["Optimizar automáticamente la red", "Detectar y eliminar malware", "Gestionar hojas de cálculo", "Crear presentaciones gráficas"],
            correct: 1,
            explanation: "Su función principal es el escaneo en tiempo real y bajo demanda para eliminar amenazas de software malicioso.",
            topic: "Seguridad"
        },
        {
            question: "¿Qué función cumple la documentación técnica de un software?",
            options: ["Facilitar instalación, uso y resolución de problemas", "Sustituir al antivirus", "Permitir ejecución sin instalación", "Servir únicamente como publicidad"],
            correct: 0,
            explanation: "La documentación es vital para que los administradores de sistemas entiendan los requisitos y resuelvan errores técnicos.",
            topic: "Gestión de Software"
        },
        {
            question: "¿Qué efecto puede tener una actualización mal gestionada?",
            options: ["Incompatibilidades y fallos en el sistema", "Eliminación de virus existentes", "Instalación automática de drivers", "Mayor seguridad y estabilidad"],
            correct: 0,
            explanation: "Actualizar sin probar previamente en entornos de test puede provocar cierres inesperados o fallos de drivers.",
            topic: "Mantenimiento"
        },
        {
            question: "¿Qué información debe incluir un inventario de software?",
            options: ["Programas instalados y sus licencias", "Contraseñas de usuarios", "Documentos de texto y multimedia", "Configuración del hardware únicamente"],
            correct: 0,
            explanation: "Un inventario profesional rastrea las versiones instaladas y las claves de licencia para auditorías y control de activos.",
            topic: "Gestión Corporativa"
        }
    ],
    ut4: [
        {
            question: "¿Qué formato de Microsoft soporta múltiples imágenes en un solo archivo y compresión?",
            options: ["WIM", "EXT4", "RAW", "TAR"],
            correct: 0,
            explanation: "El formato WIM (Windows Imaging Format) es un formato de imagen basado en archivos que permite almacenar varias imágenes y aplicar compresión.",
            topic: "Formatos de Imagen"
        },
        {
            question: "¿Qué formato de particionado se asocia de forma nativa a UEFI?",
            options: ["GPT", "EXT4", "MBR", "NTFS"],
            correct: 0,
            explanation: "GPT (GUID Partition Table) es el estándar moderno de particionado que sustituye a MBR y es obligatorio para el arranque nativo en sistemas UEFI.",
            topic: "Particionado"
        },
        {
            question: "¿Qué herramienta de Windows se utiliza para generalizar una instalación antes de crear una imagen?",
            options: ["Rufus", "Sysprep", "DISM", "MDT"],
            correct: 1,
            explanation: "Sysprep (System Preparation) prepara una instalación de Windows para su duplicación eliminando información específica como el SID y los drivers.",
            topic: "Herramientas Windows"
        },
        {
            question: "¿Qué herramienta de Windows permite restaurar el gestor de arranque con el comando 'bcdboot'?",
            options: ["bootrec /fixboot", "diskpart", "sysprep", "bcdboot"],
            correct: 3,
            explanation: "bcdboot es la herramienta de línea de comandos utilizada para configurar los archivos de arranque en una partición del sistema.",
            topic: "Recuperación"
        },
        {
            question: "¿Qué es Secure Boot en un firmware UEFI?",
            options: ["Verificación de firmas digitales de arranque", "Copia de seguridad en nube", "Configuración de RAID", "Activación de licencias"],
            correct: 0,
            explanation: "Secure Boot asegura que el sistema solo inicie software que tenga una firma digital válida de un fabricante de confianza.",
            topic: "Seguridad"
        },
        {
            question: "¿Qué gestor de arranque se emplea comúnmente en Linux moderno?",
            options: ["GRUB2", "SYSLINUX", "NTLDR", "LILO"],
            correct: 0,
            explanation: "GRUB2 es el gestor de arranque estándar en la gran mayoría de distribuciones Linux actuales, soportando BIOS y UEFI.",
            topic: "Gestores de Arranque"
        },
        {
            question: "¿Qué utilidad de Linux se usa para gestionar arreglos RAID por software?",
            options: ["tune2fs", "mdadm", "fsarchiver", "parted"],
            correct: 2,
            explanation: "mdadm (Multiple Device Admin) es la herramienta fundamental en Linux para crear, gestionar y monitorizar dispositivos RAID por software.",
            topic: "Almacenamiento Avanzado"
        },
        {
            question: "¿Qué protocolo permite arrancar un equipo por red para desplegar un sistema operativo?",
            options: ["PXE", "SMB", "FTP", "DNS"],
            correct: 0,
            explanation: "PXE (Preboot eXecution Environment) permite a un ordenador arrancar utilizando su interfaz de red de forma independiente de los dispositivos de almacenamiento local.",
            topic: "Despliegue de Red"
        },
        {
            question: "¿Qué comando de Windows permite capturar una imagen en formato WIM?",
            options: ["wbadmin", "bcdboot", "DISM /Capture-Image", "Sysprep /generalize"],
            correct: 2,
            explanation: "DISM (Deployment Image Servicing and Management) con el parámetro /Capture-Image permite crear un archivo .wim de una partición.",
            topic: "Herramientas Windows"
        },
        {
            question: "¿Qué técnica asegura que una imagen no esté corrupta tras transferirse?",
            options: ["Guardar en DVD", "Crear snapshot", "Reiniciar tras copiar", "Verificación de hash (SHA256)"],
            correct: 3,
            explanation: "La verificación de hash permite comparar el valor calculado del archivo origen con el del destino para asegurar la integridad total de los datos.",
            topic: "Integridad"
        },
        {
            question: "¿Qué es una instalación tradicional de un sistema operativo?",
            options: ["Usar PXE", "Ejecutar el instalador y configurar manual o automáticamente", "Clonar con partclone", "Aplicar una imagen WIM"],
            correct: 1,
            explanation: "La instalación tradicional implica arrancar desde un medio físico (USB/DVD) y seguir los pasos del asistente de configuración del sistema.",
            topic: "Instalación"
        },
        {
            question: "¿Qué utilidad de Linux permite clonar únicamente los bloques utilizados de una partición?",
            options: ["Partclone", "dd", "rsync", "tar"],
            correct: 0,
            explanation: "A diferencia de 'dd' que clona todos los bloques, Partclone entiende el sistema de archivos y solo copia los bloques que contienen datos, ahorrando tiempo y espacio.",
            topic: "Clonación"
        },
        {
            question: "¿Qué se recomienda para validar una imagen antes de desplegarla masivamente?",
            options: ["Probarla en máquina virtual o hardware representativo", "Guardarla en DVD", "Ejecutar bcdboot", "Alinear particiones"],
            correct: 0,
            explanation: "Antes del despliegue masivo, se debe verificar la imagen en entornos controlados para detectar fallos de drivers o configuración.",
            topic: "Buenas Prácticas"
        },
        {
            question: "¿Qué buena práctica es esencial antes de capturar una imagen de sistema?",
            options: ["Ejecutar chkdsk", "Instalar drivers específicos", "Cambiar UUIDs", "Limpiar temporales y credenciales"],
            correct: 3,
            explanation: "Para crear una imagen 'limpia', es vital eliminar archivos temporales, logs y cualquier rastro de cuentas de usuario o credenciales previas.",
            topic: "Buenas Prácticas"
        },
        {
            question: "¿Qué técnica en Linux permite capturar una instantánea de un sistema de archivos para clonación consistente?",
            options: ["Secure Boot", "Snapshot LVM o btrfs", "wbadmin", "dd"],
            correct: 1,
            explanation: "Los snapshots (instantáneas) de LVM o sistemas de archivos como btrfs permiten capturar el estado del sistema en un momento dado sin detenerlo.",
            topic: "Clonación"
        },
        {
            question: "¿Qué comando de Windows permite realizar copias de seguridad de volúmenes críticos?",
            options: ["wbadmin", "sysprep", "DISM", "fsarchiver"],
            correct: 0,
            explanation: "wbadmin es la utilidad de línea de comandos para Windows Server Backup que permite realizar copias de seguridad del estado del sistema y volúmenes.",
            topic: "Herramientas Windows"
        },
        {
            question: "¿Qué es una 'golden image'?",
            options: ["Un archivo de logs", "Un snapshot de RAM", "Un gestor de arranque", "Imagen maestra optimizada para desplegar en múltiples equipos"],
            correct: 3,
            explanation: "Una 'golden image' es una plantilla maestra preconfigurada con todo el software y ajustes necesarios para ser clonada masivamente.",
            topic: "Despliegue"
        },
        {
            question: "¿Qué herramienta de Linux se usa para crear y gestionar volúmenes lógicos?",
            options: ["GParted", "fdisk", "lsblk", "LVM"],
            correct: 3,
            explanation: "LVM (Logical Volume Manager) proporciona una capa de abstracción sobre el almacenamiento físico para gestionar particiones de forma flexible.",
            topic: "Almacenamiento Avanzado"
        },
        {
            question: "¿Qué comando de Linux permite crear un USB arrancable a partir de una ISO híbrida?",
            options: ["cp", "rsync", "dd", "mkfs"],
            correct: 2,
            explanation: "El comando 'dd' (Dataset Definition) se usa para copiar datos a bajo nivel, ideal para 'quemar' imágenes ISO en unidades USB.",
            topic: "Herramientas Linux"
        },
        {
            question: "¿Qué ventaja principal ofrece la clonación frente a la instalación manual?",
            options: ["Reduce consumo eléctrico", "Rapidez y homogeneidad en el despliegue", "Detecta siempre nuevo hardware", "Permite personalización extrema en cada equipo"],
            correct: 1,
            explanation: "La clonación permite desplegar sistemas idénticos en cientos de máquinas en una fracción del tiempo que tomaría hacerlo manualmente.",
            topic: "Despliegue"
        }
    ],
    ut5: [
        {
            question: "¿Qué interfaz de gestión remota es común en hardware empresarial de Dell?",
            options: ["AMT", "CIMC", "iLO", "iDRAC"],
            correct: 3,
            explanation: "iDRAC (integrated Dell Remote Access Controller) es la solución de gestión fuera de banda propia de los servidores Dell PowerEdge.",
            topic: "Gestión Remota"
        },
        {
            question: "¿Qué estándar de particionado es habitual en servidores modernos con UEFI?",
            options: ["MBR", "EXT4", "GPT", "NTFS"],
            correct: 2,
            explanation: "GPT (GUID Partition Table) es el estándar necesario para arrancar sistemas en modo UEFI y soportar volúmenes de más de 2TB.",
            topic: "Almacenamiento"
        },
        {
            question: "¿Qué herramienta de Microsoft permite inventario y despliegue en entornos Windows empresariales?",
            options: ["OCS Inventory", "ServiceNow", "NetBox", "SCCM / Intune"],
            correct: 3,
            explanation: "SCCM (ahora MECM) e Intune son las herramientas líderes de Microsoft para gestionar el ciclo de vida de dispositivos en la empresa.",
            topic: "Gestión de Activos"
        },
        {
            question: "¿Qué base de datos recoge relaciones entre activos y configuraciones (ITIL)?",
            options: ["LDAP", "DCIM", "SQL", "CMDB"],
            correct: 3,
            explanation: "La CMDB (Configuration Management Database) almacena información sobre los CIs (Configuration Items) y sus relaciones según el marco ITIL.",
            topic: "Gestión ITIL"
        },
        {
            question: "¿Qué componente facilita distribución eléctrica y monitorización por outlet en racks?",
            options: ["UPS offline", "PDU inteligente", "Generador diesel", "Busbar simple"],
            correct: 1,
            explanation: "Las PDU (Power Distribution Units) inteligentes permiten monitorizar y controlar el consumo eléctrico a nivel de cada enchufe en el rack.",
            topic: "Energía"
        },
        {
            question: "¿Qué estrategia de redundancia eléctrica implica duplicidad completa de la cadena de alimentación?",
            options: ["2N", "N+N", "N", "N+1"],
            correct: 0,
            explanation: "La redundancia 2N ofrece dos sistemas completos e independientes, permitiendo que uno falle totalmente sin afectar al servicio.",
            topic: "Redundancia"
        },
        {
            question: "¿Qué organismo define recomendaciones de temperatura y humedad para CPD (ej. clase A1)?",
            options: ["ASHRAE", "TIA-942", "ITIL", "ISO"],
            correct: 0,
            explanation: "ASHRAE establece los estándares térmicos y de humedad recomendados para garantizar la salud del hardware en centros de datos.",
            topic: "Normativas"
        },
        {
            question: "¿Qué es un SLA en el contexto de hardware y servicios empresariales?",
            options: ["Acuerdo de nivel de servicio", "Un tipo de UPS", "Estándar eléctrico", "Protocolo de red"],
            correct: 0,
            explanation: "El SLA (Service Level Agreement) define los tiempos de respuesta y niveles de disponibilidad comprometidos por un proveedor.",
            topic: "Servicios"
        },
        {
            question: "¿Qué característica distingue habitualmente la memoria empresarial frente a la personal?",
            options: ["Bajo coste", "Uso de memoria ECC", "Menor capacidad", "Mayor velocidad"],
            correct: 1,
            explanation: "La memoria ECC (Error Correction Code) puede detectar y corregir errores de bits, vital para la estabilidad de servidores.",
            topic: "Componentes"
        },
        {
            question: "¿Qué es PUE en el contexto de eficiencia energética de CPD?",
            options: ["Plan de continuidad", "Power Usage Effectiveness", "Política de seguridad", "UPS modular"],
            correct: 1,
            explanation: "El PUE mide la eficiencia energética dividiendo la energía total del CPD entre la consumida solo por el hardware IT.",
            topic: "Sustentabilidad"
        },
        {
            question: "¿Qué estándar internacional regula seguridad de la información y aplica a CPD?",
            options: ["TIA-942", "ISO/IEC 27001", "ASHRAE", "ISO 9001"],
            correct: 1,
            explanation: "ISO 27001 es la norma principal para implementar Sistemas de Gestión de Seguridad de la Información (SGSI).",
            topic: "Seguridad"
        },
        {
            question: "¿Qué protocolo se utiliza para consultar sensores en un BMC (ejemplo con ipmitool)?",
            options: ["SNMP", "HTTP", "SSH", "IPMI"],
            correct: 3,
            explanation: "IPMI es el protocolo estándar para la monitorización y gestión de hardware independientemente del sistema operativo.",
            topic: "Monitorización"
        },
        {
            question: "¿Qué técnica de refrigeración organiza racks en pasillos fríos y calientes?",
            options: ["Free cooling", "Refrigeración líquida", "Hot aisle / Cold aisle", "CRAH"],
            correct: 2,
            explanation: "La disposición de pasillo frío/caliente optimiza el flujo de aire evitando que el aire caliente expulsado sea aspirado por otros servidores.",
            topic: "Refrigeración"
        },
        {
            question: "¿Qué buena práctica se recomienda antes de la puesta en servicio de un CPD?",
            options: ["Instalar drivers de GPU", "Inventariado físico y lógico completo", "Instalar antivirus", "Montar RAID 0"],
            correct: 1,
            explanation: "Un inventariado exhaustivo antes del arranque asegura el control de activos y facilita el mantenimiento futuro.",
            topic: "Buenas Prácticas"
        },
        {
            question: "¿Qué tipo de contrato es habitual en hardware empresarial para soporte inmediato 24x7?",
            options: ["Certificado SSL", "Contrato de soporte con SLA 24x7", "Seguro de hogar", "Licencia GNU"],
            correct: 1,
            explanation: "Los entornos críticos requieren contratos de mantenimiento que garanticen soporte técnico a cualquier hora y día.",
            topic: "Servicios"
        },
        {
            question: "¿Qué tipo de UPS se recomienda en centros de datos críticos por su doble conversión?",
            options: ["UPS online (double conversion)", "UPS line-interactive", "UPS modular", "UPS offline"],
            correct: 0,
            explanation: "Las UPS Online de doble conversión ofrecen la mayor protección al aislar totalmente la carga de las anomalías de la red eléctrica.",
            topic: "Energía"
        },
        {
            question: "¿Qué significa hot-swap en servidores empresariales?",
            options: ["Sustitución en caliente de componentes", "Instalar drivers", "Actualizar firmware", "Ampliar memoria"],
            correct: 0,
            explanation: "Hot-swap permite cambiar componentes (como discos o fuentes) mientras el servidor sigue encendido y operando.",
            topic: "Mantenibilidad"
        },
        {
            question: "¿Qué herramienta open source permite inventario y gestión de activos IT con agentes (GLPI)?",
            options: ["NetBox", "Zabbix", "GLPI + FusionInventory", "SCCM"],
            correct: 2,
            explanation: "GLPI, a menudo combinado con agentes como FusionInventory, es una solución líder para la gestión de activos (ITAM) de código abierto.",
            topic: "Gestión de Activos"
        },
        {
            question: "¿Qué es un asset tag en inventariado profesional?",
            options: ["Dirección IP", "Modelo de CPU", "Etiqueta física con identificador único", "Versión de BIOS"],
            correct: 2,
            explanation: "Un asset tag es una etiqueta física (a menudo con código de barras o QR) que identifica unívocamente un hardware en el inventario.",
            topic: "Inventario"
        },
        {
            question: "¿Qué métrica mide la eficiencia energética de un CPD?",
            options: ["ECC", "SLA", "RAID", "PUE"],
            correct: 3,
            explanation: "El PUE es la métrica estándar para evaluar qué tan 'verde' o eficiente es un centro de datos en el uso de la energía.",
            topic: "Sustentabilidad"
        }
    ],
    ut6: [
        {
            question: "¿Qué norma regula la protección contra descargas electrostáticas?",
            options: ["EN 60903", "IEC 61340", "EN 149", "EN 374"],
            correct: 1,
            explanation: "La norma IEC 61340 es el estándar internacional para la protección de dispositivos electrónicos frente a fenómenos electrostáticos (ESD).",
            topic: "Normativa ESD"
        },
        {
            question: "¿Qué EPI es esencial para manipulación de baterías Li-ion dañadas?",
            options: ["Chaleco reflectante", "Tapones auditivos", "Guantes químicos y pantalla facial", "Casco de seguridad"],
            correct: 2,
            explanation: "Las baterías dañadas pueden liberar electrolitos corrosivos y gases tóxicos, por lo que se requiere protección química y ocular específica.",
            topic: "Seguridad y EPIs"
        },
        {
            question: "¿Qué significa el acrónimo RAEE?",
            options: ["Registro Ambiental Europeo de Energía", "Requisitos de Almacenamiento Ecológico", "Residuos de Aparatos Eléctricos y Electrónicos", "Reglamento de Activos Eléctricos Especiales"],
            correct: 2,
            explanation: "RAEE se refiere a los residuos de aparatos eléctricos y electrónicos que, al final de su vida útil, deben ser gestionados por centros autorizados.",
            topic: "Medio Ambiente"
        },
        {
            question: "¿Qué normativa establece sistemas de gestión de seguridad y salud laboral?",
            options: ["NIST SP 800-88", "ISO 14001", "ISO 45001", "IEC 60364"],
            correct: 2,
            explanation: "La norma ISO 45001 es el estándar internacional para la gestión de la seguridad y salud en el trabajo (SST).",
            topic: "Seguridad Laboral"
        },
        {
            question: "¿Qué método de sanitización aplica borrado lógico en HDD?",
            options: ["Purge", "Format rápido", "Destroy", "Clear"],
            correct: 3,
            explanation: "Según NIST SP 800-88, 'Clear' es el borrado lógico que permite reutilizar el dispositivo dentro de la organización mediante comandos de sobreescritura.",
            topic: "Sanitización de Datos"
        },
        {
            question: "¿Qué debe incluir un registro de entrega de EPI?",
            options: ["Fecha, lote, firma del receptor", "Nombre del proveedor", "Precio de adquisición", "Marca del fabricante"],
            correct: 0,
            explanation: "El registro oficial debe garantizar la trazabilidad del equipo y la confirmación de recepción por parte del trabajador para cumplir con la ley de prevención.",
            topic: "Seguridad y EPIs"
        },
        {
            question: "¿Qué norma regula los guantes dieléctricos?",
            options: ["EN 60903", "EN 374", "IEC 61340", "ISO 45001"],
            correct: 0,
            explanation: "La norma EN 60903 regula los guantes de material aislante para trabajos en tensión o proximidad de partes eléctricas vivas.",
            topic: "Normativa Eléctrica"
        },
        {
            question: "¿Qué mascarilla se recomienda en limpieza con aspiradora HEPA en CPD?",
            options: ["Mascarilla quirúrgica", "FFP2 o FFP3", "N95", "Semimáscara de gases"],
            correct: 1,
            explanation: "Para la limpieza de polvo fino y partículas técnicas en CPD, se requieren mascarillas autofiltrantes de alta eficiencia como FFP2 o FFP3.",
            topic: "Mantenimiento Técnico"
        },
        {
            question: "¿Qué debe incluir un contrato con un gestor RAEE?",
            options: ["Certificado de destrucción o reciclado", "Nombre comercial del gestor", "Número de empleados", "Planos de las instalaciones"],
            correct: 0,
            explanation: "El certificado de gestión final es el documento legal que garantiza que el residuo ha sido tratado según la normativa ambiental.",
            topic: "Medio Ambiente"
        },
        {
            question: "¿Qué método de sanitización se prefiere en SSD/NVMe con soporte fabricante?",
            options: ["Destroy", "Clear", "Compresión", "Purge"],
            correct: 3,
            explanation: "En unidades SSD, 'Purge' (mediante comandos como Secure Erase) es el método preferido para asegurar que los datos no son recuperables mediante técnicas de laboratorio.",
            topic: "Sanitización de Datos"
        },
        {
            question: "¿Qué tipo de residuo es un EPI contaminado?",
            options: ["Residuos urbanos", "Material reutilizable", "Residuo especial", "Chatarra metálica"],
            correct: 2,
            explanation: "Los EPIs que han estado en contacto con sustancias químicas o biológicas peligrosas se consideran residuos especiales o peligrosos.",
            topic: "Medio Ambiente"
        },
        {
            question: "¿Qué norma regula las mascarillas FFP2/FFP3?",
            options: ["EN 60903", "ISO 45001", "EN 149", "EN 374"],
            correct: 2,
            explanation: "La norma EN 149 regula los dispositivos de protección respiratoria y medias máscaras filtrantes contra partículas.",
            topic: "Seguridad y EPIs"
        },
        {
            question: "¿Qué indicador mide la eficiencia energética en un CPD?",
            options: ["MTTR", "SLA contractual", "PUE (Power Usage Effectiveness)", "KPI general"],
            correct: 2,
            explanation: "El PUE es el estándar global para medir la eficiencia energética en centros de datos, comparando la energía total con la consumida por el hardware IT.",
            topic: "Eficiencia Energética"
        },
        {
            question: "¿Qué técnica de mejora continua se aplica al orden y limpieza?",
            options: ["Kaizen 7", "Six Sigma", "Poka-Yoke", "5S"],
            correct: 3,
            explanation: "La metodología 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) busca mejorar la productividad mediante el orden y la limpieza del puesto de trabajo.",
            topic: "Metodologías"
        },
        {
            question: "¿Qué riesgo se asocia a la manipulación de PCBs sin protección?",
            options: ["Exposición a radiación ionizante", "Descargas electrostáticas (ESD)", "Vibraciones mecánicas", "Riesgo biológico"],
            correct: 1,
            explanation: "La manipulación directa de placas de circuito impreso (PCB) sin pulseras o guantes ESD puede destruir componentes mediante voltajes invisibles.",
            topic: "Mantenimiento Técnico"
        },
        {
            question: "¿Qué acción corresponde a la “S” de Clasificar en el programa 5S?",
            options: ["Separar lo necesario de lo innecesario", "Señalizar pasillos de evacuación", "Sustituir hardware", "Simular incidencias"],
            correct: 0,
            explanation: "La primera 'S' (Seiri - Clasificar) consiste en separar los elementos necesarios de los innecesarios para liberar espacio.",
            topic: "Metodologías"
        },
        {
            question: "¿Qué significa el acrónimo LOTO en prevención de riesgos?",
            options: ["Line Of Technical Output", "Lock-Out Tag-Out", "Local Operations Testing Order", "Level Of Total Operation"],
            correct: 1,
            explanation: "Lock-Out Tag-Out es el procedimiento de seguridad para asegurar que las máquinas peligrosas se apaguen y bloqueen antes de intervenirlas.",
            topic: "Seguridad Industrial"
        },
        {
            question: "¿Qué procedimiento garantiza la ausencia de tensión antes de intervenir?",
            options: ["Control de acceso", "Checklist de limpieza", "Procedimiento RAEE", "LOTO"],
            correct: 3,
            explanation: "LOTO garantiza que la fuente de energía esté físicamente bloqueada y etiquetada para evitar accidentes eléctricos durante el mantenimiento.",
            topic: "Seguridad Industrial"
        },
        {
            question: "¿Qué documento sirve para cuantificar riesgos con probabilidad y severidad?",
            options: ["Hoja de inventario", "Matriz de riesgos", "Acta de reunión", "Manual de usuario"],
            correct: 1,
            explanation: "La matriz de riesgos permite priorizar los peligros multiplicando su probabilidad de ocurrencia por la gravedad de sus consecuencias.",
            topic: "Seguridad Laboral"
        },
        {
            question: "¿Qué procedimiento documenta la retirada segura de equipos electrónicos?",
            options: ["Checklist EPI", "Procedimiento de backup", "Protocolo LOTO", "Gestión RAEE"],
            correct: 3,
            explanation: "La gestión RAEE documenta el ciclo de vida final del hardware, asegurando su reciclaje seguro y el borrado de datos confidenciales.",
            topic: "Medio Ambiente"
        }
    ]
};