const questionsDB = {

            ut1: [
                {
                    question: "¿Qué describe mejor el propósito global de un sistema informático según esta UT?",
                    options: [
                        "Funcionar sin dependencia del hardware subyacente",
                        "Integrar hardware y software para transformar datos en información útil",
                        "Sustituir completamente la intervención humana en cualquier proceso",
                        "Ejecutar exclusivamente aplicaciones de usuario sin gestionar recursos"
                    ],
                    correct: 1,
                    explanation: "Un sistema informático integra hardware y software para procesar y transformar datos en información útil.",
                    topic: "Fundamentos de sistemas"
                },
                {
                    question: "¿Cuál es la función principal de la CPU en un sistema informático?",
                    options: [
                        "Ejecutar instrucciones y coordinar operaciones internas",
                        "Servir como interfaz directa entre usuario y aplicaciones",
                        "Proporcionar almacenamiento no volátil a largo plazo",
                        "Emitir señal de vídeo a los monitores externos"
                    ],
                    correct: 0,
                    explanation: "La CPU es responsable de ejecutar instrucciones y coordinar todas las operaciones internas del sistema.",
                    topic: "Arquitectura de computadores"
                },
                {
                    question: "En la jerarquía de memoria, ¿qué elemento ofrece el acceso más rápido?",
                    options: [
                        "Almacenamiento secundario",
                        "Memoria virtual",
                        "Registros de la CPU",
                        "Memoria RAM"
                    ],
                    correct: 2,
                    explanation: "Los registros de la CPU son el nivel más rápido en la jerarquía de memoria.",
                    topic: "Jerarquía de memoria"
                },
                {
                    question: "¿Qué ventaja clave aportan las memorias caché L1/L2/L3?",
                    options: [
                        "Reducen la latencia al acercar datos frecuentes a la CPU",
                        "Permiten ejecutar instrucciones en orden estricto",
                        "Sustituyen completamente a la RAM del sistema",
                        "Evitan la necesidad de buses de datos"
                    ],
                    correct: 0,
                    explanation: "Las cachés reducen la latencia manteniendo datos frecuentemente usados cerca de la CPU.",
                    topic: "Memoria caché"
                },
                {
                    question: "¿Cuál es una limitación clásica de la arquitectura Von Neumann?",
                    options: [
                        "Incompatibilidad con sistemas operativos modernos",
                        "Cuello de botella por compartir bus entre datos e instrucciones",
                        "Impossibilidad de ejecutar código en paralelo",
                        "Falta de soporte para memoria caché"
                    ],
                    correct: 1,
                    explanation: "El cuello de botella de Von Neumann ocurre porque datos e instrucciones comparten el mismo bus.",
                    topic: "Arquitectura Von Neumann"
                },
                {
                    question: "¿Qué componente del sistema operativo gestiona en modo privilegiado los recursos del sistema?",
                    options: [
                        "Shell",
                        "Editor de texto",
                        "Capa de usuario",
                        "Kernel"
                    ],
                    correct: 3,
                    explanation: "El kernel opera en modo privilegiado y gestiona todos los recursos del sistema.",
                    topic: "Sistema operativo"
                },
                {
                    question: "¿Qué interfaz permite automatizar tareas mediante comandos y scripts?",
                    options: [
                        "Pantalla táctil",
                        "GUI (Graphical User Interface)",
                        "Controladores de dispositivo",
                        "CLI (Command Line Interface)"
                    ],
                    correct: 3,
                    explanation: "La CLI (línea de comandos) permite automatización mediante comandos y scripts.",
                    topic: "Interfaces de usuario"
                },
                {
                    question: "¿Qué caracteriza a un kernel monolítico moderno como Linux?",
                    options: [
                        "Núcleo único con posibilidad de cargar módulos",
                        "Ausencia de controladores en el núcleo",
                        "Separación total de servicios en espacio de usuario",
                        "Exclusivo para dispositivos móviles"
                    ],
                    correct: 0,
                    explanation: "Linux es un kernel monolítico que permite cargar y descargar módulos dinámicamente.",
                    topic: "Tipos de kernel"
                },
                {
                    question: "¿Qué define mejor a un microkernel?",
                    options: [
                        "Mínimo código en modo kernel y servicios en espacio de usuario",
                        "Núcleo diseñado solo para tiempo real duro",
                        "Todos los servicios integrados en modo kernel",
                        "Núcleo híbrido con controladores gráficos dedicados"
                    ],
                    correct: 0,
                    explanation: "Un microkernel mantiene solo lo esencial en modo kernel, moviendo servicios al espacio de usuario.",
                    topic: "Microkernel"
                },
                {
                    question: "¿Qué afirmación es correcta sobre multitarea en sistemas operativos?",
                    options: [
                        "Es exclusiva de sistemas propietarios",
                        "Requiere hardware de múltiples procesadores",
                        "Obliga a que los procesos se ejecuten de forma estrictamente secuencial",
                        "Permite ejecutar múltiples procesos compartiendo tiempo de CPU"
                    ],
                    correct: 3,
                    explanation: "La multitarea permite que múltiples procesos compartan el tiempo de CPU mediante planificación.",
                    topic: "Multitarea"
                },
                {
                    question: "¿Qué diferencia principal existe entre software de sistema y software de aplicación?",
                    options: [
                        "El de sistema se distribuye sin controladores, el de aplicación los incluye",
                        "El de sistema solo corre en contenedores, el de aplicación en hardware",
                        "El de sistema gestiona hardware y recursos, el de aplicación resuelve tareas concretas",
                        "El de sistema es siempre de pago y el de aplicación siempre libre"
                    ],
                    correct: 2,
                    explanation: "El software de sistema gestiona hardware y recursos, mientras que el de aplicación resuelve tareas específicas del usuario.",
                    topic: "Tipos de software"
                },
                {
                    question: "¿Qué elemento de la estructura funcional corresponde a la fase de 'entrada'?",
                    options: [
                        "Almacenamiento permanente en SSD",
                        "Captura de datos por periféricos como teclado o sensores",
                        "Presentación de resultados en pantalla",
                        "Transformación de datos por la ALU"
                    ],
                    correct: 1,
                    explanation: "La fase de entrada corresponde a la captura de datos mediante periféricos de entrada.",
                    topic: "Estructura funcional"
                },
                {
                    question: "¿Cuál es una medida de seguridad vinculada a la gestión de memoria?",
                    options: [
                        "Desactivar la protección por hardware (MMU)",
                        "Ejecutar datos en cualquier segmento",
                        "Exponer las tablas de páginas a los usuarios",
                        "ASLR para aleatorizar ubicaciones en memoria"
                    ],
                    correct: 3,
                    explanation: "ASLR (Address Space Layout Randomization) aleatoriza las ubicaciones en memoria como medida de seguridad.",
                    topic: "Seguridad en memoria"
                },
                {
                    question: "¿Qué afirmación es correcta sobre buses en el sistema?",
                    options: [
                        "El ancho del bus de datos condiciona la cantidad de información transferida por ciclo",
                        "No hay riesgos de seguridad asociados a los buses",
                        "Los buses solo transportan señales de control, no datos",
                        "El bus de direcciones es irrelevante para la memoria"
                    ],
                    correct: 0,
                    explanation: "El ancho del bus de datos determina cuánta información se puede transferir en cada ciclo.",
                    topic: "Buses del sistema"
                },
                {
                    question: "¿Qué diferencia clave existe entre sistemas propietarios y de código abierto?",
                    options: [
                        "Acceso al código fuente y libertad de modificación en el software libre",
                        "Imposibilidad de uso comercial en software libre",
                        "Ausencia de licencias en ambos modelos",
                        "Mayor rendimiento garantizado en el software propietario"
                    ],
                    correct: 0,
                    explanation: "El software libre proporciona acceso al código fuente y libertad para modificarlo.",
                    topic: "Software libre vs propietario"
                },
                {
                    question: "¿Qué describe mejor la virtualización completa?",
                    options: [
                        "Invitados conscientes que cooperan con el hipervisor",
                        "Emulación total del hardware para invitados sin modificaciones",
                        "Ejecución directa sobre hardware sin capa de control",
                        "Contenedores que comparten el mismo kernel"
                    ],
                    correct: 1,
                    explanation: "La virtualización completa emula todo el hardware permitiendo ejecutar sistemas operativos sin modificaciones.",
                    topic: "Virtualización"
                },
                {
                    question: "¿Qué es un snapshot en el contexto de máquinas virtuales?",
                    options: [
                        "Copia incremental del kernel del host",
                        "Captura del estado completo de la VM en un instante",
                        "Imagen ISO del sistema operativo invitado",
                        "Clon físico del disco sin memoria"
                    ],
                    correct: 1,
                    explanation: "Un snapshot captura el estado completo de una máquina virtual en un momento específico.",
                    topic: "Snapshots VM"
                },
                {
                    question: "¿Qué caracteriza a una GUI frente a una CLI?",
                    options: [
                        "Incompatibilidad con herramientas de administración",
                        "Menor consumo de recursos que la línea de comandos",
                        "Uso de elementos gráficos (ventanas, iconos, menús) para interactuar",
                        "Ejecución exclusiva en servidores sin gráficos"
                    ],
                    correct: 2,
                    explanation: "Una GUI utiliza elementos gráficos como ventanas, iconos y menús para la interacción con el usuario.",
                    topic: "Interfaces gráficas"
                },
                {
                    question: "¿Qué ventaja aporta el multiprocesador/multinúcleo?",
                    options: [
                        "Ejecución paralela de tareas para mejorar rendimiento",
                        "Sustituye la necesidad de memoria caché",
                        "Impide la multitarea expropiativa",
                        "Elimina el cambio de contexto entre procesos"
                    ],
                    correct: 0,
                    explanation: "Los sistemas multiprocesador permiten ejecución paralela real de múltiples tareas.",
                    topic: "Multiprocesamiento"
                },
                {
                    question: "¿Qué práctica es esencial en ciberseguridad según esta UT?",
                    options: [
                        "Deshabilitar la memoria virtual para evitar swaps",
                        "Usar siempre arquitectura Harvard en equipos de escritorio",
                        "Conocer la interacción hardware–software para detectar y mitigar vulnerabilidades",
                        "Ejecutar todo el software con privilegios de kernel"
                    ],
                    correct: 2,
                    explanation: "Comprender la interacción hardware-software es fundamental para identificar y mitigar vulnerabilidades.",
                    topic: "Ciberseguridad"
                }
            ],
            ut2: [
                {
                    question: "¿Qué requisito de firmware es indispensable para instalar Windows 11?",
                    options: [
                        "CSM activo",
                        "BIOS Legacy",
                        "TPM 1.2",
                        "TPM 2.0 y Secure Boot habilitado"
                    ],
                    correct: 3,
                    explanation: "Windows 11 requiere TPM 2.0 y Secure Boot habilitado como requisitos de seguridad obligatorios.",
                    topic: "Requisitos Windows 11"
                },
                {
                    question: "¿Qué tamaño recomendado debe tener la partición ESP en sistemas UEFI?",
                    options: [
                        "50 MB en NTFS",
                        "300–512 MB en FAT32",
                        "2 GB en ext4",
                        "1 MB en RAW"
                    ],
                    correct: 1,
                    explanation: "La partición ESP (EFI System Partition) debe ser de 300-512 MB formateada en FAT32.",
                    topic: "Particiones UEFI"
                },
                {
                    question: "¿Qué herramienta en Linux recompila módulos tras actualizar el kernel?",
                    options: [
                        "diskpart",
                        "DKMS",
                        "Boot-Repair",
                        "bcdedit"
                    ],
                    correct: 1,
                    explanation: "DKMS (Dynamic Kernel Module Support) recompila automáticamente los módulos cuando se actualiza el kernel.",
                    topic: "Gestión de kernel Linux"
                },
                {
                    question: "¿Qué utilidad de Windows permite gestionar controladores firmados?",
                    options: [
                        "pnputil",
                        "dd",
                        "lsblk",
                        "efibootmgr"
                    ],
                    correct: 0,
                    explanation: "pnputil es la herramienta de Windows para gestionar controladores firmados del sistema.",
                    topic: "Controladores Windows"
                },
                {
                    question: "¿Qué sistema de archivos es más adecuado para snapshots y rollback en Linux?",
                    options: [
                        "Btrfs",
                        "FAT32",
                        "NTFS",
                        "ext2"
                    ],
                    correct: 0,
                    explanation: "Btrfs soporta nativamente snapshots y rollback, ideal para gestión avanzada de almacenamiento.",
                    topic: "Sistemas de archivos Linux"
                },
                {
                    question: "¿Qué herramienta permite gestionar entradas de arranque UEFI en Linux?",
                    options: [
                        "diskpart",
                        "Boot-Repair",
                        "mkfs",
                        "efibootmgr"
                    ],
                    correct: 3,
                    explanation: "efibootmgr permite crear, eliminar y modificar entradas de arranque UEFI en Linux.",
                    topic: "Arranque UEFI Linux"
                },
                {
                    question: "¿Qué regla de copias de seguridad garantiza redundancia e inmutabilidad?",
                    options: [
                        "1-1-1",
                        "2-2-0",
                        "5-5-5",
                        "3-2-1"
                    ],
                    correct: 3,
                    explanation: "La regla 3-2-1: 3 copias totales, 2 en diferentes medios, 1 fuera del sitio.",
                    topic: "Estrategias de backup"
                },
                {
                    question: "¿Qué herramienta de clonación permite multicast y compresión?",
                    options: [
                        "dd",
                        "Clonezilla",
                        "Boot-Repair",
                        "pnputil"
                    ],
                    correct: 1,
                    explanation: "Clonezilla soporta clonación con multicast y compresión para despliegues masivos.",
                    topic: "Clonación de sistemas"
                },
                {
                    question: "¿Qué gestor de arranque destaca por su simplicidad en sistemas UEFI?",
                    options: [
                        "GRUB2",
                        "systemd-boot",
                        "rEFInd",
                        "LILO"
                    ],
                    correct: 1,
                    explanation: "systemd-boot es simple y minimalista, ideal para sistemas UEFI modernos.",
                    topic: "Gestores de arranque"
                },
                {
                    question: "¿Qué comando de Windows permite editar el gestor de arranque BCD?",
                    options: [
                        "efibootmgr",
                        "pnputil",
                        "gdisk",
                        "bcdedit"
                    ],
                    correct: 3,
                    explanation: "bcdedit es la herramienta de Windows para editar el Boot Configuration Data.",
                    topic: "Arranque Windows"
                },
                {
                    question: "¿Qué práctica mejora la resiliencia en RAID propietario no detectado?",
                    options: [
                        "Mantener CSM activo",
                        "Desactivar TRIM en SSD",
                        "Usar AHCI/NVMe y RAID por software (mdadm/ZFS)",
                        "Usar siempre fakeraid"
                    ],
                    correct: 2,
                    explanation: "Usar AHCI/NVMe con RAID por software (mdadm/ZFS) ofrece mejor compatibilidad y resiliencia.",
                    topic: "Configuración RAID"
                },
                {
                    question: "¿Qué herramienta crea USB multi-ISO de forma sencilla?",
                    options: [
                        "Rufus",
                        "GParted",
                        "Ventoy",
                        "ddrescue"
                    ],
                    correct: 2,
                    explanation: "Ventoy permite crear USB con múltiples ISOs seleccionables al arranque.",
                    topic: "Herramientas de instalación"
                },
                {
                    question: "¿Qué mecanismo protege claves y mide arranque en equipos modernos?",
                    options: [
                        "GOP",
                        "BIOS Legacy",
                        "TPM 2.0",
                        "MSR"
                    ],
                    correct: 2,
                    explanation: "TPM 2.0 (Trusted Platform Module) almacena claves de forma segura y mide la integridad del arranque.",
                    topic: "Seguridad de arranque"
                },
                {
                    question: "¿Qué utilidad permite reconstruir cargadores de arranque dañados?",
                    options: [
                        "gdisk",
                        "ddrescue",
                        "bcdedit",
                        "Boot-Repair"
                    ],
                    correct: 3,
                    explanation: "Boot-Repair es una herramienta especializada para reparar problemas de arranque en Linux.",
                    topic: "Reparación de arranque"
                },
                {
                    question: "¿Qué herramienta se recomienda para recuperación de discos dañados?",
                    options: [
                        "ddrescue",
                        "efibootmgr",
                        "pnputil",
                        "Disk Management"
                    ],
                    correct: 0,
                    explanation: "ddrescue está diseñado específicamente para recuperar datos de discos con sectores dañados.",
                    topic: "Recuperación de datos"
                },
                {
                    question: "¿Qué herramienta de Microsoft permite despliegues masivos de Windows?",
                    options: [
                        "MECM/SCCM",
                        "MAAS",
                        "Satellite",
                        "Cobbler"
                    ],
                    correct: 0,
                    explanation: "MECM/SCCM (Microsoft Endpoint Configuration Manager) gestiona despliegues empresariales de Windows.",
                    topic: "Despliegue empresarial"
                },
                {
                    question: "¿Qué sistema de archivos de Microsoft ofrece resiliencia con Storage Spaces?",
                    options: [
                        "ReFS",
                        "ext4",
                        "XFS",
                        "Btrfs"
                    ],
                    correct: 0,
                    explanation: "ReFS (Resilient File System) está optimizado para trabajar con Storage Spaces en Windows.",
                    topic: "Sistemas de archivos Windows"
                },
                {
                    question: "¿Qué utilidad Linux permite convertir un disco MBR a GPT?",
                    options: [
                        "Boot-Repair",
                        "Timeshift",
                        "gdisk",
                        "Rufus"
                    ],
                    correct: 2,
                    explanation: "gdisk es la herramienta para gestionar particiones GPT y convertir discos MBR a GPT.",
                    topic: "Gestión de particiones"
                },
                {
                    question: "¿Qué herramienta gestiona snapshots en Linux basados en Btrfs?",
                    options: [
                        "diskpart",
                        "Boot-Repair",
                        "bcdedit",
                        "Snapper"
                    ],
                    correct: 3,
                    explanation: "Snapper es la herramienta especializada para gestionar snapshots de Btrfs en Linux.",
                    topic: "Snapshots Linux"
                },
                {
                    question: "¿Qué práctica inicial es fundamental antes de modificar particiones?",
                    options: [
                        "Cambiar BIOS a CSM",
                        "Formatear directamente",
                        "Realizar un backup verificado",
                        "Deshabilitar Secure Boot"
                    ],
                    correct: 2,
                    explanation: "Siempre realizar un backup completo y verificado antes de modificar particiones para prevenir pérdida de datos.",
                    topic: "Mejores prácticas"
                }
            ],

            ut3: [
                {
                    question: "1. ¿Qué combinación de teclas abre directamente la ventana de Configuración en Windows 10/11?",
                    options: [
                        "Alt + F4",
                        "Win + I",
                        "Ctrl + Alt + Supr",
                        "Win + R"
                    ],
                    correct: 1,
                    explanation: "La combinación de teclas Win + I abre directamente la aplicación de Configuración en Windows 10 y 11.",
                    topic: "Comandos básicos Windows"
                },
                {
                    question: "2. ¿En qué sección de Configuración de Windows se cambia el fondo de pantalla?",
                    options: [
                        "Personalización > Fondo",
                        "Red > Pantalla",
                        "Sistema > Pantalla",
                        "Aplicaciones > Escritorio"
                    ],
                    correct: 0,
                    explanation: "El fondo de pantalla, colores y temas se gestionan en 'Configuración > Personalización > Fondo'.",
                    topic: "Herramientas de Windows"
                },
                {
                    question: "3. ¿Qué entorno de escritorio en Linux se caracteriza por ser minimalista y usar extensiones para personalizar la interfaz?",
                    options: [
                        "GNOME",
                        "XFCE",
                        "Cinnamon",
                        "KDE Plasma"
                    ],
                    correct: 0, 
                    explanation: "GNOME es el entorno de escritorio moderno que tiende a ser minimalista y utiliza extensiones para añadir funcionalidades y personalización.",
                    topic: "Interfaces y Escritorios"
                },
                {
                    question: "4. ¿Qué herramienta de Linux se utiliza para configurar la zona horaria desde la terminal?",
                    options: [
                        "sysctl",
                        "dateconfig",
                        "localectl",
                        "timedatectl"
                    ],
                    correct: 3,
                    explanation: "`timedatectl` es la herramienta estándar en systemd para controlar la hora y la zona horaria del sistema.",
                    topic: "Comandos básicos Linux"
                },
                {
                    question: "5. ¿Qué comando en Linux permite configurar el idioma del sistema?",
                    options: [
                        "langctl",
                        "localectl",
                        "setlocale",
                        "timedatectl"
                    ],
                    correct: 1,
                    explanation: "`localectl` se utiliza en systemd para controlar la configuración regional (locale) del sistema, incluyendo el idioma.",
                    topic: "Comandos básicos Linux"
                },
                {
                    question: "6. ¿Qué explorador de archivos es el predeterminado en GNOME (Ubuntu)?",
                    options: [
                        "Thunar",
                        "Caja",
                        "Nautilus (GNOME Files)",
                        "Dolphin"
                    ],
                    correct: 2,
                    explanation: "Nautilus (ahora llamado GNOME Files) es el explorador de archivos predeterminado para el entorno de escritorio GNOME.",
                    topic: "Interfaces y Escritorios"
                },
                {
                    question: "7. ¿Qué herramienta gráfica de Windows se usa para administrar particiones y discos?",
                    options: [
                        "BIOS",
                        "Administrador de discos (diskmgmt.msc)",
                        "Administrador de tareas",
                        "CMD"
                    ],
                    correct: 1,
                    explanation: "El 'Administrador de discos' es la herramienta gráfica principal de Windows para tareas de particionado.",
                    topic: "Gestión de archivos/discos"
                },
                {
                    question: "8. ¿Qué comando de Linux se usa para desmontar una unidad manualmente?",
                    options: [
                        "detach",
                        "umount",
                        "eject",
                        "unmount"
                    ],
                    correct: 1,
                    explanation: "`umount` es el comando correcto para desmontar un sistema de archivos, no 'unmount'.",
                    topic: "Gestión de archivos/discos"
                },
                {
                    question: "9. ¿Qué herramienta de Linux permite hacer instantáneas del sistema para recuperación?",
                    options: [
                        "Deja Dup",
                        "SnapshotCtl",
                        "BackupTool",
                        "Timeshift"
                    ],
                    correct: 3,
                    explanation: "Timeshift está diseñado específicamente para crear instantáneas incrementales del sistema para fines de restauración del sistema operativo.",
                    topic: "Copia de seguridad"
                },
                {
                    question: "10. ¿Cuál de estas herramientas de recuperación pertenece a Linux?",
                    options: [
                        "Punto de restauración",
                        "Restaurar imagen",
                        "Restaurar sistema",
                        "initramfs"
                    ],
                    correct: 3,
                    explanation: "El `initramfs` (initial RAM filesystem) es un componente clave en el proceso de arranque de Linux que, aunque no es una herramienta de 'recuperación' de usuario, es fundamental para la recuperación del sistema en caso de fallos de arranque del kernel.",
                    topic: "Copia de seguridad"
                },
                {
                    question: "11. ¿Qué comando en Debian/Ubuntu actualiza el sistema?",
                    options: [
                        "sudo apt update && sudo apt upgrade",
                        "sudo yum update",
                        "sudo dnf update",
                        "update-manager"
                    ],
                    correct: 0,
                    explanation: "El comando `sudo apt update` actualiza la lista de paquetes y `sudo apt upgrade` instala las nuevas versiones en sistemas basados en Debian/Ubuntu.",
                    topic: "Comandos básicos Linux"
                },
                {
                    question: "12. ¿Qué herramienta de Linux garantiza la ejecución de tareas si el equipo estuvo apagado en la hora prevista?",
                    options: [
                        "taskschd",
                        "systemctl",
                        "anacron",
                        "cron"
                    ],
                    correct: 2,
                    explanation: "Mientras `cron` ejecuta tareas a horas específicas, `anacron` está diseñado para sistemas que no corren 24/7, asegurando que las tareas programadas se ejecuten tan pronto como el sistema se inicie de nuevo.",
                    topic: "Gestión de procesos"
                },
                {
                    question: "13. ¿Qué formato de archivo corresponde a un instalador típico en Windows?",
                    options: [
                        ".exe / .msi",
                        ".rpm",
                        ".sh",
                        ".deb"
                    ],
                    correct: 0,
                    explanation: "Los ejecutables (`.exe`) y los paquetes de Windows Installer (`.msi`) son los formatos de instalador más comunes.",
                    topic: "Gestión de paquetes"
                },
                {
                    question: "14. ¿Qué comando en Windows muestra la configuración de red?",
                    options: [
                        "ifconfig",
                        "netshow",
                        "sysinfo",
                        "ipconfig"
                    ],
                    correct: 3,
                    explanation: "`ipconfig` es el comando estándar de Windows para mostrar información de la configuración de red IP.",
                    topic: "Comandos básicos Windows"
                },
                {
                    question: "15. ¿Qué comando en Linux se usa para mostrar procesos en tiempo real?",
                    options: [
                        "procstat",
                        "top",
                        "ps",
                        "jobs"
                    ],
                    correct: 1,
                    explanation: "`top` muestra un resumen dinámico y en tiempo real del uso de recursos de la CPU y la memoria por los procesos.",
                    topic: "Gestión de procesos"
                },
                {
                    question: "16. ¿Qué shell es el estándar en la mayoría de distribuciones Linux?",
                    options: [
                        "cmd",
                        "zsh",
                        "bash",
                        "PowerShell"
                    ],
                    correct: 2,
                    explanation: "Bash (Bourne Again SHell) es la shell interactiva predeterminada en la mayoría de sistemas basados en Linux.",
                    topic: "Comandos básicos Linux"
                },
                {
                    question: "17. ¿Qué extensión corresponde a un script clásico de MS-DOS o Windows?",
                    options: [
                        ".ps1",
                        ".sh",
                        ".bat",
                        ".exe"
                    ],
                    correct: 2,
                    explanation: "Los scripts de línea de comandos tradicionales en Windows/MS-DOS usan la extensión `.bat` (batch file).",
                    topic: "Comandos básicos Windows"
                },
                {
                    question: "18. ¿Qué gestor de paquetes se utiliza en CentOS/RHEL?",
                    options: [
                        "snap",
                        "apt",
                        "pacman",
                        "yum"
                    ],
                    correct: 3,
                    explanation: "CentOS y RHEL usan tradicionalmente `yum` o su sucesor, `dnf`, para gestionar paquetes RPM.",
                    topic: "Gestión de paquetes"
                },
                {
                    question: "19. ¿Qué programa de Linux permite programar copias de seguridad de datos personales de forma sencilla y gráfica?",
                    options: [
                        "Timeshift",
                        "Deja Dup",
                        "Clonezilla",
                        "Backupctl"
                    ],
                    correct: 1,
                    explanation: "Deja Dup (también conocido como Backups de GNOME) es una utilidad gráfica de copia de seguridad simple.",
                    topic: "Copia de seguridad"
                },
                {
                    question: "20. ¿Qué herramienta de Windows permite crear puntos de restauración del sistema?",
                    options: [
                        "Administrador de discos",
                        "Panel de control > Sistema > Protección del sistema",
                        "Administrador de tareas",
                        "Configuración > Aplicaciones"
                    ],
                    correct: 1,
                    explanation: "La opción 'Protección del sistema' dentro del Panel de control o Propiedades del sistema permite configurar y crear Puntos de restauración.",
                    topic: "Herramientas de Windows"
                }
            ],
            ut4: [
                {
                    question: "1. ¿Cuál es el objetivo principal de la seguridad local?",
                    options: [
                        "Garantizar la confidencialidad, integridad, disponibilidad y trazabilidad",
                        "Mejorar el rendimiento del hardware",
                        "Reducir el consumo energético",
                        "Instalar aplicaciones rápidamente"
                    ],
                    correct: 0,
                    explanation: "El objetivo de la seguridad local es asegurar los principios de la tríada CIA (Confidencialidad, Integridad, Disponibilidad) y la Trazabilidad (o No Repudio).",
                    topic: "Fundamentos de Seguridad"
                },
                {
                    question: "2. ¿Qué significan las siglas RPO en tolerancia a fallos?",
                    options: [
                        "Remote Protection Output",
                        "Random Protection Option",
                        "Recovery Point Objective",
                        "Recovery Protocol Order"
                    ],
                    correct: 2,
                    explanation: "RPO (Recovery Point Objective) define la cantidad máxima aceptable de pérdida de datos medida en tiempo (qué tan atrás en el tiempo podemos recuperar).",
                    topic: "Tolerancia a fallos y copias"
                },
                {
                    question: "3. ¿Qué política de contraseñas es más recomendable?",
                    options: [
                        "Uso exclusivo de caracteres especiales",
                        "Caducidad mensual obligatoria",
                        "Contraseñas iguales para todos",
                        "Longitud mínima de 16 caracteres o passphrase"
                    ],
                    correct: 3,
                    explanation: "Las políticas modernas priorizan la longitud y el uso de frases de contraseña (passphrases) sobre la caducidad frecuente o la complejidad artificial.",
                    topic: "Gestión de contraseñas"
                },
                {
                    question: "4. ¿Qué herramienta aplica políticas de contraseña en Linux?",
                    options: [
                        "DHCP",
                        "PAM (pwquality, faillock)",
                        "Group Policy Objects (GPO)",
                        "BIOS"
                    ],
                    correct: 1,
                    explanation: "PAM (Pluggable Authentication Modules) gestiona la autenticación, y módulos como `pwquality` (calidad) y `faillock` (bloqueo por fallos) aplican las políticas de contraseña.",
                    topic: "Gestión de contraseñas"
                },
                {
                    question: "5. ¿Qué comando de Windows permite listar permisos NTFS?",
                    options: [
                        "chage",
                        "passwd",
                        "icacls",
                        "chmod"
                    ],
                    correct: 2,
                    explanation: "`icacls` es la herramienta de línea de comandos en Windows para mostrar o modificar las ACL (Access Control Lists) de archivos y directorios NTFS.",
                    topic: "Gestión de permisos"
                },
                {
                    question: "6. ¿Qué sistema de cifrado de volúmenes es propio de Linux?",
                    options: [
                        "BitLocker",
                        "RAID5",
                        "NTFS",
                        "LUKS2"
                    ],
                    correct: 3,
                    explanation: "LUKS (Linux Unified Key Setup) es el estándar para cifrado de disco a nivel de bloque en sistemas Linux, siendo LUKS2 la versión más reciente.",
                    topic: "Cifrado y seguridad"
                },
                {
                    question: "7. ¿Qué estrategia de copias de seguridad garantiza resiliencia?",
                    options: [
                        "3-2-1 (tres copias, dos soportes, una offsite)",
                        "Almacenar solo en la nube sin clave",
                        "Copia mensual sin verificación",
                        "Guardar en un solo disco externo"
                    ],
                    correct: 0,
                    explanation: "La regla 3-2-1 es un estándar de la industria que garantiza que siempre haya una copia segura fuera de las instalaciones (offsite) en caso de desastre local.",
                    topic: "Tolerancia a fallos y copias"
                },
                {
                    question: "8. ¿Qué tipo de copia facilita restauración rápida pero ocupa más espacio?",
                    options: [
                        "Completa",
                        "Diferencial",
                        "Parcial",
                        "Incremental"
                    ],
                    correct: 0,
                    explanation: "La copia completa (Full backup) facilita la restauración ya que solo requiere un conjunto de archivos, pero es la que más espacio ocupa y más tiempo tarda en realizarse.",
                    topic: "Tolerancia a fallos y copias"
                },
                {
                    question: "9. ¿Qué nivel de RAID no ofrece redundancia?",
                    options: [
                        "RAID0",
                        "RAID6",
                        "RAID5",
                        "RAID1"
                    ],
                    correct: 0,
                    explanation: "RAID0 (Striping) mejora el rendimiento al repartir datos, pero no ofrece redundancia; la pérdida de un disco resulta en la pérdida total de datos.",
                    topic: "RAID y redundancia"
                },
                {
                    question: "10. ¿Qué nivel de RAID combina espejos y striping?",
                    options: [
                        "RAID6",
                        "RAID10",
                        "RAID0",
                        "RAID5"
                    ],
                    correct: 1,
                    explanation: "RAID10 (o RAID 1+0) combina el Striping (RAID0) para rendimiento y el Mirroring (RAID1) para redundancia y alta disponibilidad.",
                    topic: "RAID y redundancia"
                },
                {
                    question: "11. ¿Qué ventaja ofrece RAID1?",
                    options: [
                        "Continuidad del servicio si falla un disco",
                        "Rendimiento peor que un único disco",
                        "Mayor riesgo de pérdida de datos",
                        "Ahorro total de espacio"
                    ],
                    correct: 0,
                    explanation: "RAID1 (Mirroring o Espejo) duplica los datos, permitiendo que el sistema siga funcionando sin interrupción si uno de los discos falla.",
                    topic: "RAID y redundancia"
                },
                {
                    question: "12. ¿Qué riesgo presenta RAID5 con discos grandes?",
                    options: [
                        "Error de lectura irrecuperable (URE) en reconstrucción",
                        "Se pierde la mitad del espacio",
                        "No permite lecturas concurrentes",
                        "Falta total de rendimiento"
                    ],
                    correct: 0,
                    explanation: "El riesgo de un URE (Unrecoverable Read Error) durante la reconstrucción aumenta con el tamaño de los discos en RAID5, lo que puede llevar a la pérdida de todo el array.",
                    topic: "RAID y redundancia"
                },
                {
                    question: "13. ¿Qué sistema de archivos ofrece integridad end-to-end?",
                    options: [
                        "EXT2",
                        "ZFS con RAIDZ",
                        "ReFS",
                        "FAT32"
                    ],
                    correct: 1,
                    explanation: "ZFS (junto con su variante RAIDZ) utiliza sumas de verificación (checksums) para verificar la integridad de los datos de forma continua (end-to-end).",
                    topic: "Sistemas de archivos"
                },
                {
                    question: "14. ¿Qué herramienta centraliza logs en grandes entornos?",
                    options: [
                        "Notepad",
                        "Excel",
                        "ELK Stack",
                        "Paint"
                    ],
                    correct: 2,
                    explanation: "ELK Stack (Elasticsearch, Logstash, Kibana) es una solución de gestión de logs (SIEM) muy popular para entornos empresariales grandes.",
                    topic: "Monitorización y Logs"
                },
                {
                    question: "15. ¿Qué evento indica fallos de inicio de sesión en Windows?",
                    options: [
                        "1000",
                        "7036",
                        "4625",
                        "5156"
                    ],
                    correct: 2,
                    explanation: "El ID de evento 4625 en el registro de seguridad de Windows indica un fallo en el inicio de sesión de una cuenta (Account Logon Failed).",
                    topic: "Monitorización y Logs"
                },
                {
                    question: "16. ¿Qué solución antimalware es nativa de Windows?",
                    options: [
                        "Falco",
                        "Microsoft Defender",
                        "Snort",
                        "ClamAV"
                    ],
                    correct: 1,
                    explanation: "Microsoft Defender es el conjunto de soluciones de seguridad antimalware y de protección de endpoints integrado en Windows desde Windows 8.",
                    topic: "Defensa contra malware"
                },
                {
                    question: "17. ¿Qué práctica reduce la superficie de ataque?",
                    options: [
                        "Principio de mínimo privilegio (PoLP)",
                        "Permisos globales para Everyone",
                        "Desactivar auditorías",
                        "Uso de cuentas con privilegios elevados"
                    ],
                    correct: 0,
                    explanation: "El Principio de Mínimo Privilegio (Principle of Least Privilege) asegura que solo se otorgan los permisos estrictamente necesarios, reduciendo las vías de explotación (superficie de ataque).",
                    topic: "Gestión de privilegios"
                },
                {
                    question: "18. ¿Qué herramienta de Linux detecta rootkits?",
                    options: [
                        "sysmon",
                        "icacls",
                        "AppLocker",
                        "rkhunter"
                    ],
                    correct: 3,
                    explanation: "`rkhunter` (Rootkit Hunter) es una herramienta muy utilizada en Linux para escanear y detectar rootkits, puertas traseras y exploits locales.",
                    topic: "Defensa contra malware"
                },
                {
                    question: "19. ¿Qué estrategia de actualizaciones minimiza riesgos?",
                    options: [
                        "Despliegue en anillos (piloto, preproducción, producción)",
                        "Ignorar parches de seguridad",
                        "Esperar años antes de actualizar",
                        "Instalar todo directamente en producción"
                    ],
                    correct: 0,
                    explanation: "El despliegue en anillos o fases permite probar las actualizaciones en un pequeño grupo controlado (piloto) antes de liberarlas al entorno de producción, minimizando el impacto de posibles fallos.",
                    topic: "Gestión de actualizaciones"
                },
                {
                    question: "20. ¿Cuál es el primer paso ante una infección?",
                    options: [
                        "Aislar el sistema afectado",
                        "Cambiar de hardware",
                        "Ignorar el incidente",
                        "Formatear directamente"
                    ],
                    correct: 0,
                    explanation: "El primer paso de la respuesta a incidentes es la contención: aislar el sistema afectado (desconectarlo de la red) para evitar que la infección se propague a otros sistemas.",
                    topic: "Respuesta a incidentes"
                }
            ],
            ut5: [
                {
                    question: "1. ¿Qué modelo de red se basa en servidores que ofrecen servicios y clientes que los consumen?",
                    options: [
                        "Cliente-servidor",
                        "Peer-to-peer",
                        "Mesh",
                        "Punto a punto"
                    ],
                    correct: 0,
                    explanation: "El modelo Cliente-Servidor es la arquitectura base donde los clientes solicitan recursos y los servidores los proporcionan (ej. web, correo, dominio).",
                    topic: "Modelos de red"
                },
                {
                    question: "2. ¿Qué elemento centraliza la autenticación y administración en un dominio?",
                    options: [
                        "Proxy",
                        "Router",
                        "Controlador de dominio",
                        "Servidor de archivos"
                    ],
                    correct: 2,
                    explanation: "El Controlador de Dominio (DC) es el servidor clave que ejecuta el servicio de directorio (como Active Directory) y gestiona la autenticación centralizada.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "3. ¿Qué protocolo utiliza Active Directory para autenticación principal?",
                    options: [
                        "Kerberos",
                        "NTLM",
                        "TACACS+",
                        "RADIUS"
                    ],
                    correct: 0,
                    explanation: "Kerberos es el protocolo de autenticación principal y seguro utilizado por Active Directory para conceder acceso a los recursos de la red mediante tickets.",
                    topic: "Protocolos de autenticación"
                },
                {
                    question: "4. ¿Qué unidad lógica organiza objetos dentro de un dominio?",
                    options: [
                        "VLAN",
                        "Grupo de trabajo",
                        "Subred",
                        "OU (Organizational Unit)"
                    ],
                    correct: 3,
                    explanation: "Una OU (Unidad Organizativa) es un contenedor lógico en Active Directory que permite agrupar usuarios, equipos y aplicar GPOs a ese subconjunto.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "5. ¿Qué protocolo asigna direcciones IP dinámicamente?",
                    options: [
                        "DHCP",
                        "LDAP",
                        "DNS",
                        "NTP"
                    ],
                    correct: 0,
                    explanation: "DHCP (Dynamic Host Configuration Protocol) asigna de forma automática y temporal direcciones IP a los dispositivos en la red.",
                    topic: "Protocolos de red"
                },
                {
                    question: "6. ¿Qué servicio resuelve nombres de dominio en direcciones IP?",
                    options: [
                        "FTP",
                        "DNS",
                        "DHCP",
                        "SMTP"
                    ],
                    correct: 1,
                    explanation: "DNS (Domain Name System) es el servicio que traduce nombres de dominio legibles por humanos (ej. google.com) a direcciones IP numéricas.",
                    topic: "Protocolos de red"
                },
                {
                    question: "7. ¿Qué protocolo estándar permite consultar y modificar servicios de directorio?",
                    options: [
                        "LDAP",
                        "SNMP",
                        "HTTP",
                        "FTP"
                    ],
                    correct: 0,
                    explanation: "LDAP (Lightweight Directory Access Protocol) es el protocolo utilizado para interactuar con bases de datos de servicios de directorio, como Active Directory.",
                    topic: "Protocolos de directorio"
                },
                {
                    question: "8. ¿Qué rol garantiza coherencia en operaciones críticas de AD?",
                    options: [
                        "FSMO",
                        "SYSVOL",
                        "SPN",
                        "OU"
                    ],
                    correct: 0,
                    explanation: "Los roles FSMO (Flexible Single Master Operation) son roles especiales que garantizan la coherencia y evitan conflictos en operaciones que solo deben ser realizadas por un único DC.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "9. ¿Qué recurso compartido contiene GPOs y scripts en los DC?",
                    options: [
                        "SPN",
                        "SYSVOL",
                        "NETLOGON",
                        "/etc/passwd"
                    ],
                    correct: 1,
                    explanation: "SYSVOL es una carpeta compartida que almacena archivos importantes para la replicación del dominio, incluyendo las políticas de grupo (GPO) y scripts de inicio de sesión.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "10. ¿Qué diferencia clave hay entre dominio y grupo de trabajo?",
                    options: [
                        "Necesidad de switches gestionables",
                        "Uso exclusivo de Linux",
                        "Uso de VLANs",
                        "Centralización de autenticación"
                    ],
                    correct: 3,
                    explanation: "La principal diferencia es que un dominio centraliza la autenticación en los Controladores de Dominio, mientras que en un grupo de trabajo cada máquina es responsable de su seguridad.",
                    topic: "Modelos de red"
                },
                {
                    question: "11. ¿Qué protocolo evita envío de contraseñas en claro usando tickets?",
                    options: [
                        "Telnet",
                        "FTP",
                        "HTTP",
                        "Kerberos"
                    ],
                    correct: 3,
                    explanation: "Kerberos se basa en el intercambio de 'tickets' cifrados, lo que significa que las contraseñas nunca se envían a través de la red, mejorando la seguridad.",
                    topic: "Protocolos de autenticación"
                },
                {
                    question: "12. ¿Qué servicio Linux puede actuar como controlador de dominio compatible con Windows?",
                    options: [
                        "MySQL",
                        "Samba AD DC",
                        "Apache",
                        "Bind"
                    ],
                    correct: 1,
                    explanation: "Samba Active Directory Domain Controller (Samba AD DC) permite que un servidor Linux se comporte como un Controlador de Dominio de Windows.",
                    topic: "Servicios Linux"
                },
                {
                    question: "13. ¿Qué mecanismo aplica configuraciones a usuarios y equipos en AD?",
                    options: [
                        "GPO (Group Policy Object)",
                        "PAM",
                        "Firewall local",
                        "Cron"
                    ],
                    correct: 0,
                    explanation: "Los GPO (Objetos de Política de Grupo) son el mecanismo principal en Active Directory para establecer configuraciones de seguridad, entorno y software a nivel centralizado.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "14. ¿Qué tipo de controladores de dominio son recomendados en sedes remotas?",
                    options: [
                        "PDC clásico",
                        "DNS esclavo",
                        "RODC (Read Only Domain Controller)",
                        "DHCP secundario"
                    ],
                    correct: 2,
                    explanation: "Los RODC (Controladores de Dominio de Solo Lectura) se utilizan en ubicaciones menos seguras o remotas, ya que no almacenan contraseñas con hash (a menos que se configuren explícitamente), limitando el riesgo en caso de compromiso.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "15. ¿Qué comando en Windows verifica el estado de un DC?",
                    options: [
                        "ipconfig",
                        "dcdiag",
                        "ping",
                        "nslookup"
                    ],
                    correct: 1,
                    explanation: "`dcdiag` (Domain Controller Diagnostic) es la herramienta de línea de comandos diseñada para analizar y reportar el estado de salud de un Controlador de Dominio.",
                    topic: "Comandos Windows"
                },
                {
                    question: "16. ¿Qué atributo permite coherencia de identidades POSIX en AD?",
                    options: [
                        "RFC2307",
                        "NetBIOS",
                        "SPN",
                        "SIDHistory"
                    ],
                    correct: 0,
                    explanation: "El esquema RFC2307 extiende Active Directory para incluir atributos POSIX (como uid, gid y shell) para la integración con sistemas Linux/Unix.",
                    topic: "Integración AD/Linux"
                },
                {
                    question: "17. ¿Qué herramienta Linux integra autenticación con AD?",
                    options: [
                        "sudo",
                        "cron",
                        "grep",
                        "SSSD"
                    ],
                    correct: 3,
                    explanation: "SSSD (System Security Services Daemon) es un servicio que se ejecuta en sistemas Linux para gestionar la autenticación y el acceso a servicios de directorio remotos como Active Directory.",
                    topic: "Integración AD/Linux"
                },
                {
                    question: "18. ¿Qué orden de aplicación siguen las GPO?",
                    options: [
                        "Dominio primero",
                        "Herencia aleatoria",
                        "OU primero",
                        "LSDOU (Local, Sitio, Dominio, OU)"
                    ],
                    correct: 3,
                    explanation: "El orden de aplicación (y, por lo tanto, de prevalencia) de las GPO es: Local (L), Sitio (S), Dominio (D) y Unidad Organizativa (OU). Las GPO de OU son las últimas en aplicarse y tienen la máxima prioridad.",
                    topic: "Servicios de Directorio"
                },
                {
                    question: "19. ¿Qué protocolo es considerado legado frente a Kerberos?",
                    options: [
                        "SMBv2",
                        "SSH",
                        "FTP",
                        "NTLM"
                    ],
                    correct: 3,
                    explanation: "NTLM (NT Lan Manager) es un protocolo de autenticación antiguo de Microsoft que ha sido reemplazado por Kerberos como el estándar preferido por su superioridad en seguridad.",
                    topic: "Protocolos de autenticación"
                },
                {
                    question: "20. ¿Qué protocolo asegura sincronización de tiempo en un dominio?",
                    options: [
                        "SMTP",
                        "DHCP",
                        "NTP",
                        "POP3"
                    ],
                    correct: 2,
                    explanation: "NTP (Network Time Protocol) es esencial para la sincronización de la hora. Active Directory (Kerberos en particular) requiere que las máquinas estén sincronizadas para que la autenticación funcione correctamente.",
                    topic: "Protocolos de red"
                }
            ],

            ut6: [
                {
                    question: "1. ¿Qué es un sistema de archivos?",
                    options: [
                        "Un controlador de dispositivo de red",
                        "Una memoria caché de la CPU",
                        "Una tabla de procesos en ejecución",
                        "Una estructura que organiza y gestiona datos en dispositivos de almacenamiento"
                    ],
                    correct: 3,
                    explanation: "El sistema de archivos proporciona una forma organizada de almacenar, recuperar y gestionar datos en el disco duro u otros dispositivos.",
                    topic: "Conceptos básicos"
                },
                {
                    question: "2. ¿Qué componente mantiene el registro de los bloques ocupados y disponibles?",
                    options: [
                        "El registro de procesos",
                        "La tabla de asignación de archivos",
                        "La memoria virtual",
                        "El journal del sistema"
                    ],
                    correct: 1,
                    explanation: "La Tabla de Asignación de Archivos (FAT, inodos en Linux, etc.) mantiene el registro de qué bloques de datos están libres y cuáles están ocupados por archivos.",
                    topic: "Conceptos básicos"
                },
                {
                    question: "3. ¿Qué característica distingue a NTFS frente a FAT32?",
                    options: [
                        "Soporte para compresión, cifrado y cuotas",
                        "Falta de journaling",
                        "Limitación de archivos a 4 GB",
                        "Compatibilidad universal con todos los sistemas"
                    ],
                    correct: 0,
                    explanation: "NTFS soporta características avanzadas como journaling, seguridad a nivel de archivo (ACLs), compresión y cifrado, que no tiene FAT32.",
                    topic: "Sistemas de archivos Windows"
                },
                {
                    question: "4. ¿Cuál es el sistema de archivos por defecto en la mayoría de distribuciones Linux modernas?",
                    options: [
                        "NTFS",
                        "FAT32",
                        "HFS+",
                        "Ext4"
                    ],
                    correct: 3,
                    explanation: "Ext4 (Fourth Extended Filesystem) es el sistema de archivos por defecto en la mayoría de las distribuciones Linux actuales.",
                    topic: "Sistemas de archivos Linux"
                },
                {
                    question: "5. ¿Qué esquema de particionado permite hasta 128 particiones primarias?",
                    options: [
                        "BIOS",
                        "MBR",
                        "GPT",
                        "FAT32"
                    ],
                    correct: 2,
                    explanation: "GPT (GUID Partition Table) es el esquema moderno que soporta discos de más de 2 TB y permite hasta 128 particiones primarias por defecto.",
                    topic: "Particionado"
                },
                {
                    question: "6. ¿Qué comando de Windows se usa para gestionar particiones desde línea de comandos?",
                    options: [
                        "blkid",
                        "fdisk",
                        "diskpart",
                        "parted"
                    ],
                    correct: 2,
                    explanation: "DiskPart es la herramienta de línea de comandos en Windows para gestionar discos, particiones y volúmenes.",
                    topic: "Comandos Windows"
                },
                {
                    question: "7. ¿Qué herramienta de Linux se utiliza para gestionar particiones en discos grandes con GPT?",
                    options: [
                        "gdisk",
                        "mountvol",
                        "diskpart",
                        "defrag"
                    ],
                    correct: 0,
                    explanation: "gdisk es la herramienta equivalente a fdisk para discos que usan el esquema de particionado GPT.",
                    topic: "Comandos Linux"
                },
                {
                    question: "8. ¿Qué directorio en Linux suele emplearse para montajes temporales?",
                    options: [
                        "/etc",
                        "/usr",
                        "/opt",
                        "/mnt"
                    ],
                    correct: 3,
                    explanation: "/mnt (mount) es el directorio tradicionalmente utilizado para el montaje temporal de sistemas de archivos.",
                    topic: "Montaje"
                },
                {
                    question: "9. ¿Qué archivo de configuración en Linux gestiona los montajes automáticos?",
                    options: [
                        "/etc/fstab",
                        "/etc/resolv.conf",
                        "/etc/passwd",
                        "/etc/hosts"
                    ],
                    correct: 0,
                    explanation: "/etc/fstab (file system table) define los sistemas de archivos que deben montarse automáticamente al inicio del sistema.",
                    topic: "Montaje"
                },
                {
                    question: "10. ¿Qué opción de montaje en Linux fuerza el acceso en solo lectura?",
                    options: [
                        "rw",
                        "user",
                        "ro",
                        "exec"
                    ],
                    correct: 2,
                    explanation: "La opción 'ro' (read-only) se utiliza con el comando 'mount' para garantizar que el sistema de archivos no se pueda modificar.",
                    topic: "Montaje"
                },
                {
                    question: "11. ¿Qué comando desmonta un sistema de archivos en Linux?",
                    options: [
                        "umount",
                        "mount",
                        "lsblk",
                        "chmod"
                    ],
                    correct: 0,
                    explanation: "umount es el comando correcto para desmontar un sistema de archivos.",
                    topic: "Montaje"
                },
                {
                    question: "12. ¿Qué herramienta de Windows permite verificar y reparar sistemas de archivos?",
                    options: [
                        "fsck",
                        "chkdsk",
                        "smartctl",
                        "badblocks"
                    ],
                    correct: 1,
                    explanation: "chkdsk (Check Disk) es la herramienta nativa de Windows para comprobar la integridad del sistema de archivos y reparar errores lógicos.",
                    topic: "Diagnóstico y reparación"
                },
                {
                    question: "13. ¿Qué herramienta de Linux se usa para reparar sistemas de archivos ext4?",
                    options: [
                        "chkdsk",
                        "e2fsck",
                        "sfc",
                        "dism"
                    ],
                    correct: 1,
                    explanation: "e2fsck se utiliza para verificar y reparar sistemas de archivos ext2, ext3 y ext4 en Linux.",
                    topic: "Diagnóstico y reparación"
                },
                {
                    question: "14. ¿Qué herramienta de Linux está especializada en reparar sistemas de archivos XFS?",
                    options: [
                        "xfs_repair",
                        "sfc",
                        "fsck.ext4",
                        "fsck.fat"
                    ],
                    correct: 0,
                    explanation: "xfs_repair es la utilidad específica para diagnosticar y reparar sistemas de archivos XFS.",
                    topic: "Diagnóstico y reparación"
                },
                {
                    question: "15. ¿Qué comando de Windows verifica y repara la imagen del sistema?",
                    options: [
                        "chkdsk",
                        "dism",
                        "fdisk",
                        "mountvol"
                    ],
                    correct: 1,
                    explanation: "DISM (Deployment Image Servicing and Management) se usa para reparar la imagen del sistema Windows, a menudo para solucionar fallos que SFC no puede resolver.",
                    topic: "Diagnóstico y reparación"
                },
                {
                    question: "16. ¿Qué tecnología de discos permite predecir fallos inminentes?",
                    options: [
                        "BIOS",
                        "RAID 0",
                        "SMART",
                        "UEFI"
                    ],
                    correct: 2,
                    explanation: "SMART (Self-Monitoring, Analysis and Reporting Technology) es un sistema integrado en los discos duros que monitorea y reporta su estado para predecir fallos.",
                    topic: "Diagnóstico y fallos"
                },
                {
                    question: "17. ¿Qué error típico se produce cuando un disco presenta áreas físicas dañadas?",
                    options: [
                        "Sector defectuoso",
                        "Fragmentación alta",
                        "Journal dañado",
                        "Inodo corrupto"
                    ],
                    correct: 0,
                    explanation: "Un sector defectuoso (bad sector) es un área del disco que ha sufrido daño físico o permanente y ya no puede almacenar datos.",
                    topic: "Diagnóstico y fallos"
                },
                {
                    question: "18. ¿Qué sistema de archivos combina gestor de volúmenes y sistema de archivos?",
                    options: [
                        "FAT32",
                        "Ext4",
                        "ZFS",
                        "NTFS"
                    ],
                    correct: 2,
                    explanation: "ZFS integra funciones como gestión de volúmenes, RAID y sistema de archivos en una única solución.",
                    topic: "Sistemas de archivos avanzados"
                },
                {
                    question: "19. ¿Qué comando en Linux muestra la estructura de bloques de dispositivos?",
                    options: [
                        "fsck",
                        "diskpart",
                        "lsblk",
                        "defrag"
                    ],
                    correct: 2,
                    explanation: "lsblk (list block devices) muestra información sobre todos los dispositivos de bloque (discos, particiones) de forma jerárquica.",
                    topic: "Comandos Linux"
                },
                {
                    question: "20. ¿Qué sistema de archivos de Microsoft está diseñado para alta capacidad y resiliencia?",
                    options: [
                        "ReFS",
                        "ZFS",
                        "FAT16",
                        "Ext3"
                    ],
                    correct: 0,
                    explanation: "ReFS (Resilient File System) es el sistema de archivos de Microsoft más reciente, diseñado para la tolerancia a fallos y grandes volúmenes de datos.",
                    topic: "Sistemas de archivos Windows"
                }
            ],
            ut7: [
                {
                    question: "1. ¿Cuál es el objetivo principal de una auditoría de sistemas?",
                    options: [
                        "Acelerar el rendimiento del hardware",
                        "Reducir el coste de licencias de software",
                        "Evaluar la eficacia de los controles técnicos y organizativos",
                        "Eliminar virus informáticos"
                    ],
                    correct: 2,
                    explanation: "El objetivo de la auditoría es evaluar la eficacia de los controles de seguridad y cumplimiento.",
                    topic: "Auditoría y cumplimiento"
                },
                {
                    question: "2. ¿Qué marco normativo español regula la seguridad en sistemas de información?",
                    options: [
                        "GDPR",
                        "ENS (Esquema Nacional de Seguridad)",
                        "PCI-DSS",
                        "COBIT"
                    ],
                    correct: 1,
                    explanation: "El Esquema Nacional de Seguridad (ENS) es el marco que regula la seguridad de la información en la Administración Pública española.",
                    topic: "Normativa"
                },
                {
                    question: "3. ¿Qué norma internacional define el Sistema de Gestión de Seguridad de la Información (SGSI)?",
                    options: [
                        "ITIL",
                        "CIS Controls",
                        "ISO/IEC 27001",
                        "ISO 9001"
                    ],
                    correct: 2,
                    explanation: "ISO/IEC 27001 es la norma internacional que establece los requisitos para un SGSI.",
                    topic: "Normativa"
                },
                {
                    question: "4. ¿Qué herramienta de Linux permite auditar eventos de seguridad de alto valor?",
                    options: [
                        "iptables",
                        "cron",
                        "systemctl",
                        "auditd"
                    ],
                    correct: 3,
                    explanation: "auditd es el demonio de auditoría en Linux que registra información detallada sobre eventos de seguridad para su posterior análisis.",
                    topic: "Comandos Linux"
                },
                {
                    question: "5. ¿Qué comando de Windows permite exportar registros de eventos de seguridad?",
                    options: [
                        "ipconfig",
                        "wevtutil epl",
                        "netstat",
                        "ping"
                    ],
                    correct: 1,
                    explanation: "wevtutil (Windows Event Utility) se utiliza para gestionar logs y la opción 'epl' (Export-Log) para exportar eventos.",
                    topic: "Comandos Windows"
                },
                {
                    question: "6. ¿Qué modelo de control de accesos se basa en roles y jerarquías?",
                    options: [
                        "DAC",
                        "ABAC",
                        "MAC",
                        "RBAC"
                    ],
                    correct: 3,
                    explanation: "RBAC (Role-Based Access Control) asigna permisos basados en el rol del usuario en la organización.",
                    topic: "Control de accesos"
                },
                {
                    question: "7. ¿Qué principio se aplica en RBAC para reducir riesgos?",
                    options: [
                        "Mínimo privilegio",
                        "Máxima disponibilidad",
                        "Redundancia de hardware",
                        "Uso compartido de credenciales"
                    ],
                    correct: 0,
                    explanation: "El principio de Mínimo Privilegio asegura que los usuarios solo tienen los permisos estrictamente necesarios para su función.",
                    topic: "Control de accesos"
                },
                {
                    question: "8. ¿Qué técnica protege cuentas privilegiadas mediante concesión temporal de permisos?",
                    options: [
                        "Just-In-Time (JIT)",
                        "Copia de seguridad incremental",
                        "Multiplexación de procesos",
                        "Desfragmentación de disco"
                    ],
                    correct: 0,
                    explanation: "JIT (Just-In-Time) otorga permisos elevados solo por un tiempo limitado, reduciendo la ventana de exposición.",
                    topic: "Gestión de privilegios"
                },
                {
                    question: "9. ¿Qué solución open source de SIEM se basa en OSSEC?",
                    options: [
                        "Nagios",
                        "Graylog",
                        "Splunk",
                        "Wazuh"
                    ],
                    correct: 3,
                    explanation: "Wazuh es una plataforma SIEM de código abierto basada en OSSEC que ofrece detección de intrusiones, gestión de logs y monitorización de integridad.",
                    topic: "Gestión de logs (SIEM)"
                },
                {
                    question: "10. ¿Qué plataforma de gestión de logs destaca por búsquedas y dashboards personalizados?",
                    options: [
                        "Metasploit",
                        "Nessus",
                        "Graylog",
                        "Wireshark"
                    ],
                    correct: 2,
                    explanation: "Graylog es una plataforma popular de gestión de logs (SIEM) que ofrece potentes capacidades de búsqueda y visualización (dashboards).",
                    topic: "Gestión de logs (SIEM)"
                },
                {
                    question: "11. ¿Qué comando de Linux muestra el estado de sincronización horaria?",
                    options: [
                        "timedatectl status",
                        "ls -l",
                        "df -h",
                        "ps aux"
                    ],
                    correct: 0,
                    explanation: "timedatectl status muestra el estado del reloj del sistema, incluyendo si la sincronización con un servidor NTP está activa.",
                    topic: "Comandos Linux"
                },
                {
                    question: "12. ¿Qué directiva de Windows controla políticas avanzadas de auditoría?",
                    options: [
                        "auditpol",
                        "msconfig",
                        "net use",
                        "gpupdate"
                    ],
                    correct: 0,
                    explanation: "auditpol es el comando de línea de comandos en Windows para ver y modificar las directivas de auditoría.",
                    topic: "Comandos Windows"
                },
                {
                    question: "13. ¿Qué cuentas requieren protección especial con PAM y MFA?",
                    options: [
                        "Cuentas privilegiadas",
                        "Cuentas de invitado",
                        "Cuentas bloqueadas",
                        "Usuarios estándar"
                    ],
                    correct: 0,
                    explanation: "Las cuentas privilegiadas (administradores, root) requieren protección especial como PAM (Privileged Access Management) y MFA (Multi-Factor Authentication).",
                    topic: "Gestión de privilegios"
                },
                {
                    question: "14. ¿Qué evento de Windows corresponde a un inicio de sesión correcto?",
                    options: [
                        "4625",
                        "4688",
                        "1102",
                        "4624"
                    ],
                    correct: 3,
                    explanation: "El ID de evento 4624 en el registro de seguridad de Windows corresponde a un inicio de sesión de cuenta correcto.",
                    topic: "Análisis de logs"
                },
                {
                    question: "15. ¿Qué medida asegura la integridad de un archivo de evidencia?",
                    options: [
                        "Cambiar permisos de lectura",
                        "Copiarlo en otro directorio",
                        "Renombrar el archivo",
                        "Hash criptográfico"
                    ],
                    correct: 3,
                    explanation: "El hash criptográfico genera una huella digital única (checksum) que prueba que el archivo no ha sido alterado desde el momento de la captura.",
                    topic: "Evidencia forense"
                },
                {
                    question: "16. ¿Qué fase de la respuesta a incidentes incluye la erradicación de la causa raíz?",
                    options: [
                        "Recuperación",
                        "Preparación",
                        "Post-mortem",
                        "Contención y erradicación"
                    ],
                    correct: 3,
                    explanation: "La fase de Contención busca detener el incidente, y la Erradicación elimina la causa raíz (p. ej., el malware o la vulnerabilidad).",
                    topic: "Respuesta a incidentes"
                },
                {
                    question: "17. ¿Qué herramienta Linux muestra los últimos accesos fallidos por SSH?",
                    options: [
                        "free -m",
                        "journalctl -u ssh",
                        "ps aux",
                        "uname -a"
                    ],
                    correct: 1,
                    explanation: "journalctl -u ssh muestra los logs recientes del servicio SSH, incluyendo intentos de inicio de sesión fallidos.",
                    topic: "Comandos Linux"
                },
                {
                    question: "18. ¿Qué medida organizativa evita la acumulación excesiva de permisos?",
                    options: [
                        "Recertificación periódica",
                        "Deshabilitar el firewall",
                        "Compartir contraseñas",
                        "Formateo de discos"
                    ],
                    correct: 0,
                    explanation: "La recertificación periódica obliga a revisar y confirmar que los usuarios aún necesitan los permisos asignados, evitando su acumulación.",
                    topic: "Gestión de privilegios"
                },
                {
                    question: "19. ¿Qué estándar internacional se complementa con ENS para auditorías mixtas?",
                    options: [
                        "NIST 800-53",
                        "ISO/IEC 27001",
                        "ITIL",
                        "ISO 14001"
                    ],
                    correct: 1,
                    explanation: "ISO/IEC 27001 se complementa a menudo con el ENS para auditorías que cubren ambos ámbitos.",
                    topic: "Normativa"
                },
                {
                    question: "20. ¿Qué documento recoge hallazgos, evidencias, riesgos y recomendaciones? ",
                    options: [
                        "Manual de usuario",
                        "Informe de auditoría",
                        "Acuerdo de nivel de servicio",
                        "Inventario de hardware"
                    ],
                    correct: 1,
                    explanation: "El Informe de Auditoría es el documento formal que resume el alcance, los hallazgos, las evidencias y las recomendaciones para mitigar los riesgos.",
                    topic: "Auditoría y cumplimiento"
                }
            ],
            ut8: [
                {
                    question: "1. ¿Qué es lo primero que debe realizarse antes de implantar un servicio cliente-servidor?",
                    options: [
                        "Instalación de Apache",
                        "Análisis de requisitos y dependencias",
                        "Configuración de firewalls",
                        "Pruebas de rendimiento"
                    ],
                    correct: 1,
                    explanation: "El análisis de requisitos y dependencias es fundamental para planificar y garantizar el correcto funcionamiento del servicio.",
                    topic: "Planificación"
                },
                {
                    question: "2. ¿Qué arquitectura clásica se utiliza habitualmente en sistemas cliente-servidor?",
                    options: [
                        "Tres capas: presentación, lógica de negocio y datos",
                        "Monolítica de una sola capa",
                        "Arquitectura mesh",
                        "Arquitectura híbrida de cinco capas"
                    ],
                    correct: 0,
                    explanation: "La arquitectura de tres capas es un modelo estándar: Capa de Presentación (cliente), Lógica de Negocio (servidor de aplicaciones) y Datos (servidor de base de datos).",
                    topic: "Arquitectura"
                },
                {
                    question: "3. ¿Qué comando en Linux muestra información sobre la CPU?",
                    options: [
                        "free -h",
                        "df -h",
                        "lscpu",
                        "top"
                    ],
                    correct: 2,
                    explanation: "`lscpu` muestra la arquitectura de la CPU, incluyendo el número de núcleos, hilos y sockets.",
                    topic: "Administración y comandos"
                },
                {
                    question: "4. ¿Qué servicio proporciona acceso web en un entorno cliente-servidor?",
                    options: [
                        "MySQL",
                        "FTP",
                        "Apache o Nginx",
                        "Redis"
                    ],
                    correct: 2,
                    explanation: "Apache HTTP Server y Nginx son los servidores web más comunes para proporcionar acceso y manejar peticiones web.",
                    topic: "Servidores web"
                },
                {
                    question: "5. ¿Qué motor de base de datos destaca por su robustez y soporte ACID avanzado?",
                    options: [
                        "PostgreSQL",
                        "SQLite",
                        "MySQL",
                        "MariaDB"
                    ],
                    correct: 0,
                    explanation: "PostgreSQL es conocido por su fuerte adherencia a los estándares SQL y su robusto soporte de transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).",
                    topic: "Bases de datos"
                },
                {
                    question: "6. ¿Qué gestor de servicios se utiliza en Linux para configurar arranques automáticos?",
                    options: [
                        "rc.local",
                        "systemd",
                        "init.d",
                        "Upstart"
                    ],
                    correct: 1,
                    explanation: "systemd es el sistema de inicio y gestor de servicios estándar en la mayoría de distribuciones Linux modernas.",
                    topic: "Administración y comandos"
                },
                {
                    question: "7. ¿Qué comando de PowerShell permite registrar un nuevo servicio en Windows?",
                    options: [
                        "Set-Service",
                        "New-Service",
                        "sc query",
                        "Get-Service"
                    ],
                    correct: 1,
                    explanation: "El cmdlet 'New-Service' se utiliza en PowerShell para crear y registrar un nuevo servicio de Windows.",
                    topic: "Administración y comandos"
                },
                {
                    question: "8. ¿Qué herramienta se usa en Linux para configurar firewalls de forma sencilla?",
                    options: [
                        "curl",
                        "cron",
                        "netstat",
                        "UFW"
                    ],
                    correct: 3,
                    explanation: "UFW (Uncomplicated Firewall) es una interfaz simplificada para gestionar reglas de netfilter/iptables en Linux.",
                    topic: "Administración y comandos"
                },
                {
                    question: "9. ¿Qué protocolo asegura las comunicaciones entre cliente y servidor?",
                    options: [
                        "HTTP sin cifrado",
                        "TLS",
                        "ARP",
                        "FTP"
                    ],
                    correct: 1,
                    explanation: "TLS (Transport Layer Security) es el protocolo criptográfico que proporciona comunicaciones seguras (cifradas) a través de redes, usado por HTTPS.",
                    topic: "Seguridad y protocolos"
                },
                {
                    question: "10. ¿Qué comando en Linux permite instalar Apache?",
                    options: [
                        "sudo apt install apache2",
                        "yum remove apache2",
                        "systemctl status apache2",
                        "netstat -tulnp"
                    ],
                    correct: 0,
                    explanation: "El comando 'sudo apt install apache2' es el comando estándar para instalar el paquete Apache2 en distribuciones basadas en Debian/Ubuntu.",
                    topic: "Administración y comandos"
                },
                {
                    question: "11. ¿Qué servicio de transferencia de archivos no cifra de manera nativa sus comunicaciones?",
                    options: [
                        "FTPS",
                        "SCP",
                        "SFTP",
                        "FTP"
                    ],
                    correct: 3,
                    explanation: "FTP (File Transfer Protocol) transmite datos y credenciales en texto plano; sus variantes seguras son SFTP y FTPS.",
                    topic: "Seguridad y protocolos"
                },
                {
                    question: "12. ¿Qué herramienta permite automatizar despliegues declarativos de infraestructura?",
                    options: [
                        "Git",
                        "Terraform",
                        "Docker",
                        "Bash"
                    ],
                    correct: 1,
                    explanation: "Terraform es una herramienta popular de IaC que permite definir y provisionar infraestructura declarativamente.",
                    topic: "DevOps y Automatización"
                },
                {
                    question: "13. ¿Qué archivo de configuración en MySQL permite ajustar parámetros críticos?",
                    options: [
                        "httpd.conf",
                        "nginx.conf",
                        "postgresql.conf",
                        "my.cnf"
                    ],
                    correct: 3,
                    explanation: "El archivo 'my.cnf' (o 'my.ini' en Windows) es el archivo de configuración principal para el servidor MySQL.",
                    topic: "Bases de datos"
                },
                {
                    question: "14. ¿Qué comando en Linux muestra la memoria disponible en el sistema?",
                    options: [
                        "df -h",
                        "ls",
                        "free -h",
                        "cat /etc/os-release"
                    ],
                    correct: 2,
                    explanation: "`free -h` muestra la memoria RAM y swap total, usada y libre en formato legible por humanos.",
                    topic: "Administración y comandos"
                },
                {
                    question: "15. ¿Qué práctica de seguridad se recomienda al usar contenedores?",
                    options: [
                        "Evitar la actualización de imágenes",
                        "Ejecutar procesos con usuarios sin privilegios root",
                        "Usar siempre root para evitar errores",
                        "Compartir volúmenes sin restricción"
                    ],
                    correct: 1,
                    explanation: "Una buena práctica de seguridad es usar usuarios sin privilegios (no-root) dentro del contenedor para limitar el daño potencial en caso de compromiso.",
                    topic: "Seguridad y Contenedores"
                },
                {
                    question: "16. ¿Qué herramienta permite simular usuarios concurrentes en pruebas de carga?",
                    options: [
                        "Grafana",
                        "JMeter",
                        "ELK",
                        "Prometheus"
                    ],
                    correct: 1,
                    explanation: "Apache JMeter es una herramienta de código abierto diseñada para realizar pruebas de carga y simular tráfico concurrente de usuarios.",
                    topic: "Monitorización y Pruebas"
                },
                {
                    question: "17. ¿Qué comando en Linux permite verificar el estado de un servicio?",
                    options: [
                        "ls -l",
                        "systemctl status",
                        "pwd",
                        "cd"
                    ],
                    correct: 1,
                    explanation: "`systemctl status [nombre_servicio]` se utiliza para ver si un servicio (gestionado por systemd) está activo, inactivo o fallando.",
                    topic: "Administración y comandos"
                },
                {
                    question: "18. ¿Qué herramienta se utiliza para centralizar logs en múltiples servidores?",
                    options: [
                        "Nessus",
                        "top",
                        "Zabbix",
                        "ELK Stack"
                    ],
                    correct: 3,
                    explanation: "ELK Stack (Elasticsearch, Logstash, Kibana) es una solución común para la agregación, procesamiento y visualización de logs centralizados.",
                    topic: "Monitorización y Pruebas"
                },
                {
                    question: "19. ¿Qué comando en Windows abre un puerto en el firewall?",
                    options: [
                        "netsh advfirewall firewall add rule",
                        "ping",
                        "net start",
                        "ipconfig /all"
                    ],
                    correct: 0,
                    explanation: "El comando 'netsh advfirewall firewall add rule' se utiliza en la línea de comandos de Windows para crear una nueva regla de firewall.",
                    topic: "Comandos Windows"
                },
                {
                    question: "20. ¿Qué concepto implica gestionar infraestructura mediante código reproducible?",
                    options: [
                        "Infrastructure as Code (IaC)",
                        "Virtualización ligera",
                        "Gestión manual de servicios",
                        "Ejecución en local"
                    ],
                    correct: 0,
                    explanation: "IaC (Infrastructure as Code) utiliza archivos de configuración para automatizar el aprovisionamiento de infraestructura de manera reproducible.",
                    topic: "DevOps y Automatización"
                }
            ]
        };
